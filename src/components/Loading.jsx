import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full md:h-96">
      <div className="w-10 h-10 mt-10 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}
