import React from "react";
import img from "../assets/weather-img.svg";

const WelcomeScreen = () => {
  return (
    <div>
      <div className="text-center mt-16">
        <h1 className="text-4xl text-[rgba(31,38,135,1)]">WeatherX</h1>
        <h4 className="text-2xl font-medium mt-6">
          Find the weather of your city
        </h4>
      </div>
      <div className="flex justify-center items-center mt-16">
        <img src={img} alt="weather images" />
      </div>
    </div>
  );
};

export default WelcomeScreen;
