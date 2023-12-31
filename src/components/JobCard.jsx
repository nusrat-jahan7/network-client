"use client";
import { IoIosArrowDroprightCircle, IoIosPeople } from "react-icons/io";
import { FaCalendarAlt, FaToolbox } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import { formatDateFromTimestamp } from "./utils/inbox";

const JobCard = ({ job }) => {
  console.log(job);
  const {
    title,
    type,
    min_salary,
    max_salary,
    applicants,
    deadline,
    created_by,
  } = job;
  return (
    <div className="px-6 py-3 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">{title}</h1>

      <p className="text-xl font-semibold pt-3">
        $ {min_salary} - {max_salary}
      </p>
      <div className="flex justify-between  text-gray-500">
        <p className="text-lg pt-3 flex items-center gap-2">
          <FaUserCheck className="text-xl" /> {created_by.name}
        </p>
        <p className="text-lg pt-3 flex items-center gap-2">
          <FaToolbox className="text-xl" />
          {type}
        </p>
      </div>
      <div className="flex justify-between  text-gray-500">
        <p className="text-lg pt-2 flex items-center gap-2">
          <FaCalendarAlt className="text-xl" />
          {formatDateFromTimestamp(deadline)}
        </p>
        <p className="text-lg pt-2 flex items-center gap-2">
          <IoIosPeople className="text-2xl" />
          {applicants}
        </p>
      </div>
      <button className="btn bg-blue-500 hover:bg-blue-700 text-white text-lg w-full mt-4">
        View Details Job <IoIosArrowDroprightCircle />
      </button>
    </div>
  );
};

export default JobCard;
