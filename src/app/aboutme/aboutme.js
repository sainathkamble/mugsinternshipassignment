'use client'
import "../globals.css";
import Image from "next/image";
import React from 'react';
import { useState } from "react";

export const AboutMe = () => {

  const [valueOne, changeValueOne] = useState(85);
  const [valueTwo, changeValueTwo] = useState(90);
  const [valueThree, changeValueThree] = useState(95);
  const [valueFour, changeValueFour] = useState(90);

  return (
    <div className="h-[80vh] w-full px-10 py-10 flex justify-evenly items-center flex-grow">
      <div className="h-full w-1/2">
        <Image src="/image.jpeg" alt="Profile Image" height={100} width={100} 
        className="h-3/4 w-3/4 rounded-full mx-auto" />
      </div>

      <div className="h-full w-1/2">
        <p className="h-auto w-full m-3 text-4xl">About Me</p>
        <p className="h-auto w-full m-3 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
        
        <label>UI/UX</label>
        <input type="range" value={valueOne}  className="range h-auto w-full m-2 orange-500" />
        <label>Development</label>
        <input type="range" value={valueTwo} className="range h-auto w-full m-2 bg-orange-500" />
        <label>Web Design</label>
        <input type="range" value={valueThree} className="range h-auto w-full m-2 bg-orange-500" />
        <label>Graphics Design</label>
        <input type="range" value={valueFour} className="range h-auto w-full m-2 bg-orange-500" />
      </div> 
    </div>
  );
}