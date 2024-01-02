"use client";
import SectionTitle from "@/components/SectionTitle";
import { formatDateFromTimestamp } from "@/components/utils/inbox";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { BsFilterSquareFill } from "react-icons/bs";

const AllJob = () => {
  const client = useAxiosPublic();
  const [search, setSearch] = useState("");

  const fetch = () =>
    search.length
      ? client.get(`/job?search=${search}`).then(({ data }) => data.result)
      : client.get("/job").then(({ data }) => data.result);

  const { data } = useQuery({
    queryKey: [search.length ? `/job?search=${search}` : `/job`],
    queryFn: () => fetch(),
  });

  console.log(data);

  return (
    <div className="mt-6 mb-4">
      <SectionTitle
        heading={"The All Jobs are here"}
        subHeading={
          "Discover a wide range of job opportunities tailored to your skills and aspirations"
        }
      />
      <div className="overflow-x-auto max-w-7xl mx-auto mt-4">
        <div className="flex justify-end items-center gap-3 mb-4">
          <BsFilterSquareFill className="text-4xl text-blue-500" />
          <input
            type="text"
            placeholder="Search a Job"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="input input-bordered border-blue-500 w-full max-w-xs"
          />
        </div>
        <table className="table text-lg">
          {/* head */}
          <thead>
            <tr className="bg-base-200 text-lg">
              <th></th>
              <th>Hirer</th>
              <th>Job Title</th>
              <th>Job Type</th>
              <th>Salary</th>
              <th>Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((job, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <p>{job.created_by.name}</p>
                  <p>{job.created_by.email}</p>
                </td>
                <td>{job.title}</td>
                <td>
                  <span className="bg-blue-200 px-2 py-1 rounded-lg">
                    {job?.type?.split("_").join(" ").toLowerCase()}
                  </span>
                </td>
                <td>
                  $ {job.min_salary} - {job.max_salary}
                </td>
                <td>{formatDateFromTimestamp(job.deadline)}</td>
                <td>
                  <Link
                    href={`/all-job/${job?._id}`}
                    className="p-3 rounded-lg bg-blue-500 hover:bg-blue-700 text-white"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJob;
