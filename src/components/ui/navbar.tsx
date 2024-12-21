import React from "react";

const NavBar = () => {
  return (
    <section className="flex pl-2 sm:md:lg:pl-28 py-3 shadow-md items-center w-screen">
      <img src="https://girmantech.com/Logo2.svg" alt="icon" />
      <section className="text-end w-full hidden md:block">
        <section className="flex gap-3 justify-end pr-10 ">
          <p className="text-blue-700 underline text-lg">SEARCH</p>
          <a
            href="https://girmantech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-blue-700"
          >
            WEBSITE
          </a>

          <a
            href="https://www.linkedin.com/company/girmantech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-blue-700"
          >
            LINKEDIN
          </a>

          <a
            href="mailto:contact@girmantech.com"
            className="text-lg hover:text-blue-700"
          >
            CONTACT
          </a>
        </section>
      </section>
    </section>
  );
};

export default NavBar;
