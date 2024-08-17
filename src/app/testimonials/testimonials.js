import "../globals.css";
import Image from "next/image";
import React from 'react';

export const Testimonials = () => {
  return (
    <div className="h-[80vh] w-full px-10 py-10 grid place-items-center">
      <p className="h-[5vh] w-full m-4 text-4xl flex justify-center items-center">Testimonials</p>
      <p className="h-[5vh] w-full m-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
    
      <div className="h-[30vh] w-3/4 p-4 my-5 rounded-md bg-gray-100 flex justify-evenly items-center">
        <div className="h-full w-1/3 flex justify-center items-center">
          <Image src="/image.jpeg" alt="Profile Image" width={100} height={100}
          className="h-full w-4/5 bg-cover rounded-md" />
        </div>
        <div className="h-full w-full px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit

          <p className="h-auto w-auto font-semibold">Me</p>
          <p className="h-auto w-auto font-semibold">Lorem</p>
        </div>
      </div>
    </div>
  );
}