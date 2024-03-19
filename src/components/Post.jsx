export default function Post({ post }) {
  if (!post) {
    return null; // or return a loading spinner, error message, etc.
  }

  const title = post.title || post.webTitle || post.headline.main;
  const description =
    post.description || post.fields?.standfirst || post.abstract;
  let imageUrl =
    post.urlToImage ||
    post.fields?.thumbnail ||
    (post.multimedia?.[0]?.url
      ? `https://www.nytimes.com/${post.multimedia[0].url}`
      : post.multimedia?.[0]?.legacy?.xlarge);
  const url = post.url || post.webUrl || post.web_url;

  return (
    <a href={url} target="_blank" className="block hover:bg-gray-100">
      <div className="flex py-4 mx-3 border-t border-b border-gray-200">
        <div
          className={`w-48 h-36 bg-gray-200 text-gray-500 flex-shrink-0 flex justify-center items-center ${
            imageUrl ? "bg-cover bg-center" : ""
          }`}
          style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
        >
          {!imageUrl || imageUrl.trim() === "" ? "No image found" : null}
        </div>
        <div className="ml-4">
          <h2 className="text-2xl font-bold font-title">{title}</h2>
          <p className="mt-2 font-sg">
            {post.fields?.standfirst ? (
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            ) : (
              description
            )}
          </p>
        </div>
      </div>
    </a>
  );
}
