import React from "react";
import { FaCirclePlus } from "react-icons/fa6";

const SearchBar = ({ cityName, setCityName, getWeatherData }) => {
  return (
    <form
      onSubmit={getWeatherData}
      className="relative w-full flex justify-center items-center"
    >
      <input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        className="border-1 border-gray-400 rounded-sm w-4/5 p-4 outline-0"
        placeholder="Enter City Name"
      />
      <button
        className="text-white cursor-pointer absolute right-15"
        type="submit"
      >
        <FaCirclePlus size={36} color="#1f2687" />
      </button>
    </form>
  );
};

export default SearchBar;
