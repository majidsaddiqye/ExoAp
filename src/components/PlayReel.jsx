import gsap, { Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
const PlayReel = () => {
  const parent = useRef(null);
  const videodiv = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(videodiv.current, {
      scrollTrigger: {
        trigger: parent.current,
        top: "0 0",
        pin: true,
        scrub: 1,
        
      },
      width: "100%",
      height: "100%",
      ease: Power4,
    });
  });
  return (
    <div
      ref={parent}
      className="w-full h-screen overflow-hidden relative bg-black"
    >
      <div
        ref={videodiv}
        className="w-36 sm:w-96 overflow-hidden aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <video
          autoPlay
          muted
          loop
          className="w-full h-full scale-[1.2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="/PlayReel.mp4"
        ></video>
      </div>

      <div className="overlay absolute w-full h-full text-white  py-20 flex flex-col justify-between ">
        <div className="w-full flex items-center justify-center  gap-3">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 "
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3 className="text-sm">Work in motion</h3>
        </div>
        <h1 className="w-full justify-center gap-20 sm:gap-96 flex items-center">
          <div className="text-4xl sm:text-8xl font-light gap-32 ">Play</div>
          <div className="text-4xl sm:text-8xl font-light gap-32 ">Reel</div>
        </h1>
        <p className="text-center px-10 text-xs">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
};

export default PlayReel;
