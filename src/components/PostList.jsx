import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import Post from "./Post";
import Loading from "./Loading";

export async function fetchPosts() {
  const keyword = JSON.parse(localStorage.getItem("keyword"));
  // Get the preferred APIs from localStorage
  const preferredApis = JSON.parse(localStorage.getItem("subscriptions"));

  // Define the base URLs for the APIs
  const apiUrls = {
    NYTimes:
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=p55wvQjH5ssOheKsXVYMqbk4iljyjsT5",
    newsAPI:
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=00277b6e3f184b7f9aaaf4504c71e33e&pageSize=5",
    theGuardian:
      "https://content.guardianapis.com/search?api-key=4549f8e6-1bbe-46a1-9658-49284c1ee65e&page-size=5",
  };

  // Initialize an array to store all the posts

  let allPosts = [];
  // Iterate over the preferred APIs
  for (let api in preferredApis) {
    // If the API is preferred (i.e., its value is true)
    if (preferredApis[api]) {
      let posts = [];

      // Append the filters to the API URL as query parameters
      let url = new URL(apiUrls[api]);
      if (keyword) url.searchParams.append("q", keyword);

      // Fetch posts from the API
      const response = await fetch(url.href);
      const data = await response.json();

      switch (api) {
        case "NYTimes":
          posts = data.results; // replace 'results' with the correct key if needed
          break;
        case "newsAPI":
          posts = data.articles; // replace 'articles' with the correct key if needed
          break;
        case "theGuardian":
          posts = data.response.results; // replace 'response.results' with the correct key if needed
          break;
      }

      if (keyword) {
        allPosts = allPosts.filter((post) =>
          post.title.toLowerCase().includes(keyword.toLowerCase())
        );
      }
      // Add the posts to allPosts
      if (posts) {
        allPosts = allPosts.concat(posts);
      }
    }
  }
  // Return all the posts
  return allPosts;
}

export default function PostList(props) {
  // Load the preferred APIs from localStorage when the component mounts

  const [search, setSearch] = useState(
    JSON.parse(localStorage.getItem("keyword"))
  );

  // Fetch the posts whenever subscriptions changes
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts", props.search, props.subscriptions],
    queryFn: fetchPosts,
    staleTime: 0,
  });

  // Save the subscriptions to localStorage whenever they change
  useEffect(() => {
    // localStorage.setItem("subscriptions", JSON.stringify(props.subscriptions));
    localStorage.setItem("keyword", JSON.stringify(search));
  }, [props.subscriptions, search]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error fetching data/API Rate exceeded</div>;
  }

  return (
    <div className="justify-center w-full">
      {posts && posts.map((post, index) => <Post key={index} post={post} />)}
    </div>
  );
}
