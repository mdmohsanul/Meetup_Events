import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../utilities/hooks/useFetch";
import { eventAPI_URL } from "../utilities/constants";
import { IoMdTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { BiRupee } from "react-icons/bi";
import ShimmerUI from "../components/ShimmerUI";

const EventDetails = () => {
  const { eventId } = useParams();
  const { data, loading, error } = useFetch(eventAPI_URL);
  const event = data.find((item) => item._id === eventId);

  return (
    <>
      <div className="bg-slate-200">
        <div className="max-w-5xl mx-auto py-10 ">
          {loading && <ShimmerUI />}
          {/* Left part Start */}

          <div className="grid grid-cols-7 gap-8">
            <div className="col-span-4">
              <h1 className="text-3xl font-bold pb-4">{event?.title}</h1>
              <p>Hosted By:</p>
              <p className="text-xl font-semibold pb-8">{event?.hostName}</p>
              <img
                src={event?.eventImage}
                alt="Event banner"
                className="w-[600px] h-80"
              />
              <p className="pt-7 text-xl font-bold">Details:</p>
              <p>{event?.description}</p>
              <p className="font-bold text-xl py-6">Additional Information:</p>
              <p>
                <span className="font-bold">Dress Code: </span>{" "}
                {event?.dressCode}
              </p>
              <p>
                <span className="font-bold"> Age Restrictions: </span>
                {event?.ageRestriction}
              </p>
              <p className="font-bold text-xl pt-6 pb-3">Event Tags:</p>
              {event?.eventTags.map((item) => (
                <span className="text-white bg-red-500 py-1 px-3 mr-2 rounded-lg">
                  {item}
                </span>
              ))}
            </div>

            {/* Right part start */}

            <div className="col-span-3 mx-7">
              <div className="bg-white rounded-lg py-5 px-7 ">
                <div className="flex items-center gap-3">
                  <IoMdTime />
                  <span>
                    <p>{event?.time.from}</p>
                    <p>{event?.time.to}</p>
                  </span>
                </div>
                <div className="flex items-center gap-3 py-6">
                  <CiLocationOn />

                  <p>{event?.location}</p>
                </div>
                <div className="flex items-center gap-3 ">
                  <BiRupee />

                  <p>{event?.eventCost}</p>
                </div>
              </div>
              <div>
                <h2 className="font-bold text-xl pt-7 pb-4">
                  Speakers: ({event?.eventSpeakers.length})
                </h2>
                <div className="flex items-center gap-4">
                  {event?.eventSpeakers.map((item) => (
                    <div className=" bg-white px-3 py-3 rounded-lg flex flex-col items-center">
                      <img
                        src={item.speakerImg}
                        alt=""
                        className="rounded-full h-20 w-20"
                      />
                      <p className="font-bold">{item.name}</p>
                      <p>{item.designation}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center pt-5 ">
                  <button className="text-white bg-red-500 py-1 px-10 mr-2 rounded-lg ">
                    RSVP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
