import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import RecordCards from "../components/Records/RecordCards";
import axios from "axios";

const Record = () => {
  const [RecordsData, setRecordsData] = useState();
  const [Loader, setLoader] = useState(true);

  useEffect(() => {
    const getRecords = async () => {
      const res = await axios.get(
        "https://strandaid-api.vercel.app/drone_record"
      );

      console.log("Records", res.data);
      res && setLoader(false);
      setRecordsData(res.data);
    };
    getRecords();
  }, []);

  return (
    <div className="p-12 pt-20 ">
      <h1 className="text-3xl font bold text-lightpeach">Records</h1>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {RecordsData &&
          RecordsData.map((item) => {
           
            return <RecordCards data={item} />;
          })}

        <RecordCards />
        <RecordCards />

        <RecordCards />
        <RecordCards />
      </div>
    </div>
  );
};

export default Record;
