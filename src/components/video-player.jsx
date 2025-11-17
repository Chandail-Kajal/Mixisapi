"use client";
import { useState } from "react";

export default function VideoPlayer({ thumbnail = "", video = "" }) {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative w-full aspect-video border-4 rounded-xl border-green-600">
      {!play && (
        <div
          onClick={() => setPlay(true)}
          className="w-full h-full relative cursor-pointer overflow-hidden rounded-md group"
        >
          <img
            src={thumbnail}
            alt="WhatsApp Broadcasting Tutorial"
            className="w-full h-full object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/25 transition-all">
            <div className="bg-green-500 rounded-full p-4 group-hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-12 h-12"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {play && (
        <iframe
          className="absolute inset-0 w-full h-full rounded-md "
          src={video}
          title="WhatsApp Broadcasting Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
