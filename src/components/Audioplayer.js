import React from "react";
import { useState } from 'react';
import { tracks } from '../data/Tracks';


import Displaytrack from "../components/Displaytrack";
import Controls from "./Controls";
import Progressbar from "./Progressbar";

const AudioPlayer = () => {
    const [currentTrack, setCurrentTrack] = useState(tracks[0]);
    return (
      <div className="audio-player">
        <div className="inner">
            <Displaytrack>{currentTrack}</Displaytrack>
            <Controls></Controls>
            <Progressbar></Progressbar>
        </div>
      </div>
    );
  };
  export default AudioPlayer;