import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center">
      <span className="relative flex size-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
      </span>
    </div>
  );
};

export default LoadingScreen;
