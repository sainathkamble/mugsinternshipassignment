'use client'
import "../globals.css";
import React from 'react';
import { useState } from "react";

export const Contact = () => {

const [value , setValue] = useState("");

  return (
    <div className="h-[50vh] w-full px-10 py-10">
      <p className="h-auto w-full m-5 text-4xl flex justify-center items-center">Contact</p>
      <p className="h-auto w-full m-5 text-lg flex justify-center items-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
      
      <div className="h-[30vh] w-full flex justify-center items-start gap-4">
        <input type="text" value={value} placeholder="Enter your e-mail" onChange={e => { setValue(e.target.value)}} 
        className="h-auto w-1/3 p-2 rounded-md bg-gray-300"></input>
         <button className="h-auto w-auto px-4 py-2 rounded-md flex justify-center items-center bg-orange-500 text-white">Contact Me</button>
      </div>
     
    </div>  
  );
}