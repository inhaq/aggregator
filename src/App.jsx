import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import "./App.css";
import PostList from "./components/PostList";
import Post from "./components/Post";
import SubNav from "./components/SubNav";
import Preferences from "./components/Preferences";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  const defaultSubscriptions = {
    newsAPI: true,
    theGuardian: true,
    NYTimes: true,
  };

  const [subscriptions, setSubscriptions] = useState(() => {
    const loadedSubscriptions = localStorage.getItem("subscriptions");
    return loadedSubscriptions
      ? JSON.parse(loadedSubscriptions)
      : defaultSubscriptions;
  });

  const [search, setSearch] = useState(() => {
    const loadedSearch = localStorage.getItem("search");
    return loadedSearch ? JSON.parse(loadedSearch) : "";
  });

  useEffect(() => {
    localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
    localStorage.setItem("search", JSON.stringify(search));
  }, [subscriptions, search]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col p-3">
        <Nav search={search} setSearch={setSearch} />
        <SubNav />
        <div className="flex flex-col md:flex-row">
          <Preferences
            subscriptions={subscriptions}
            setSubscriptions={setSubscriptions}
          />
          <PostList search={search} subscriptions={subscriptions} />
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
