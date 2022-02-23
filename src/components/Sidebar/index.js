import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md"
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";

function Sidebar() {
  return (
    <div>
        <img
            src="./3.png"
            alt="avatar"
            className=" mx-auto border rounded-full "
            height="180px"
            width="180px"
            layout="intrinsic"
            quality="100"
        />
        <h3 className="my-4 text-xl font-medium tracking-wider">
            Muhamad Amir Rudin Yusup
        </h3>
        <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
            Web Developer
        </p>
        {/* Resume */}
        <a
            href="./MUHAMAD AMIR RUDIN YUSUP - CV.pdf"
            className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer"
        >
            <GiTie className="w-6 h-6" />
            <span>Download CV</span>
        </a>
        {/* Socials */}
        <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full ">
            <a target="_blank" href="mailto:yuzufgt2000@gmail.com">
            <MdEmail className="w-8 h-8 cursor-pointer" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/muhamad-amir-rudin-yusup-8aa315232/" >
            <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
            </a>
            <a target="_blank" href="https://github.com/Mirryusuf">
            <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
            </a>
        </div>

        {/* Contacts */}
        <div
            className="py-4 my-5 bg-gray-200 h-full"
            style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
        >
            <div className="flex justify-around w-9/12 mx-auto my-3 text-green md:w-full ">
                <GoLocation className='w-6 h-6' /> 
            </div>
            <span>Kebayoran Lama, Jakarta Selatan.</span>
            
            <p className="my-2 ">yuzufgt2000@gmail.com</p>
            
        </div>
        
        <div>
            <div className='px-2 tracking-wide'>
                <p className='font-bold'>Technical Skills</p>
                <ul className='lg:text-left'>
                    <li>- React Js</li>
                    <li>- Node Js</li>
                    <li>- Express JS</li>
                    <li>- Mongo DB</li>
                    <li>- MySQL</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar