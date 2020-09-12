import React, { useState } from "react";
import "./Videosidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
function Videosidebar({likes, comments, shares}   ) {
  const [Liked, setLiked] = useState(false);
  return (
    <div className="videosidebar">
      <div className="videosidebar__buttons">
        {Liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{Liked ? likes + 1 : likes }</p>
      </div>
      <div className="videosidebar__buttons">
        <MessageIcon fontSize="large" />
        <p>{comments}</p>
      </div>
      <div className="videosidebar__buttons">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default Videosidebar;
