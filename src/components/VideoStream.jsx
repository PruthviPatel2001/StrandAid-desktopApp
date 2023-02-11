import React, { useEffect, useRef } from 'react'
import axios from 'axios'
const VideoStream = () => {

  const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current

        const updateVideo = async () => {
          let url= 'http://192.168.203.4:5000/video' 
          video.src = await axios.get(url) ;
          console.log(video.src);
          video.addEventListener('loadmetdata', () => {
            video.play();
          })
        }
    
        // updateVideo();
    }, [])
    

  return (
    <div className='flex justify-center items-center  m-12 ml-14' style={{height:"100vh"}}>
    {/* <video className='h-full' autoPlay ref={videoRef}></video> */}
    <iframe  width="100%" height="100%" src="http://192.168.203.4:5000/video" ></iframe>
      
    </div>
  )
}

export default VideoStream
