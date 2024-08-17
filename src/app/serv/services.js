import "../globals.css";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSheetPlastic , faCode , faComputer , faShapes } from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
  return (
    <div className="h-[80vh] w-full px-10 py-10">
      <p className="h-auto w-full m-4 text-4xl flex justify-center items-center">Services</p>
      <p className="h-auto w-full m-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>

      <div className="h-[50vh] w-full m-4 flex justify-evenly items-center gap-4">
        {
          [
            ["1",faSheetPlastic,"UI/UX","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
            ["2",faCode,"Development","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
            ["3",faComputer,"Web Design","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
            ["4",faShapes,"Graphics Design","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
          ].map(([key, icon, name, lorem]) => (
            <div key={key} className="h-[50vh] w-auto p-4 rounded-md bg-gray-100 grid grid-cols-1 gap-5">
               <FontAwesomeIcon icon={icon}  className="auto w-auto text-8xl text-orange-500 flex justify-center items-center"/>
               <p className="h-auto w-auto mb-2 font-semibold text-xl">{name}</p>
               <p className="h-auto w-auto">{lorem}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}