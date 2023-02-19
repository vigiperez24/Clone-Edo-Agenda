import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-full fixed  z-20 ">
      {/* Logo and button container */}
      <div className=" w-full flex justify-between px-9 md:py-5 py-6  bg-white/10 ">
        {/* logo */}
        <div className="flex items-center justify-center ">
          <img
            className="w-6 h-6 mr-[-4px]"
            src="https://agenda.edo.io/welcome/static/img/logo_only_image.png"
          />
          <h1 className="text-[22px] text-white ">genda</h1>
        </div>
        <button className="bg-[#dc665d] text-white text-[10px] px-7 py-3 border-2 border-[#bc5149] md:text-[12.9px] hover:bg-[#bc5149] duration-300 tracking-wider font-light">
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Navbar;
