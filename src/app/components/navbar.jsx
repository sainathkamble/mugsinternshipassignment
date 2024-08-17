'use client'
import "../globals.css";
import Link from "next/link";
import React from 'react';

export const Navbar = () => {

  const scrollToHero = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth', })
}

const scrollToAboutMe = () =>{
  window.scrollTo({ top: 550, behavior: 'smooth', })
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
    <nav className="h-[20vh] w-full px-10 py-4 flex justify-between items-center">
      <p className="h-auto w-auto font-bold text-4xl text-orange-500 cursor-pointer">Sainath.io</p>
      
      <div className="h-auto w-[85vw] flex justify-evenly items-center">
      { [
          ["1","Home","./",scrollToHero],
          ["2","About Me","/aboutme",scrollToAboutMe],
          ["3","Services","./services",scrollToServices],
          ["4","Projects","./projects",scrollToProjects],
          ["5","Testimonials","./testimonials",scrollToTestimonials],
          ["6","Contact","./conatact",scrollToContact],
        ].map(([key, name, link, scroll]) => (
          <div key={key} onClick={scroll} className="h-auto w-auto font-normal px-4 py-2 cursor-pointer rounded-md
          hover:bg-gray-100">{name}</div>
        ))}
        <Link href="./resume.pdf" download={true} className="h-auto w-auto py-2 px-4 rounded-md text-white bg-orange-500 cursor-pointer">Dowmload CV</Link>
      </div>

    </nav>
    </>
  );
}
