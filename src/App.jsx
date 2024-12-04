import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Work from "./components/Work";
import PlayReel from "./components/PlayReel";
import Images from "./components/Images";
import Spread from "./components/Spread";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef(null); // For Locomotive container
  const scrollDivRef = useRef(null); // For mouse-following div

  useEffect(() => {
    // Initialize Locomotive Scroll v5
    const locomotive = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1.5, // Optional: For customizing the scroll speed
    });

    // Sync ScrollTrigger with Locomotive Scroll (no need for 'update' method in v5)
    ScrollTrigger.scrollerProxy(containerRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locomotive.scrollTo(value, { duration: 0, disableLerp: true })
          : locomotive.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: containerRef.current.style.transform ? "transform" : "fixed",
    });

    // Mouse follow logic for the "Scroll" div
    const handleMouseMove = (event) => {
      const { pageX, pageY } = event;

      gsap.to(scrollDivRef.current, {
        x: pageX,
        y: pageY,
        duration: 0.1,
        ease: "none",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Listen to the ScrollTrigger 'refresh' event
    ScrollTrigger.addEventListener("refresh", () => {
      // Locomotive Scroll automatically handles the scroll updates now
    });

    // Refresh ScrollTrigger instance to sync Locomotive Scroll with ScrollTrigger
    ScrollTrigger.refresh();

    return () => {
      locomotive.destroy();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} data-scroll-container className="relative w-full h-full overflow-hidden cursor-none">
      {/* Scroll Div */}
      <div
  ref={scrollDivRef}
  className="absolute z-[9999] top-0 left-0 w-20 h-20 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center pointer-events-none shadow-md backdrop-blur-sm hidden md:flex"
>
  <span className="text-black text-lg font-semibold drop-shadow-md">Scroll</span>
</div>


      {/* Your Components */}
      <Navbar />
      <Landing />
      <Work />
      <PlayReel />
      <Images />
      <Spread />
      <Footer />
    </div>
  );
};

export default App;
