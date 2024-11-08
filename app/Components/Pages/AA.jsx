/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";

import "aos/dist/aos.css";
import AOS from "aos";

const AA = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      easing: "ease-out", // Jenis easing
    });
    AOS.refresh(); // Pastikan AOS di-refresh untuk memastikan semua elemen diperbarui
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="w-full flex flex-row justify-between mt-10">
        <div data-aos="zoom-in" className="w-8">
          <img className="w-full" src="/Assets/Images/Text-1.png" alt="" />
        </div>
        <div className="w-80">
          <img className="w-full" src="/Assets/Images/Image1.png" alt="" />
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="w-full flex flex-row justify-between mt-10"
      >
        <div data-aos="fade-up" className="w-8">
          <img className="w-full" src="/Assets/Images/Text-1.png" alt="" />
        </div>
        <div data-aos="fade-up" className="w-80">
          <img className="w-full" src="/Assets/Images/Image1.png" alt="" />
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="w-full flex flex-row justify-between mt-10"
      >
        <div data-aos="zoom-in" className="w-8">
          <img className="w-full" src="/Assets/Images/Text-1.png" alt="" />
        </div>
        <div data-aos="fade-up" className="w-80">
          <img className="w-full" src="/Assets/Images/Image1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AA
