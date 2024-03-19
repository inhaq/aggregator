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

  // Save subscriptions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
  }, [subscriptions]);
  return (
    <>
      <Nav />
      <SubNav />
      <div className="flex">
        <Preferences
          subscriptions={subscriptions}
          setSubscriptions={setSubscriptions}
        />
        <QueryClientProvider client={queryClient}>
          <PostList subscriptions={subscriptions} />
        </QueryClientProvider>
      </div>
      <Post />
      <Footer />
    </>
  );
}

export default App;
