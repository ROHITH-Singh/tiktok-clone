import React from "react";
import "./Videofooter.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";
function Videofooter({channel,description,song}) {
  return (
    <div className="videofooter">
          <div className="videofooter__text">
              <h3>@{channel}</h3>
              <p>
                   {description}
              </p>
              <div className="videofooter__ticker">
                  <div> <MusicNoteIcon className="videofooter__icon"  /></div>
                 
                  <div className="insideticker"><Ticker mode="smooth" offset="run-in">
                      {({  }) => (
                          <>
                              <p>{song}</p>
                              </>
                  
                      )}
                  </Ticker></div>
                  
              </div>
          </div>
          <img className="videofooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt="" />
    </div>
  );
}

export default Videofooter;
