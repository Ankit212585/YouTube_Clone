import { Route } from "react-router-dom";
import Navebar from "./components/Navebar/navebar";
import { Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/video/video";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <Navebar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;
