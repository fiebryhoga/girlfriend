/* eslint-disable @next/next/no-img-element */
"use client"

import Image from "next/image";
import { useRef } from "react";
import layout from "./Components/Layouts/Layout";

export default function Home() {
  // Gunakan useRef untuk mereferensikan elemen audio
  const audioRef = useRef(null);

  const handlePlayMusic = () => {
    // Memutar musik ketika tautan diklik
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <img
        className="w-full h-full absolute"
        src="/Assets/Images/Cover.png"
        alt=""
      />
      {/* Elemen audio */}
      <audio ref={audioRef} src="/Assets/Music/terima_kasih.mp3" preload="auto" />

      <a
        href="/Pages/Home"
        onClick={handlePlayMusic} // Tambahkan event handler
        className="block px-10 font-serif py-2 rounded-md shadow-md shadow-gray-100 bg-[#C6C8CA] text-white font-semibold z-50 translate-y-64"
      >
        Start
      </a>
    </div>
  );
}
