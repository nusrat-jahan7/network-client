"use client";
import SectionTitle from "@/components/SectionTitle";

const AddJob = () => {
  return (
    <div className="my-10">
      <SectionTitle
        heading={"You can Add a Job Here"}
        subHeading={
          "By creating a job you can recruit a appropriate employee for your company"
        }
      />
      <form className="max-w-7xl mx-auto">
        <h3 className="text-2xl text-gray-500 font-semibold mb-4">
          Job Poster Information :
        </h3>
        <div>
          <h4 className="">Name</h4>
          <input
            type="text"
            placeholder=""
            name="name"
            className="block w-full px-4 py-2 mb-3 text-gray-700 bg-blue-50 border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div>
          <h4 className="">Email</h4>
          <input
            type="text"
            placeholder=""
            name="email"
            className="block w-full px-4 py-2 text-gray-700 bg-blue-50 border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="my-6">
          <p className="mb-4 mt-6 text-2xl text-gray-500 font-semibold">
            New Job Information :
          </p>
          <p className="mb-2 font-medium">Job Title</p>
          <input
            type="text"
            required
            placeholder="Title of the Job"
            name="title"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <p className="mb-2 mt-4 font-medium">Job Banner URL</p>
          <input
            type="text"
            placeholder="Photo URL of the Banner"
            name="banner"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />

          <div className="flex flex-col lg:flex-row gap-4 mx-auto ">
            <div className="mx-auto w-full">
              <p className="mb-2 mt-4 font-medium">Job Category</p>
              <select
                className="select select-bordered w-full max-w-xs"
                required
                name="type"
              >
                <option disabled selected>
                  Select type of the Job
                </option>
                <option value="onsite">On Site</option>
                <option value="remote">Remote Job</option>
                <option value="hybrid">Hybrid</option>
                <option value="part_time">Part Time</option>
              </select>
            </div>

            <div className="mx-auto w-full">
              <p className="mb-2 mt-4 font-medium">Minimum Salary</p>
              <input
                type="text"
                name="min_salary"
                placeholder="Min salary amount"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mx-auto w-full">
              <p className="mb-2 mt-4 font-medium">Maximum Salary</p>
              <input
                type="text"
                name="max_salary"
                placeholder="Max salary amount"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="w-full">
              <p className="mb-2 mt-4 font-medium">Deadline Date</p>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>

          <div className="w-full flex flex-col justify-center lg:flex-row gap-4 my-auto ">
            <div className="w-full">
              <p className="mb-2 mt-4 font-medium">Company Name</p>
              <input
                type="text"
                name="company_name"
                placeholder="Your company name"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="w-full">
              <p className="mb-2 mt-4 font-medium">Company Logo</p>
              <input
                type="text"
                name="company_logo"
                placeholder="Your company logo"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <div className="w-full">
              <p
                variant="small"
                color="blue-gray"
                className="mb-2 mt-4 font-medium"
              >
                Description
              </p>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Short Description"
              ></textarea>
            </div>
          </div>
        </div>
        <button
          className="btn bg-blue-500 hover:bg-blue-700 text-white text-lg w-full"
          type="submit"
        >
          Add this Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
