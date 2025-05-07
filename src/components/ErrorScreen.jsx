import React from "react";

const ErrorScreen = ({ weatherData }) => {
  return (
    <div className="text-center m-4 ">
      <div className="text-red-500 text-4xl">
        {weatherData?.message.toUpperCase()}
      </div>
      <p className="mt-4 text-2xl">Please enter correct City Name</p>
    </div>
  );
};

export default ErrorScreen;
