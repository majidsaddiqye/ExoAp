import gsap, { Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Images = () => {
  const first = useRef(null);
  const third = useRef(null);
  const second = useRef(null);
  const fourth = useRef(null);
  const parent = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "0 90%",
        scrub: 1,
      },
    });
    tl.to(
      first.current,
      {
        x: "40%",
        ease: Power4,
      },
      "a"
    )
      .to(
        third.current,
        {
          x: "-40%",
          ease: Power4,
        },
        "a"
      )
      .to(
        second.current,
        {
          x: "-40%",
          ease: Power4,
        },
        "a"
      )
      .to(
        fourth.current,
        {
          x: "-40%",
          ease: Power4,
        },
        "a"
      );
  });
  return (
    <div
      ref={parent}
      className="w-full h-[70vh] sm:h-[100vh] bg-white flex items-center justify-center overflow-hidden"
    >
      <div className="w-[40%] sm:w-[20%] sm:h-[70%] h-1/2 relative">
        <div className="absolute w-20 sm:w-36 h-[7rem] sm:h-[12rem] -right-1/3 top-6">
          <img
            ref={first}
            className="w-full h-full object-cover"
            src="/images/images2.webp"
            alt=""
          />
        </div>
        <div className="absolute w-[7rem] sm:w-[13rem] sm:-left-2/3 aspect-video -left-1/2 top-1/3">
          <video
            ref={second}
            autoPlay
            muted
            loop
            className="w-full h-full scale-[1.2]"
            src="/PlayReel.mp4"
          ></video>
        </div>
        <div className="absolute sm:w-[14rem] w-[6rem] -left-[50%] -bottom-10 aspect-video   overflow-hidden">
          <video
            ref={third}
            autoPlay
            muted
            loop
            className="w-full h-full scale-[2.7]"
            src="/work2.mp4"
          ></video>
        </div>
        <div className="absolute sm:w-[11rem] w-[9rem] sm:-right-[50%] -right-[70%] sm:-bottom-[20%] -bottom-[37%] aspect-[1.5/1] overflow-hidden">
          <video
            ref={fourth}
            autoPlay
            muted
            loop
            className="w-full h-full scale-[2.7]"
            src="/work4.mp4"
          ></video>
        </div>
        <img
          className="w-full h-full object-cover"
          src="/images/images.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Images;
