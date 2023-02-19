import React from "react";

const Downloadbts = () => {
  return (
    <div className="w-full ">
      {/* container buttons . context */}
      <div className="flex gap-3 justify-center w-full pb-32">
        <img
          className="w-[135px] md:w-[190px]"
          src="https://agenda.edo.io/welcome/static/img/get-web-app.png"
        />
        <img
          className="w-[135px] md:w-[190px]"
          src="https://agenda.edo.io/welcome/static/img/get-android.png"
        />
        <img
          className="w-[135px] md:w-[190px]"
          src="https://agenda.edo.io/welcome/static/img/get-iphone.png"
        />
      </div>
      <div>
        <h1 className="px-8 text-center text-[22px] font-md mx-auto md:max-w-5xl  md:text-[28px]  pb-20 text-[#333333]">
          The smart agenda for freelancers, creatives and people who do great
          work. Organize your day and free your creative side.
        </h1>
      </div>

      <div className="w-full flex items-center justify-center mb-32  ">
        <img
          className="w-[800px] px-4 md:px-0"
          src="https://agenda.edo.io/welcome/static/img/mac-with-app.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Downloadbts;
