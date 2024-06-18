// components/VideoPlayer.js

"use client";

import React, { useEffect, useState } from 'react';

const VideoPlayer = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/upload')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch video URL');
        }
        return response.json();
      })
      .then((data) => {
        setVideoUrl(data.url);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to load video');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-white rounded-lg shadow-3xl text-black overflow-hidden h-5/6">
      <video
        className="w-full h-full object-cover"
        src={videoUrl}
        controls
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
