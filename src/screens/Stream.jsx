import React, { useEffect, useState } from "react";
import DroneList from "../components/HomeComponents/DroneList";
import axios from "axios";

const Stream = () => {
  const [SelectedDroneId, setSelectedDroneId] = useState(1);
  const [ViewImage, setViewImage] = useState();
  const [ViewVideo, setViewVideo] = useState();
  const [Loader, setLoader] = useState(false);
  const [SelectedDrone, setSelectedDrone] = useState();
  const [loader, setloader] = useState(true);
  const [DroneData, setDroneData] = useState();

  useEffect(() => {
    const getDroneData = async () => {
      const res = await axios.get("https://strandaid-api.vercel.app/all");

      setDroneData(res.data);

      console.log(res.data)
    };

    getDroneData();
  }, []);

  return (
    <div className="p-12 pt-20 ">
      <h1 className="text-3xl font bold text-lightpeach">Stream</h1>
      <div className=" mt-4">
        <DroneList data={DroneData} setSelectedDroneId={setSelectedDroneId} />
      </div>
    </div>
  );
};

export default Stream;
