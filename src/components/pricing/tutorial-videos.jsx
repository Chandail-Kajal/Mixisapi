import React from "react";
import VideoPlayer from "../video-player";

function TutorialVideos() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-5">
      <div className="w-full max-w-4xl mx-auto px-4 ">
        <h2 className="text-xl md:text-2xl font-bold mb-3 text-center md:text-left">
          Tutorial Video
        </h2>
        <VideoPlayer
          thumbnail="https://img.youtube.com/vi/4eZC7S6tgLc/hqdefault.jpg"
          video="https://www.youtube.com/embed/4eZC7S6tgLc?start=0&autoplay=1"
        />
      </div>
      <div className="w-full max-w-4xl mx-auto px-4 ">
        <h2 className="text-xl md:text-2xl font-bold mb-3 text-center md:text-left">
          Tutorial Video
        </h2>
        <VideoPlayer
          thumbnail="https://img.youtube.com/vi/oqZdEWW3jBk/hqdefault.jpg"
          video="https://www.youtube.com/embed/oqZdEWW3jBk?start=0&autoplay=1"
        />
      </div>
      <div className="w-full max-w-4xl mx-auto px-4 ">
        <h2 className="text-xl md:text-2xl font-bold mb-3 text-center md:text-left">
          Tutorial Video
        </h2>
        <VideoPlayer
          thumbnail="https://img.youtube.com/vi/97vKEjdTSqo/hqdefault.jpg"
          video="https://www.youtube.com/embed/97vKEjdTSqo?start=0&autoplay=1"
        />
      </div>
      <div className="w-full max-w-4xl mx-auto px-4 ">
        <h2 className="text-xl md:text-2xl font-bold mb-3 text-center md:text-left">
          Tutorial Video
        </h2>
        <VideoPlayer
          thumbnail="https://img.youtube.com/vi/6ATxXSernkw/hqdefault.jpg"
          video="https://www.youtube.com/embed/6ATxXSernkw?start=0&autoplay=1"
        />
      </div>
    </div>
  );
}

export default TutorialVideos;
