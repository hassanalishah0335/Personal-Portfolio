import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 flex flex-wrap justify-start">
        <ul className="p-10">
          <li className=" font-bold">Contact</li>
          <li>+92-335-0183868</li>
        </ul>
        <ul className="p-10">
          <li className=" font-bold">Email</li>
          <li>hassanali.devpro@gmail.com</li>
        </ul>
        <ul className="p-10">
          <li className=" font-bold">Address</li>
          <li>Hashim street, Ali Town, Raiwind Road, Lahore.
          </li>
        </ul>

      </div>
    </footer>
  );
};

export default Footer;
