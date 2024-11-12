import React, { useState } from "react";
import Meetup from "/Logo-Meetup.png";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchEvent, setSearchEvent] = useState("");
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchEvent(searchTerm);
  };

  return (
    <>
      <div className="bg-slate-200">
        <div className="max-w-7xl m-auto border-2 border-b-slate-300">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img
                src={Meetup}
                alt="Meetup"
                className=" mix-blend-multiply h-20 w-40 pb-2"
              />
            </Link>
            <input
              type="text"
              name=""
              value={searchEvent}
              onChange={handleInputChange}
              placeholder={`Search by title and tags`}
              className="p-2 rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
