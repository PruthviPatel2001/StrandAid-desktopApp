import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { Home, Profile, Record, Stream } from "./screens";
import "./styles/App.css";

function App() {
  return (
    <>
      <NavBar />
      {/* <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-1  ">
          <SideBar /> */}
        {/* </div> */}

        {/* <div className="col-span-11"> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/records" element={<Record />} />
            <Route path="/stream" element={<Stream />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default App;
