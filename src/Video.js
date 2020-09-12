import React, { useRef, useState } from "react";
import "./Video.css";
import "./Videofooter";
import "./Videosidebar";
import "./first.mp4";
import "./second.mp4";
import Videofooter from "./Videofooter";
import Videosidebar from "./Videosidebar";
import { requirePropFactory } from "@material-ui/core";

function Video({ url, channel, description, song, likes, comments, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    // if video is playing stop it

    if (playing) {
      videoRef.current.pause();

      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  // else pauseit

  return (
    <div className="video">
      <video
        className="video__player"
        src={require("./first.mp4")
        
        }
        loop
        ref={videoRef}
        onClick={handleVideoPress}
      ></video>

      <Videofooter channel={channel} description={description} song={song} />
      <Videosidebar likes={likes} comments={comments} shares={shares} />
    </div>
  );
}

export default Video;
