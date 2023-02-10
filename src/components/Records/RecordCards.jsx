import React from "react";
import moment from "moment/moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
const RecordCards = ({ data }) => {
  return (
    <div className="bg-lightblue  rounded-xl p-4 shadow-lg">
      <div className="grid grid-cols-12">
        <div className="col-span-8 ">
          <div className="detail-block flex items-center mt-2">
            <h1 className="text-darkblue font-bold">Object Detected :</h1>
            <h1 className="text-darkblue ml-4 ">{data?.object}</h1>
          </div>
          <div className="detail-block flex items-center mt-2">
            <h1 className="text-darkblue font-bold">Date :</h1>
            <h1 className="text-darkblue ml-4 ">
              {moment(data?.time).format("ll")}
            </h1>
          </div>
          <div className="detail-block flex items-center mt-2">
            <h1 className="text-darkblue font-bold">Time :</h1>
            <h1 className="text-darkblue ml-4 ">
              {" "}
              {moment(data?.time).format("LT")}
            </h1>
          </div>
          <div className="flex justify-between items-center w-2/4">
            <h1 className="text-darkblue font-bold">Coordinates </h1>
            <FontAwesomeIcon icon={faCopy} className="text-darkblue" />
          </div>
          <div className="detail-block flex items-center mt-2">
            <h1 className="text-darkblue font-bold">Location :</h1>
            <h1 className="text-darkblue ml-4 ">
              {data?.lat + " , " + data?.long}
            </h1>
          </div>
        </div>
        <div className="col-span-4 ">
        
          <img src={data?.imgUrl} />
        </div>
      </div>
    </div>
  );
};

export default RecordCards;
