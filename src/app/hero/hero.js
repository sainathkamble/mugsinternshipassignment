import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub , faInstagram, faLinkedin , faXTwitter } from "@fortawesome/free-brands-svg-icons";

export const Hero = () => {
  return (
    <div className="h-[80vh] w-full px-10 py-10 flex justify-evenly items-center flex-grow">
      <div className="h-full w-1/2 p-4 text-black sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2">
        <p className="h-auto w-full m-3 text-lg">Hi I am,</p>
        <p className="h-auto w-full m-3 text-xl text-orange-500">Sainath Kamble</p>
        <p className="h-auto w-full m-3 pl-10 text-4xl flex justify-start items-center">Full Stack Software</p>
        <p className="h-auto w-full m-3 pr-10 text-4xl flex justify-end items-center">Developer</p>
        <p className="h-auto w-full m-3 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
        <button className="h-auto w-auto m-3 px-2 py-2 rounded-md bg-orange-500 text-white flex justify-center items-center">Hire me</button>
      </div>

      <div className="h-full w-1/2 p-4 sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2">
        <Image src="/image.jpeg" alt="Profile Image" height={100} width={100} 
        className="h-3/4 w-3/4 rounded-full mx-auto bg-cover" />

       <div className="h-[10vh] w-1/2 mx-auto flex justify-evenly items-center">
       {[
          ["1",faGithub,"https://github.com/sainathkamble"],
          ["2",faXTwitter,"https://x.com/sainathio"],
          ["3",faLinkedin,"www.linkedin.com/in/sainathkamble"],
          ["4",faInstagram,"https://www.instagram.com/sainath.io/"],
         ].map(([key, icon, link]) => (
          <Link key={key} href={link} className="h-[5vh] w-auto text-black">
            <FontAwesomeIcon icon={icon} className="h-[5vh] w-auto"/>
          </Link>
        ))}
       </div>
      </div>
    </div>
  );
}