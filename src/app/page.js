"use client";
import Banner from "@/components/Banner";
import JobCategory from "@/components/JobCategory";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const client = useAxiosPublic();
  const [filter, setFilter] = useState("all-job");
  const [categoryWiseJob, setCategoryWiseJob] = useState([]);
  // console.log(filter);

  const { data, isLoading } = useQuery({
    queryKey: [`job/${filter}`],
    queryFn: () =>
      filter === "all-job"
        ? client.get("/job").then(({ data }) => setCategoryWiseJob(data.result))
        : client
            .get(`/job?type=${filter}`)
            .then(({ data }) => setCategoryWiseJob(data.result)),
  });
  if (isLoading) "loading";
  console.log(categoryWiseJob);
  return (
    <main>
      <Banner />
      <JobCategory
        data={categoryWiseJob}
        isLoading={isLoading}
        setFilter={setFilter}
      />
    </main>
  );
}
