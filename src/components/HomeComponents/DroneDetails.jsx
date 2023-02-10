import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faTrash,
  faBatteryHalf,
  faLocationArrow,
  faVideo,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DroneDetails = ({ SelectedDrone }) => {
  return (
    <div className="mt-8 border p-4">
      <div>{/* ---- drone image ----  */}</div>

      <div id="drone-details">
        {/* ---- Upper detail body ---- */}
        <div className="mt-4 p-4 border">
          <div className="flex justify-between items-center" id="heading">
            <h1>{SelectedDrone?.drone_name}</h1>
            <h1>{SelectedDrone?.details.battery} mAh</h1>
          </div>
          <div id="details" className="mt-4">
            <div className="detail-box mt-2 flex items-center">
              <FontAwesomeIcon icon={faBatteryHalf} />
              <h2 className="ml-4">{SelectedDrone?.details.battery} mAh</h2>
            </div>
            <div className="detail-box mt-2 flex items-center">
              <FontAwesomeIcon icon={faLocationArrow} />
              <h2 className="ml-4">{SelectedDrone?.details.range}m Range</h2>
            </div>
            <div className="detail-box mt-2 flex items-center">
              <FontAwesomeIcon icon={faClock} />
              <h2 className="ml-4">
                {SelectedDrone?.details?.flyingTimeLeft} Flying Left
              </h2>
            </div>
          </div>
        </div>
        {/* ---- Lower detail body ---- */}

        <div className="mt-4 grid grid-cols-3 gap-8">
          
          {/* grid 1 */}
          <div className="border p-4">
            <div id="heading" className="flex items-center ">
              <FontAwesomeIcon icon={faVideo} />
              <h2 className="ml-4">Camera Type</h2>
            </div>
            <div id="details " className="mt-4">
              <div className="flex mt-2">
                <h2 className=""> VQ</h2>
                <h2 className="ml-4">{SelectedDrone?.camera_details?.vq} </h2>
              </div>
              <div className="flex mt-2">
                <h2 className=""> RES</h2>
                <h2 className="ml-4">{SelectedDrone?.camera_details?.res} </h2>
              </div>
            </div>
          </div>
          
          {/* grid 2 */}
          <div className="border p-4">
            <div id="heading" className="flex items-center ">
              <FontAwesomeIcon icon={faStopwatch} />
              <h2 className="ml-4">Flight Time</h2>
            </div>
            <div id="details " className="mt-4">
              <div className="flex mt-2">
                <h2 className=""> Time</h2>
                <h2 className="ml-4">{SelectedDrone?.flight?.time}min </h2>
              </div>
              <div className="flex mt-2">
                <h2 className=""> TMP</h2>
                <h2 className="ml-4">{SelectedDrone?.flight?.temperature}°C </h2>
              </div>
            </div>
          </div>
          
          {/* grid 3  */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DroneDetails;
