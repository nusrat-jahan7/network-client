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
    <div>
      <SectionTitle
        heading={"The Available Jobs"}
        subHeading={
          "Discover a wide range of job opportunities tailored to your skills and aspirations"
        }
      />

      <Tabs className={"md:w-4/12 mx-auto text-center mt-8 mb-3"}>
        <TabList>
          {category.map((el, index) => (
            <Tab key={index} onClick={() => setFilter(el.value)}>
              {el.label}
            </Tab>
          ))}
        </TabList>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
            {data?.map((job) => (
              <TabPanel>
                <JobCard key={job._id} job={job} />
              </TabPanel>
            ))}
          </div>
        )}
      </Tabs>
    </div>
  );
};

export default JobCategory;
