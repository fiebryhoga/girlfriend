/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Layout from "@/app/Components/Layouts/Layout";
import AA from "@/app/Components/Pages/AA";
import "aos/dist/aos.css";
import AOS from "aos";

const Page = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleStart = () => {
    const audio = new Audio("/Assets/Music/terima_kasih.mp3");
    audio.play();


    setIsStarted(true);
    setTimeout(() => setIsHidden(true), 800);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="bg-[#F8F8F8]">
      <div
        className={`cover flex flex-col h-screen w-screen justify-center items-center transition-opacity duration-1000 ${
          isStarted ? "opacity-0 pointer-events-none" : "opacity-100"
        } ${isHidden ? "hidden" : ""}`}
      >
        <img
          className="w-full h-full bg-cover absolute"
          src="/Assets/Images/bg.png"
          alt=""
        />
        <button
          onClick={handleStart}
          className="block px-10 font-serif py-2 rounded-md shadow-md shadow-gray-100 bg-[#C6C8CA] text-white font-semibold z-50 translate-y-64"
        >
          Start
        </button>
      </div>

      <div
        className={`main ${
          isStarted
            ? "block opacity-100 translate-y-0 transition-opacity duration-2000 ease-out"
            : "hidden opacity-0 transition-opacity duration-2000 ease-out"
        } transition-opacity duration-2000 ease-out`}
      >
        
        
          <Layout>
            <AA />
          </Layout>
      </div>
    </div>
  );
};

export default Page;
