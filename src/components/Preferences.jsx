import React, { useState, useEffect } from "react";

export default function Preferences({ subscriptions, setSubscriptions }) {
  // Load subscriptions from localStorage when component mounts
  useEffect(() => {
    const loadedSubscriptions = localStorage.getItem("subscriptions");
    if (loadedSubscriptions) {
      setSubscriptions(JSON.parse(loadedSubscriptions));
    }
  }, []);

  // Save subscriptions to localStorage whenever they change
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
    <div>
      <div
        onClick={() => toggleSubscription("newsAPI")}
        style={{ color: subscriptions.newsAPI ? "green" : "red" }}
      >
        News API
      </div>
      <div
        onClick={() => toggleSubscription("theGuardian")}
        style={{ color: subscriptions.theGuardian ? "green" : "red" }}
      >
        The Guardian
      </div>
      <div
        onClick={() => toggleSubscription("NYTimes")}
        style={{ color: subscriptions.NYTimes ? "green" : "red" }}
      >
        NY Times
      </div>
    </div>
  );
}
