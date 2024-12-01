import React from "react";

const Landing = () => {
  return (
    <div className="relative w-full h-[150vh] sm:h-[250vh]">
      <div className="picture w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>

      <div className="w-full absolute top-0">
        <div className=" h-full text max-w-screen-xl mx-auto px-5 sm:px-10 text-white">
          <div className="para mt-72 sm:mt-[22rem]">
            <p className="text-md sm:text-3xl">
              Global digital design studio partnering
            </p>
            <p className="text-md sm:text-3xl">
              with brands and businesses that create
            </p>
            <p className="text-md sm:text-3xl">
              exceptional experiences where people
            </p>
            <p className="text-md sm:text-3xl">live, work, and unwind. </p>
          </div>

          <div className="headings mt-5 sm:mt-10">
            <h1 className="text-6xl sm:text-[14rem] font-lighter tracking-tighter leading-none ">
              Digital
            </h1>
            <h1 className="text-6xl sm:text-[14rem] font-lighter tracking-tighter leading-none ">
              Design
            </h1>
            <h1 className="text-6xl sm:text-[14rem] font-lighter tracking-tighter leading-none ">
              Experience
            </h1>
          </div>

          <div className="para2 sm:w-1/3  mt-10 sm:mt-20 ">
            <p className="sm:text-xl">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
            <a
              className="sm:text-xl sm:border-b-[1px] border-b-[.3px] border-zinc-100 pb-1 inline-block mt-6"
              href="#"
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
