import React from "react";

const ErrorScreen = ({ weatherData }) => {
  return <div>{weatherData?.message}</div>;
};

export default ErrorScreen;
