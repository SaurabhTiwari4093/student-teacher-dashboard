import Logo from "../assets/logo.svg";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faCircleUser,faGear,faBell,faSearch} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import ProfilePopUp from "./profilePopUp";

export default function Navbar(props) {
  const {sidebarOpen,setSidebarOpen}=props;
  const [profileShow, setProfileShow] = useState('none')

  const profile=()=>{
    if (profileShow=='none'){
      setProfileShow('block')
    }
    else{
      setProfileShow('none')
    }
  }

  const sidebar=()=>{
    if(sidebarOpen==true){
      setSidebarOpen(false);
    }
    else{
      setSidebarOpen(true);
    }
  }
  
  return (
    <>
    <div className='bg-white h-20 flex justify-between fixed top w-full items-center p-4 text-slate-800 z-20'>
      <div className="flex items-center gap-3 md:gap-5">
        <div className="flex md:justify-between items-center md:w-64">
          <div className="gap-2 items-center font-bold text-lg hidden md:flex">
            <div className="flex justify-center items-center"><Image src={Logo} alt="logo" width="25" height="25"/></div>
            <div className="flex justify-center items-center">DEMO</div>
          </div>
          <div className="flex items-center">
            <button className="py-1 px-2 text-xl rounded-lg bg-[#ede7f6] text-[#673ab7] hover:bg-[#673ab7] hover:text-white" onClick={sidebar}>
              <FontAwesomeIcon icon={faBars}/>
            </button>
          </div>
        </div> 
        <div className="relative hidden md:flex items-center">
          <input type="text" className="w-96 bg-[#fafafa] h-12 border border-slate-300 outline-[#1e88e5] rounded-lg text-sm px-2 text-slate-600 font-semibold pl-10" placeholder="Search.."/>
          <div className="absolute left-3 text-slate-400">
            <FontAwesomeIcon icon={faSearch}/>
          </div>
        </div>
        <div className="md:hidden py-1 px-2 text-xl rounded-lg bg-[#ede7f6] text-[#673ab7] hover:bg-[#673ab7] hover:text-white">
            <FontAwesomeIcon icon={faSearch}/>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="p-1 px-2 text-xl rounded-lg bg-[#ede7f6] text-[#673ab7] hover:bg-[#673ab7] hover:text-white cursor-pointer">
          <FontAwesomeIcon icon={faBell}/>
        </div>
        <div className="bg-[#e3f2fd] hover:bg-[#1e88e5] text-[#1e88e5] hover:text-white rounded-3xl flex items-center gap-3 p-2 px-3 cursor-pointer" onClick={profile} >
          <div className="text-4xl flex items-center">
            <FontAwesomeIcon icon={faCircleUser}/>
          </div>
          <div className="text-xl">
            <FontAwesomeIcon icon={faGear}/>
          </div>
        </div>
      </div> 
    </div>
    <div style={{display:profileShow}}>
      <ProfilePopUp/>
    </div>
    </>
  )
}
