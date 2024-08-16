import "../globals.css";
import React from 'react';

export const Contact = () => {
  return (
    <div className="h-[60vh] w-full px-10 py-10">
      <p className="h-[5vh] w-full m-4 text-4xl flex justify-center items-center">Contact</p>
      <p className="h-[5vh] w-full m-4 text-lg flex justify-center items-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
      
      <div classNmae="h-[40vh] w-full grid place-items-center">
        <input type="text" value="email" placeholder="Enter your e-mail" 
        className="h-auto w-1/2 p-2 rounded-md bg-gray-300 text-black" />

        <button className="h-auto w-auto px-4 py-2 rounded-md flex justify-center items-center bg-orange-500 text-white">Contact Me</button>
      </div>
    
    </div>  
  );
}