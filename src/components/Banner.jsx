const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[500px] aspect-auto"
        style={{
          backgroundImage: "url(/images/banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold leading-snug">
              Explore Opportunities on NetWork
            </h1>
            <p className="mb-5">
              Embark on a journey of professional growth with Network. Our
              platform connects you with top employers, providing a seamless and
              efficient job-seeking experience. Elevate your career to new
              heights - your dream job awaits!"
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
