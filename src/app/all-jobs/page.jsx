import SectionTitle from "@/components/SectionTitle";
import { BsFilterSquareFill } from "react-icons/bs";

const AllJob = () => {
  return (
    <div className="mt-6 mb-4">
      <SectionTitle
        heading={"The All Jobs are here"}
        subHeading={
          "Discover a wide range of job opportunities tailored to your skills and aspirations"
        }
      />
      <div className="overflow-x-auto max-w-7xl mx-auto px-5 mt-4">
        <div className="flex justify-end items-center gap-3 mb-4">
          <BsFilterSquareFill className="text-4xl text-blue-500" />
          <input
            type="text"
            placeholder="Search a Job"
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
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJob;
