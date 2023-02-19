import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-full  pb-32 relative ">
      <img
        className=" w-full h-[100vh] object-cover "
        src="https://agenda.edo.io/welcome/static/img/house.jpg"
      />
      {/* Hero Text Container */}
      <div className="w-full h-full   absolute left-0 top-[20%] text-center text-white ">
        <h1 className="text-[40px] py-4 tracking-wide">Design your day</h1>
        <p className="font-light text-lg max-w-[320px] md:max-w-[550px] mx-auto text-[17px] leading-6  ">
          Edo Agenda is your personal workspace that helps you organize your day
          and free your creative side.
        </p>
        <div className="w-full h-full   absolute left-0 top-[54%] text-center text-white  ">
          <p className="text-[9px] mb-6 tracking-wider">
            Scroll down or use arrow keys
          </p>
          <img
            className="w-9 mx-auto animate-bounce"
            src=" https://agenda.edo.io/welcome/static/img/arrows.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
