import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import React from 'react';

export const Projects = () => {
  return (
    <div className="h-[100vh] w-full px-10 py-10">
      <p className="h-[5vh] w-full m-4 text-4xl flex justify-center items-center">My Projects</p>
      <p className="h-[5vh] w-full m-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
      
      <div className="h-[15vh] w-full m-4 flex justify-evenly items-center">
        {
          [
          ["1","All"],
          ["2","UI/UX"],
          ["3","Development"],
          ["4","Web Design"],
          ["5","Graphics Design"],
          ].map(([key, value]) => (
            <button key={key} className="h-auto w-auto px-4 py-2 rounded-md text-black bg-gray-300 hover:text-white hover:bg-orange-500 flex justify-center items-center">
            {value}</button>
          ))
        }
      </div>

      <div className="h-[55vh] w-full m-4 flex justify-evenly items-center gap-5">
        {
          [
            ["1","F1 With Sainath" ,"https://f1withsainath.vercel.app", "/website.jpeg","Development"],
            ["2","Movieflix" ,"https://uniaccoassignment.vercel.app/", "/website.jpeg","Development"],
            ["3","Workout Tracker" ,"https://fyle-internship-assignment-nu.vercel.app/", "/website.jpeg","Development"],
          ].map(([key, title, link, imgLink, tag]) => (
            <div key={key} className="h-full w-4/5 grid">
              <div>
              <Link href={link} className="h-4/5 w-full">
                <Image src={imgLink} alt="Website Image" width={100} height={100}
                className="full w-full bg-cover rounded-t-md" />
              </Link>
              <p className="h-auto w-full pl-4 py-2 bg-gray-300 text-orange-500">{tag}</p>
              <p className="h-auto w-full pl-4 py-2 bg-gray-300 font-semibold rounded-b-md">{title}</p>
              </div>
            </div>
          ))}
      </div>    
    </div>
  );
}