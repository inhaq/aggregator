import Search from "./Search";
import Socials from "./Socials";
import { useState } from "react";

export default function Nav({ search, setSearch }) {
  return (
    <nav className="flex items-center justify-between h-20">
      <div className="flex items-center max-w-sm">
        <a href="/" className="flex items-center" title="Innoscripta News">
          <span className="text-4xl">🗞️</span>
          <span className="ml-3 text-2xl font-semibold font-title text-zinc-600 hover:text-zinc-950">
            Innoscripta News
          </span>
        </a>
      </div>
      <Search search={search} setSearch={setSearch} />
      <Socials />
    </nav>
  );
}
