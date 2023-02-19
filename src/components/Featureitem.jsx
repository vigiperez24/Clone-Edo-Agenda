import React from "react";

const Featureitem = () => {
  return (
    <div className="max-w-[1640px] mx-auto ">
      {/* logo */}
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-10 mb-10 "
          src="https://agenda.edo.io/welcome/static/img/logo_only_image.png"
        />
        <h1 className="text-3xl text-[#333333] mb-16">
          Productivity, meet Creativity
        </h1>
      </div>

      {/* Features Items */}

      <div className="w-fulgl">
        {/* First Item */}
        <div className="grid grid-cols-1  md:grid-cols-2 py-10 md:mx-40 md:gap-4">
          <div className="flex flex-col items-center text-center text-[#333333] my-10  md:max-w-[485px] mx-auto ">
            <img
              className="w-[80px] mb-12"
              src="https://agenda.edo.io/welcome/static/img/calendar-icon.png"
            />
            <h1 className="text-[15px] font-medium mb-6">
              THE BIG PICTURE OF YOUR ACTIVITIES
            </h1>
            <p className="font-light text-[16px]">
              The Planner will help you to get an overview on how productive
              you’ve been and what still needs to be done.
            </p>
          </div>
          <div className="flex flex-col items-center text-center text-[#333333] my-10  md:max-w-[485px]  mx-auto">
            <img
              className="w-[80px] mb-12"
              src="https://agenda.edo.io/welcome/static/img/journal-icon.png"
            />
            <h1 className="text-[15px] font-medium mb-6">
              EVERYTHING YOU NEED TO PLAN YOUR DAY
            </h1>
            <p className="font-light text-[16px]">
              Start your day by writing the thoughts that inspire you, ideas you
              want to remember, or simply a list of things to do.
            </p>
          </div>
          <div className="flex flex-col items-center text-center text-[#333333] my-10  md:max-w-[485px]  mx-auto">
            <img
              className="w-[80px] mb-12"
              src="https://agenda.edo.io/welcome/static/img/task-icon.png"
            />
            <h1 className="text-[15px] font-medium mb-6">
              YOUR REMINDERS AND TO-DO LISTS AT A GLANCE
            </h1>
            <p className="font-light text-[16px]">
              Remember everything you have to do with reminders on your phone
              and see what still needs to be done at a glance with on-the-go
              task lists.
            </p>
          </div>
          <div className="flex flex-col items-center text-center text-[#333333] my-10  md:max-w-[485px]  mx-auto">
            <img
              className="w-[80px] mb-12"
              src="https://agenda.edo.io/welcome/static/img/notes-icon.png"
            />
            <h1 className="text-[15px] font-medium mb-6">
              A CLEAN ORGANIZED PLACE TO WRITE YOUR THOUGHTS
            </h1>
            <p className="font-light text-[16px] ">
              Don’t forget one single detail for your meetings and appointments.
              Add reminders for your meetings next week and attach your relevant
              thoughts and docs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featureitem;
