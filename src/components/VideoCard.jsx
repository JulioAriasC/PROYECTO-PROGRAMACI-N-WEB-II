import React from "react";
import Video_1 from '/multimedia/video_atelier_varela_2023.mp4';
import ReactPlayer from "react-player";
const Video_Presentacion = ()=>{
  return (
    <>
      <ReactPlayer 
        url={Video_1} 
        controls 
        loop 
        light 
        width='100%'
        height='100%'
        playing
        volume='0.5'
      />
    </>
  );
}
export default Video_Presentacion;