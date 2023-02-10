import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Home, Profile, Record, Stream } from "./screens";
import "./styles/App.css";

function App() {
  return (
    <>
    
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/records" element={<Record />} />
      <Route path="/stream" element={<Stream />} />
      <Route path="/profile" element={<Profile />}/>
    </Routes>
    </>
  );
}

export default App;
