import React from "react";
import "./video.css";

const Video = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted playsInline>
        <source src="/images/banner_video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
