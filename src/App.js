import { requirePropFactory } from "@material-ui/core";
import React, {useEffect,useState,} from "react";
import "./App.css";
import Video from "./Video";
import Axios from "./axios";
function App() {

 

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await Axios.get('/v2/posts');
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, []);

    
  console.log(videos)
   

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(({ url, channel, description, song, likes, messages, shares }) => (
          <Video url={url}
            channel={channel}
            song={song}
            likes={likes}
            comments={messages}
            shares={shares} />
          
       
          // <Video
          //   url={require("./first.mp4")}
          //   channel={"rohitsingh"}
          //   description={"follow me for amvs and montages "}
          //   song={"remix audio by Rohitsingh"}
          //   likes={1111}
          //   comments={200}
          //   shares={50}
          // />
        

          // {/* app container */}
          // {/* videos  */}
          // {/* videos  */}
          // {/* videos  */}
          // {/* videos  */}
          // {/* videos  */}
          // {/* videos  */}
          // {/* videos  */}
        ))} </div></div>

  )
}

export default App;
