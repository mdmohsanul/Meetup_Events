import React from "react";
import { eventAPI_URL } from "../utilities/constants";
import { useState, useEffect } from "react";
import EventCards from "./EventCards";
import useFetch from "../utilities/hooks/useFetch";
import ShimmerUI from "./ShimmerUI";
import { CiSearch } from "react-icons/ci";

const Events = () => {
  const selectOptions = ["Type", "Online", "Offline", "Both"];
  const [selectedEventType, setSelectedEventType] = useState("Type");
  const { data, loading, error } = useFetch(eventAPI_URL);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState(false);
  console.log(data);
  const handleFilterChange = (e) => {
    setSelectedEventType(e.target.value);
    setSearch(false);
  };
  const list =
    selectedEventType == "Type" || selectedEventType === "Both"
      ? data
      : data.filter((item) => item.eventMode === selectedEventType);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(true);
    setSearchTerm(searchTerm);
    const filteredItems = list.filter(
      (item) =>
        item.eventTags.includes(searchTerm.toLowerCase()) ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filteredItems);
  };

  return (
    <>
      <div className="bg-slate-200 pt-6 pb-10">
        <div className="max-w-7xl m-auto ">
          <div className="flex items-center justify-between pb-11">
            <h1 className="text-5xl font-bold text-slate-800  ">
              Meetup Events
            </h1>
            <select
              onChange={handleFilterChange}
              className="bg-gray-50 border border-gray-300 text-gray-500 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 w-80  p-2.5 "
            >
              {selectOptions.map((item) => (
                <option key={item} value={item} className="text-gray-900">
                  {item === "Type" ? "Select Event Type" : item}
                </option>
              ))}
            </select>
            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <CiSearch className="text-slate-500 font-semibold" size={20} />
              </div>
              <input
                type="text"
                name=""
                value={searchTerm}
                onChange={handleInputChange}
                placeholder={`Search by title and tags`}
                className="py-2 px-10  rounded-md"
              />
            </div>
          </div>

          {loading && <ShimmerUI />}
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto gap-y-14">
            {(search ? filteredUsers : list).map((item) => (
              <EventCards
                key={item._id}
                eventImage={item.eventImage}
                title={item.title}
                time={item.time.from}
                eventMode={item.eventMode}
                id={item._id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
