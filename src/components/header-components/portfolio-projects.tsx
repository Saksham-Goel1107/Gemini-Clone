import React from 'react'
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const PortfolioProjects = () => {
  const projects = [
    
    {
      name: 'Github',
      desr: 'My github Consider Giving stars and don\'t forget to follow',
      link: 'https://github.com/Saksham-Goel1107'
    }

  ]
  return (
    <div className="w-52 h-fit p-2">
      <h3>Profile</h3>
      <div className="grid grid-cols-4 gap-3 mt-3">
        {
          projects.map((item, i) => (
            <Link target="_blank" href={item.link} key={i} className="p-1 border rounded-md border-accentGray/30 hover:border-accentBlue/50 relative group">
              <span className="absolute bottom-10 bg-slate-800 text-white p-[2px] border border-accentGray/30 px-3 -translate-x-1/2 left-1/2 text-sm rounded-md hidden group-hover:block text-nowrap">{item.name}</span>
              <FaGithub/>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default PortfolioProjects