"use client";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const JobDetails = ({ params: { id } }) => {
  const client = useAxiosPublic();

  const { data } = useQuery({
    queryKey: [`/job/${id}`],
    queryFn: () => client.get(`/job/${id}`).then(({ data }) => data.result),
  });

  console.log(data);

  return (
    <div>
      <h1>This is Job details page</h1>
    </div>
  );
};

export default JobDetails;
