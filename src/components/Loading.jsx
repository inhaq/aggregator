import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-96">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-500 mt-10"></div>
    </div>
  );
}
