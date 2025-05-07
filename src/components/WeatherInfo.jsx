import React from "react";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { PiWindBold } from "react-icons/pi";
import { MdCompress } from "react-icons/md";
import { day, time } from "../utils/helpers";

const WeatherInfo = ({ weatherData }) => {
  const { name, sys, main, weather, wind } = weatherData;
  console.log(weatherData);

  const weatherDetails = [
    {
      id: 1,
      icon: <CiTempHigh size={32} />,
      text: "Real Feel",
      num: main?.feels_like,
      unit: "°c",
    },
    {
      id: 2,
      icon: <WiHumidity size={32} />,
      text: "Humidity",
      num: main?.humidity,
      unit: "%",
    },
    {
      id: 3,
      icon: <PiWindBold size={32} />,
      text: "Wind Speed",
      num: wind?.speed,
      unit: "m/s",
    },
    {
      id: 4,
      icon: <MdCompress size={32} />,
      text: "Pressure",
      num: main?.pressure,
      unit: "mbar",
    },
  ];

  return (
    <div className="text-center mt-8">
      <div>
        <h1 className="text-[rgba(31,38,135,1)] text-4xl">
          {name}, <span className="text-2xl">{sys.country}</span>
        </h1>
        <p>
          {time} | {day}
        </p>
        <h1 className="text-6xl">{Math.trunc(main?.temp)}°c</h1>
        <p>
          Min: {main?.temp_min}°c | Max: {main?.temp_max}°c
        </p>
        <div>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-8 bg-gray-600 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-gray-300 left-1/2 dark:text-white dark:bg-gray-900">
              {weather?.[0]?.main}
            </span>
          </div>
          <div className="flex justify-center items-center gap-8 mt-8 mb-8">
            {weatherDetails.map((detail) => (
              <div key={detail.id} className="">
                <div>
                  <span className="flex justify-center items-center">
                    {detail.icon}
                  </span>
                  <span>{detail.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
