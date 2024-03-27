import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Post from "./Post";
import Loading from "./Loading";

export async function fetchPosts({ queryKey: [_, search] }) {
  const preferredApis = JSON.parse(localStorage.getItem("subscriptions"));

  const apiUrls = {
    NYTimes: `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${
      import.meta.env.VITE_NYTimes
    }`,
    newsAPI: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      import.meta.env.VITE_newsAPI
    }`,
    theGuardian: `https://content.guardianapis.com/search?api-key=${
      import.meta.env.VITE_theGuardian
    }&show-fields=thumbnail,standfirst`,
  };

  let allPosts = [];
  for (let api in preferredApis) {
    if (preferredApis[api]) {
      let posts = [];

      let url = new URL(apiUrls[api]);
      if (search && search !== "") url.searchParams.append("q", search);

      const response = await fetch(url.href);
      const data = await response.json();

      switch (api) {
        case "NYTimes":
          posts = data.response.docs;
          break;
        case "newsAPI":
          posts = data.articles;
          break;
        case "theGuardian":
          posts = data.response.results;
          break;
      }

      if (search) {
        allPosts = allPosts.filter((post) =>
          post.title.toLowerCase().includes(search.toLowerCase())
        );
      }
      if (posts) {
        allPosts = allPosts.concat(posts);
      }
    }
  }
  return allPosts;
}

export default function PostList({ search, subscriptions }) {
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts", search, subscriptions],
    queryFn: fetchPosts,
    staleTime: 0,
  });

  useEffect(() => {
    localStorage.setItem("search", JSON.stringify(search));
  }, [subscriptions, search]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        Error fetching data/API Rate exceeded
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full md:w-auto">
      {posts && posts.length === 0 ? (
        <p className="flex items-center justify-center text-gray-500 h-80">
          No source subscribed / Article not found in source. Please subscribe
          to sources from sidebar.
        </p>
      ) : null}
      {posts && posts.map((post, index) => <Post key={index} post={post} />)}
    </div>
  );
}
