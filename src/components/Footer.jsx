import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-4">
      {/* Logo */}
      <div>
        <img
          className="w-9 my-6 mx-auto "
          src="https://agenda.edo.io/welcome/static/img/logo_only_image.png"
        />
      </div>
      {/* Link button */}
      <div className="w-full flex items-center justify-center py-36">
        <ul className="flex flex-row space-x-8 text-[#7e95f7] text-[13px] ">
          <li>
            <a href="https://www.facebook.com/myedo.io">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/edo.io/">Instagram</a>
          </li>
          <li>
            <a href="https://www.facebook.com/myedo.io">Contact us</a>
          </li>
          <li>
            <a href="https://app.edo.io/privacy">Privacy</a>
          </li>
        </ul>
      </div>
      <h1 className="text-center text-[13px] mb-8 md:my-2">
        © 2017 edo.io srl
      </h1>
    </div>
  );
};

export default Footer;
