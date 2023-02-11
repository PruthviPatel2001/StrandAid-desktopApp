import React from "react";

const Profile = () => {
  return (
    <div className="pt-20">
      <div className="grid grid-cols-12 ">
        <div className="col-span-2 "></div>
        <div className="col-span-8 bg-[#ffffff] p-8 rounded-xl shadow-xl">
          <h1 className="text-center text-3xl font-bold">Profile</h1>
          <div className="grid grid-cols-12 mt-14">
            <div className="col-span-4 ">
              <div className="flex justify-center items-center flex-col">
                <img src="/images/userlg.png" alt="" />
                <h1 className="mt-4 text-darkblue font-bold">Pruthvi Patel</h1>
              </div>
            </div>
            <div className="col-span-8 border-darkblue pl-28">
              <div className="mt-4" id="detail-box">
                <h1 className="text-[#BDBDBD] font-bold">Name:</h1>
                <h3 className="mt-1 text-darkblue">Pruthvi Patel</h3>
              </div>
              <div className="mt-4" id="detail-box">
                <h1 className="text-[#BDBDBD] font-bold">UserId :</h1>
                <h3 className="mt-1 text-darkblue">PRU7898</h3>
              </div>
              <div className="mt-4" id="detail-box">
                <h1 className="text-[#BDBDBD] font-bold">Email-ID :</h1>
                <h3 className="mt-1 text-darkblue">pruthvi@strandaid.com</h3>
              </div>
              <div className="mt-4" id="detail-box">
                <h1 className="text-[#BDBDBD] font-bold">D.O.B :</h1>
                <h3 className="mt-1 text-darkblue">12-02-2001</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default Profile;
