import Search from "./Search";
import Socials from "./Socials";

export default function Nav({ search, setSearch }) {
  return (
    <nav className="flex flex-wrap items-center justify-between h-20">
      <div className="flex items-center w-full max-w-sm md:w-auto">
        <a href="/" className="flex items-center" title="Innoscripta News">
          <span className="text-4xl">🗞️</span>
          <span className="ml-3 text-2xl font-semibold font-title text-zinc-600 hover:text-zinc-950">
            Innoscripta News
          </span>
        </a>
      </div>
      <div className="w-full md:w-auto">
        <Search search={search} setSearch={setSearch} />
      </div>
      <div className="w-full md:w-auto">
        <Socials />
      </div>
    </nav>
  );
}
