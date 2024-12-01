import React from "react";

const Images = () => {
  return (
    <div className="w-full h-[70vh] bg-white flex items-center justify-center overflow-hidden">
      <div className="w-[40%] h-1/2 relative">
        <div className="absolute w-20 h-[7rem] -right-1/3 top-6">
          <img
            className="w-full h-full object-cover"
            src="/images/images2.webp"
            alt=""
          />
        </div>
        <div className="absolute w-[7rem] aspect-video -left-1/2 top-1/3">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full scale-[1.2]"
            src="/PlayReel.mp4"
          ></video>
        </div>
        <div className="absolute  w-[6rem] -left-[50%] -bottom-10 aspect-video   overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full scale-[2.7]"
            src="/work2.mp4"
          ></video>
        </div>
        <div className="absolute w-[9rem] -right-[70%] -bottom-[37%] aspect-[1.5/1] overflow-hidden">
          <video
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
