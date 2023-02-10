import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes, useNavigation } from "react-router-dom";
import Record from "./Record";
import axios from "axios";
import DroneList from "../components/HomeComponents/DroneList";
import DroneDetails from "../components/HomeComponents/DroneDetails";

const Home = () => {
  const [DroneData, setDroneData] = useState([]);
  const [Loader, setLoader] = useState(true);
  const [SelectedDroneId, setSelectedDroneId] = useState(1);
  const [SelectedDrone, setSelectedDrone] = useState()

  useEffect(() => {
    const getDroneData = async () => {
      const res = await axios.get("https://strandaid-api.vercel.app/all");

      res && setLoader(false);

      setDroneData(res.data);
    };

    getDroneData();
  }, []);

  useEffect(() => {
    const getIndividualDrone = async () => {
      setLoader(true);
      const res = await axios.get(
        `https://strandaid-api.vercel.app/list?id=${SelectedDroneId}`
      );
      res && setLoader(false);

      setSelectedDrone(res.data);
    };

    SelectedDroneId && getIndividualDrone();
  }, [SelectedDroneId]);


  return (
    <div>
      <div className="grid grid-cols-2 pt-20">
        <div className=" p-12">
          {Loader ? (
            <h1>Loading...</h1>
          ) : (
            <>
            
            <DroneList
              data={DroneData}
              setSelectedDroneId={setSelectedDroneId}
            />
            <DroneDetails  SelectedDrone={SelectedDrone}/>
            </>
          )}
        </div>
        <div className=" p-12">world</div>
      </div>
    </div>
  );
};

export default Home;
