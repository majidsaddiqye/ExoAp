import React from "react";

const AddressList = ({ items }) => (
  <ul className="flex flex-col gap-1">
    {items.map((item, index) => (
      <li key={index} className="text-zinc-400 text-lg">
        <a href="">{item}</a>
      </li>
    ))}
  </ul>
);

const Footer = () => {
  const addressItems = [
    "Willem II Singel 8",
    "6041 HS, Roermond",
    "The Netherlands",
    "hello@exoape.com",
  ];

  const socialLinks = ["Behance", "Dribble", "Twitter", "Instagram"];

  return (
    <div className="w-full sm:pt-6 sm:pl-10 min-h-[87vh] bg-black text-white">
      {/* Header Section */}
      <div className="w-[40%] sm:w-[70%] h-[30%] py-10 px-5">
        {["Our", "Story"].map((text, index) => (
          <h1
            key={index}
            className="capitalize text-7xl sm:text-9xl sm:tracking-tight tracking-tight leading-2"
          >
            {text}
          </h1>
        ))}
      </div>

      {/* Subtext Section */}
      <div className="w-[95%] py-10 px-5">
        <p className="text-zinc-400 sm:mt-[1%] sm:text-2xl sm:w-1/2 text-xl">
          The story behind Exo Ape is one of exploration, creativity and
          curiosity.
        </p>
        <h3 className="mt-5 sm:mt-10 sm:text-xl border-b-[1px] w-fit border-zinc-400 text-sm">
          Our Story
        </h3>
      </div>

      {/* Divider */}
      <hr className="relative w-[80%] sm:w-[92%] sm:left-[3%] left-[7%]" />

      {/* Links Section */}
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-14 sm:gap-24 py-10 px-5 sm:px-10">
        <AddressList items={addressItems} />
        <AddressList items={socialLinks} />
        <div className="hidden md:block">
          <AddressList items={socialLinks} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
