import React, { useEffect, useRef, useState } from "react";
import DroneList from "../components/HomeComponents/DroneList";
import axios from "axios";
import OT, { Publisher } from '@opentok/client'
import VideoStream from "../components/VideoStream";

const Stream = () => {
  const [SelectedDroneId, setSelectedDroneId] = useState(1);
  const [ViewImage, setViewImage] = useState();
  const [ViewVideo, setViewVideo] = useState();
  const [Loader, setLoader] = useState(false);
  const [SelectedDrone, setSelectedDrone] = useState();
  const [loader, setloader] = useState(true);
  const [DroneData, setDroneData] = useState();
  const [data, setData] = useState();


  useEffect(() => {
    const getDroneData = async () => {
      const res = await axios.get("https://strandaid-api.vercel.app/all");

      setDroneData(res.data);

      console.log(res.data)



      // Shubham Coded from Here:
      // await axios.get('http://127.0.0.1:5000/gen_token').then(res => {
      //   setStreamKeys(res.data);
      // }).catch(err => {
      //   console.log(err)
      // })

      // navigator.mediaDevices.getUserMedia({video: true}).then(stream => setSrc(stream))

    //   let session = OT.initSession(apiKey, streamKeys.session);
    //   session.on('streamCreated', event => {
    //     session.subscribe(event.stream, 'subscriber', {
    //       insertMode: 'append',
    //       width: '100%',
    //       height: '100%'
    //     }, err => console.log(err))

    //   let publisher = OT.initPublisher('publisher', {
    //     insertMode: 'append',
    //     width: '100%',
    //     height: '100%'
    //   }, err => console.log(err));

    //     session.connect(streamKeys.data, err => {
    //       err ? console.log(err) : session.publish(publisher, err => console.log(err))
    //     })
    //   })
    // };

    }

    getDroneData();

    // const ssc = new EventSource('http://localhost:5000/video')
    // function handleStream(e) {
    //   console.log(e);
    //   setData(e.data);
    // }
    // ssc.onmessage = e => {
    //   handleStream(e);
    // }
    // ssc.onerror = e => {
    //   ssc.close();
    // }

   
  }, []);



  return (
    <>
    <div className="p-12 pt-20 ">
      <h1 className="text-3xl font bold text-lightpeach">Stream</h1>
      <div className=" mt-4">
        <DroneList data={DroneData} setSelectedDroneId={setSelectedDroneId} />
      </div>
      
        
      {/* <div className="mt-8">
        <img src="/images/stream.png" className="rounded-xl"/>
      </div> */}
      <VideoStream />
    </div>
    </> 
  );
};

export default Stream;
