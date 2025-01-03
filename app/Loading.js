"use client";

import React, { useState, useEffect } from "react";
import { Pig } from "./_components";
export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5; // Increment progress
      });
    }, 100); // Adjust interval timing

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="loading-container">
      <Pig position={"loading"} index={"loading"} />

      <div className="loading-text">Loading... {progress}%</div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
