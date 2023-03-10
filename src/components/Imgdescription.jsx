import React from "react";

const Imgdescription = () => {
  return (
    <div className="max-w-[1640px] mx-auto">
      {/* Tiltle */}
      <div className="text-[#333333] text-center my-16">
        <h2 className="text-[36px]  font-light ">
          Fill your days with inspiration
        </h2>
        <div className="max-w-[800px] h-[1px] bg-[#33333333] my-4 mx-auto "></div>
        <h2 className="text-[28px] font-light">from any device</h2>
      </div>

      {/* Images And Description */}
      <div className="w-full ">
        {/* items1 */}
        <div className="flex flex-col md:flex-row  gap-4">
          <img
            className="max-w-[675px] h-[100vh] object-cover"
            src="https://agenda.edo.io/welcome/static/img/web-image.jpg"
          />
          <div className="flex flex-col text-center items-center p-12 md:text-left md:items-start justify-center">
            <h1 className="mb-4 text-[1.6em] font-medium text-[#333333] ">
              Edo Agenda <span className="text-[#DC665D]">Web</span>
            </h1>
            <p className="text-[18px] mb-9  text-[#7F7F7F] ">
              In the office, at home or in a café bar, open Edo Agenda on your
              laptop and take your time to plan your day and free your creative
              soul.
            </p>
            <img
              className=" w-[135px] md:w-[190px]"
              src="https://agenda.edo.io/welcome/static/img/get-web-app.png"
            />
          </div>
        </div>

        {/* items2 */}
        <div className=" flex flex-col md:flex-row-reverse ">
          <img
            className=" max-w-[675px]"
            src="https://agenda.edo.io/welcome/static/img/mobile-image.jpg"
          />
          <div className="flex flex-col text-center items-center p-12 md:text-left  md:items-end justify-center">
            <h1 className="mb-4 text-[1.8em] font-medium text-[#333333] ">
              Edo Agenda <span className="text-[#22ae43]">Mobile</span>
            </h1>
            <p className="text-[18px] mb-9  text-[#7F7F7F] ">
              The best ideas often come on the go. If you're travelling for work
              or if you're just enjoying your long-awaited trip, use Edo Agenda
              to write a list of things to do or simply as a journal.
            </p>
            <div className="flex gap-4">
              <img
                className="w-[135px] md:w-[190px]"
                src="https://agenda.edo.io/welcome/static/img/get-iphone.png"
              />
              <img
                className="w-[135px] md:w-[190px]"
                src="https://agenda.edo.io/welcome/static/img/get-android.png"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-4">
          <img
            className="max-w-[675px] h-[100vh] object-cover"
            src="https://agenda.edo.io/welcome/static/img/paper-image.jpg"
          />
          <div className="flex flex-col text-center items-center p-12 md:text-left md:items-start justify-center">
            <h1 className="mb-4 text-[1.6em] font-medium text-[#333333] ">
              Edo Agenda <span className="text-[#7e95f7]">Paper</span>
            </h1>
            <p className="text-[18px] mb-9  text-[#7F7F7F] ">
              Edo Agenda Paper Where tradition meets technology. Your
              traditional everyday note-taking device has a very digital soul.
              Agenda Paper is a beautifully crafted notebook. By snapping
              pictures of pages, your ideas transfer to the web. Your tasks, as
              well as your sketches, designs and thoughts become immediately
              accessible on the app and safely stored in the cloud. All it takes
              is a snap.
            </p>
            <img
              className=" w-[135px] md:w-[190px]"
              src="https://agenda.edo.io/welcome/static/img/get-paper.png"
            />
          </div>
        </div>
      </div>
      {/* Seamless experience */}
      <div className="w-full flex flex-col items-center py-36">
        <h2 className="text-[28px]  font-lg mb-10 text-[#333333]">
          Seamless experience
        </h2>
        <p className="text-[18px] font-light text-[#333333] max-w-[520px] mb-6 text-center ">
          Everything you create on Edo Agenda on your laptop is immediately
          saved in cloud and accessible from your mobile devices and vice-versa.
        </p>
        <p className="text-[18px] font-light text-[#333333] max-w-[520px]  text-center">
          Everything you sketch, write or create on “Edo Agenda Paper” is
          quickly sent to the Edo Agenda app with a simple snap.
        </p>
      </div>
      <div className="flex gap-3 justify-center w-full pb-28">
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
    </div>
  );
};

export default Imgdescription;
