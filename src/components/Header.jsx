import React, { useState } from "react";
import Meetup from "/Logo-Meetup.png";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
            {/* <div className="relative ">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
