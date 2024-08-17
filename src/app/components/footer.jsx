'use client'
import "../globals.css";
import React from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub , faInstagram, faLinkedin , faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export const Footer = () => {

  const scrollToHero = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth', })
}

const scrollToAboutMe = () =>{
  window.scrollTo({ top: 600, behavior: 'smooth', })
}

const scrollToServices = () =>{
  window.scrollTo({ top: 1200, behavior: 'smooth', })
}

const scrollToProjects = () =>{
  window.scrollTo({ top: 1700, behavior: 'smooth', })
}

const scrollToTestimonials = () =>{
  window.scrollTo({ top: 2300, behavior: 'smooth', })
}

const scrollToContact = () =>{
  window.scrollTo({ top: 2800, behavior: 'smooth', })
}

  return (
    <>
    <footer className="h-[40vh] w-full">
    <div className="h-[40vh] w-full bg-gray-100 px-8 grid grid-cols-1 grid-rows-4 place-items-center">  
     <p className="h-auto w-full text-4xl text-orange-500 font-semibold flex justify-center items-center">Sainath.io</p>

     <div className="h-[10vh] w-full flex justify-evenly items-center">
      {[
          ["1","Home","./",scrollToHero],
          ["2","About Me","./aboutme",scrollToAboutMe],
          ["3","Services","./services",scrollToServices],
          ["4","Projects","./projects",scrollToProjects],
          ["5","Testimonials","./testimonials",scrollToTestimonials],
          ["6","Contact","./conatact",scrollToContact],
        ].map(([key, name, link, scroll]) => (
          <div key={key} onClick={scroll} className="h-auto w-auto font-normal px-2">{name}</div>
      ))}
      </div>

      <div className="h-[10vh] w-full flex justify-evenly items-center sm:w-full md:w-full lg:w-3/4 xl:w-1/2 2xl:w-1/2">
      {[
          ["1",faGithub,"https://github.com/sainathkamble"],
          ["2",faXTwitter,"https://x.com/sainathio"],
          ["3",faLinkedin,"https://www.linkedin.com/in/sainathkamble"],
          ["4",faInstagram,"https://www.instagram.com/sainath.io/"],
        ].map(([key, icon, link]) => (
          <Link key={key} href={link} className="h-[5vh] w-auto text-black">
            <FontAwesomeIcon icon={icon} className="h-full w-full"/>
          </Link>
        ))}
     </div>
    </div>

     <div className="h-auto w-full py-4 text-white bg-gray-800 flex justify-center items-center">
       <FontAwesomeIcon icon={faCopyright} className="h-[4vh]"/>
       <p className="text-orange-500">Sainath.io</p> 
       2024 All Rights Reserved, Inc.
     </div>
    </footer>
    </>
  );
}
