import React, { useState } from "react";

const Work = () => {
  const [card, setcards] = useState([
    {
      heading: "Pixelflakes",
      subheading: "Architectural Marketing Agency",
      video: "/work1.mp4",
      img: "/images/workimg1.webp",
    },
    {
      heading: "Columbia Pictures",
      subheading: "Celebrating a Century of Cinema",
      video: "/work2.mp4",
      img: "/images/workimg2.webp",
    },
    {
      heading: "Cambium",
      subheading: "Pioneering Sustainable Solutions",
      video: "/work3.mp4",
      img: "/images/workimg3.webp",
    },
    {
      heading: "Studio D",
      subheading: "Urban and Landscape Design",
      video: "/work4.mp4",
      img: "/images/workimg4.webp",
    },
  ]);
  return (
    <div className="w-full relative">
      <div className="max-w-screen-xl mx-auto py-20 px-5 sm:px-10">
        <div className="feactured flex gap-2">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3 className="capitalize">Featured projects</h3>
        </div>
        <h1 className="text-6xl sm:text-[12rem] sm:leading-none sm:tracking-tight  my-5 ">
          Work
        </h1>
        <p className="leading-2 text-lg">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>

        <div className="elems sm:flex sm:flex-wrap sm:gap-5 mt-10">
          {card.map((c, i) => (
            <div key={i} className="elem w-full sm:w-[48%] mt-10">
              <div className="video h-[104vw] sm:h-[50vw] w-full relative overflow-hidden ">
                <img
                  className="hidden sm:block w-full h-full object-cover"
                  src={c.img}
                  alt=""
                />
                <video
                  autoPlay
                  muted
                  loop
                  className="block sm:hidden w-full h-full scale-[1.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                  src={c.video}
                ></video>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">{c.heading}</h3>
                <h3 className="capitalize opacity-40">{c.subheading}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
