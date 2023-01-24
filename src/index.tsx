import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div className="mx-[150px]">
    <Navbar />

    <div className="main-screen flex justify-between">
      <div className="left flex flex-col justify-center flex-wrap flex-1 gap-5">
        <div className="typo text-8xl">
          Good Food
          <br />
          Good Mood
        </div>
        <span className="btn-primary">Get Started</span>
      </div>

      <div className="right flex items-center justify-center flex-1">
        <div className="image-container ">
          <div className="grid grid-cols-2 grid-rows-2 gap-2 rounded-3xl overflow-hidden">
            <div className="image1 w-[250px] h-[200px]"></div>
            <div className="image2 w-[250px] h-[200px]"></div>
            <div className="image3 w-[250px] h-[200px]"></div>
            <div className="image4 w-[250px] h-[200px]"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="featured">
      <div className="title"> Featured recipes :</div>
    </div>
  </div>
);
