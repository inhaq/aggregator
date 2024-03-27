import React, { useEffect } from "react";

export default function Preferences({ subscriptions, setSubscriptions }) {
  useEffect(() => {
    const loadedSubscriptions = localStorage.getItem("subscriptions");
    if (loadedSubscriptions) {
      setSubscriptions(JSON.parse(loadedSubscriptions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
  }, [subscriptions]);

  const toggleSubscription = (source) => {
    setSubscriptions({
      ...subscriptions,
      [source]: !subscriptions[source],
    });
  };

  return (
    <div className="w-full sm:w-80">
      <p className="mt-5 text-sm font-bold text-gray-400 uppercase font-title">
        Subscribe
      </p>
      <div
        onClick={() => toggleSubscription("newsAPI")}
        className="p-4 mr-3 cursor-pointer hover:bg-gray-200"
        style={{ color: subscriptions.newsAPI ? "green" : "red" }}
      >
        News API
      </div>
      <div
        onClick={() => toggleSubscription("theGuardian")}
        className="p-4 mr-3 cursor-pointer hover:bg-gray-200"
        style={{ color: subscriptions.theGuardian ? "green" : "red" }}
      >
        The Guardian
      </div>
      <div
        onClick={() => toggleSubscription("NYTimes")}
        className="p-4 mr-3 cursor-pointer hover:bg-gray-200"
        style={{ color: subscriptions.NYTimes ? "green" : "red" }}
      >
        NY Times
      </div>
    </div>
  );
}
