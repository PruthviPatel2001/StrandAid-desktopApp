import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import axios from "axios";
import DroneList from "../components/HomeComponents/DroneList";
import DroneDetails from "../components/HomeComponents/DroneDetails";
import {API} from "../global/url"

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Home = () => {
  const [DroneData, setDroneData] = useState([]);
  const [Loader, setLoader] = useState(true);
  const [SelectedDroneId, setSelectedDroneId] = useState(1);
  const [SelectedDrone, setSelectedDrone] = useState()

  useEffect(() => {
    const getDroneData = async () => {
      const res = await axios.get(`${API}/all`);

      res && setLoader(false);

      setDroneData(res.data);
    };

    getDroneData();
  }, []);

  useEffect(() => {
    const getIndividualDrone = async () => {
      setLoader(true);
      const res = await axios.get(
        `${API}/list?id=${SelectedDroneId}`
      );
      res && setLoader(false);

      setSelectedDrone(res.data);
    };

    SelectedDroneId && getIndividualDrone();
  }, [SelectedDroneId]);

  // ---- Google Map ---- 

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  return (
    <div>
      <div className="grid grid-cols-5 pt-20">
        <div className=" p-12  col-span-3">
          {Loader ? (
            <div className="flex justify-center items-center">
              <h1 className="text-[#ffffff] text-3xl font-bold">Loading...</h1>
            </div>
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
        <div className=" p-12">

        </div>
      </div>
    </div>
  );
};

export default Home;
