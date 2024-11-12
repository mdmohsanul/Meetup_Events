import React from "react";
import { Link } from "react-router-dom";
import { defaultEventImage } from "../utilities/constants";

const EventCards = ({
  eventImage,
  title,
  time,
  eventMode,

  id,
}) => {
  return (
    <>
      <Link to={`/${id}`}>
        <div className="relative">
          <img
            src={eventImage ? eventImage : defaultEventImage}
            alt=""
            className="h-48 w-72 rounded-lg"
          />
          <p className="absolute top-3 left-2 px-2 py-1 text-gray-900 bg-white rounded-lg">
            {eventMode} Event
          </p>
          <div>
            <p className="text-slate-600 pt-3 text-sm">{time} IST</p>
            <h2 className="text-lg font-bold">{title}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default EventCards;
