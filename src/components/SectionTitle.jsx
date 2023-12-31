const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center mb-3">
      <h2 className="text-3xl font-bold uppercase  py-4"> {heading} </h2>
      <p className="text-gray-500">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
