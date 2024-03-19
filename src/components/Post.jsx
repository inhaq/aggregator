export default function Post({ post }) {
  if (!post) {
    return null; // or return a loading spinner, error message, etc.
  }

  const title = post.title || post.webTitle;
  const description = post.description || post.fields?.standfirst;
  const imageUrl =
    post.urlToImage || post.fields?.thumbnail || post.multimedia?.[0]?.url;
  const url = post.url || post.webUrl;

  return (
    <div className="border-t border-b border-gray-200 py-4 flex">
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
        <p className="mt-2 font-sg">{description}</p>
        <a
          href={url}
          target="_blank"
          className="text-blue-500 hover:underline font-title"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
