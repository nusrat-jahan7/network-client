"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionTitle from "./SectionTitle";
import JobCard from "./JobCard";
import Loader from "./Loader";

const JobCategory = ({ data, isLoading, setFilter }) => {
  const category = [
    {
      label: "All Job",
      value: "all-job",
    },
    {
      label: "Onsite",
      value: "onsite",
    },
    {
      label: "Remote",
      value: "remote",
    },
    {
      label: "Hybrid",
      value: "hybrid",
    },
    {
      label: "Part Time",
      value: "part_time",
    },
  ];

  return (
    <div className="mt-16">
      <SectionTitle
        heading={"The Available Jobs"}
        subHeading={
          "Discover a wide range of job opportunities tailored to your skills and aspirations"
        }
      />

      <Tabs className={"max-w-lg mx-auto"}>
        <TabList>
          {category.map((el, index) => (
            <Tab key={index} onClick={() => setFilter(el.value)}>
              {el.label}
            </Tab>
          ))}
        </TabList>
      </Tabs>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 max-w-7xl mx-auto my-8 px-5">
          {data?.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobCategory;
