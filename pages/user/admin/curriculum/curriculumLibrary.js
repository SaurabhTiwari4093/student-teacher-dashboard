import Navbar from "../../../../components/navbar";
import Sidebar from "../../../../components/admin/sidebar";
import { useState,useEffect} from "react";
import useWindowDimensions from '../../../../components/useWindowDimensions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookOpen} from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import Card from "../../../../assets/card.png";
import Link from 'next/link';

const num=[1,2,3,4,5,6,7,8,9,10];

export default function CurriculumLibrary() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { width } = useWindowDimensions();

  useEffect(()=>{
    if(width<"768"){
      setSidebarOpen(false)
    }
  },[width])

  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      {sidebarOpen?<Sidebar/>:""}
      <div className="px-4 pt-20 h-screen text-slate-800" style={width>="768"&&sidebarOpen?{paddingLeft:"18rem"}:{paddingLeft:"1rem"}}>
        <div className="bg-[#e3f2fd] h-full rounded-t-lg p-4 md:p-6 overflow-y-auto no-scroll-bar">
          <div className="bg-white rounded-lg border border-[#bee1fa]">
            <div className="p-4 md:p-6 font-semibold text-lg border-b flex items-center gap-3">
              <div className="flex items-center"><FontAwesomeIcon icon={faBookOpen}/></div>
              <div>Curriculum Library</div>
            </div>
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-5 border rounded-lg">
                <div className="col-span-5 md:col-span-1 p-4 md:p-6 rounded-t-lg border-r md:rounded-tr-none md:rounded-l-lg flex flex-col justify-around text-lg md:text-2xl text-slate-800 gap-3 bg-[#f6f7f8]">
                  <div className="cursor-pointer">Activity</div>
                  <div className="cursor-pointer">Theme</div>
                  <div className="cursor-pointer">Outcome</div>
                </div>
                <div className="col-span-5 md:col-span-4 p-4 md:p-6 rounded-b-lg md:rounded-bl-none md:rounded-r-lg grid grid-rows-2 gap-3 font-medium text-sm md:text-base">
                    <div className="grid grid-cols-4 gap-2 md:gap-6">
                      <div className="col-span-2 md:col-span-1 flex items-center">
                        <label className="w-full font-semibold">Name<select className="w-full p-2 rounded-lg my-0.5 outline-none border font-medium text-slate-600">
                          <option className="font-medium">All</option>
                          <option className="font-medium">Option 1</option>
                          <option className="font-medium">Option 2</option>
                          <option className="font-medium">Option 3</option>
                          </select></label>
                      </div>
                      <div className="col-span-2 md:col-span-1 flex items-center">
                        <label className="w-full font-semibold">Category<select className="w-full p-2 rounded-lg my-0.5 outline-none border font-medium text-slate-600">
                        <option className="font-medium">All</option>
                        <option className="font-medium">Option 1</option>
                        <option className="font-medium">Option 2</option>
                        <option className="font-medium">Option 3</option>
                        </select></label>
                      </div>
                      <div className="col-span-2 md:col-span-1 flex items-center">
                        <label className="w-full font-semibold">SubCategory<select className="w-full p-2 rounded-lg my-0.5 outline-none border font-medium text-slate-600">
                        <option className="font-medium">All</option>
                        <option className="font-medium">Option 1</option>
                        <option className="font-medium">Option 2</option>
                        <option className="font-medium">Option 3</option>
                        </select></label>
                      </div>
                      <div className="col-span-2 md:col-span-1 flex items-center">
                        <label className="w-full font-semibold">For<select className="w-full p-2 rounded-lg my-0.5 outline-none border font-medium text-slate-600">
                        <option className="font-medium">All</option>
                        <option className="font-medium">Option 1</option>
                        <option className="font-medium">Option 2</option>
                        <option className="font-medium">Option 3</option>
                        </select></label>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 md:gap-6">
                      <div className="col-span-2 md:col-span-1 flex items-center">
                        <label className="w-full font-semibold">Age Group<select className="w-full p-2 rounded-lg my-0.5 outline-none border font-medium text-slate-600">
                        <option className="font-medium">All</option>
                        <option className="font-medium">Option 1</option>
                        <option className="font-medium">Option 2</option>
                        <option className="font-medium">Option 3</option>
                        </select></label>
                      </div>
                      <div className="col-span-2 md:col-span-1 flex items-center">
                        <label className="w-full font-semibold">Student Level<select className="w-full p-2 rounded-lg my-0.5 outline-none border font-medium text-slate-600">
                        <option className="font-medium">All</option>
                        <option className="font-medium">Option 1</option>
                        <option className="font-medium">Option 2</option>
                        <option className="font-medium">Option 3</option>
                        </select></label>
                      </div>
                      <div className="col-span-2 md:col-span-1 flex items-center">
                        <label className="w-full font-semibold">Keyword Search<input className="w-full p-2 rounded-lg my-0.5 outline-none border font-medium text-slate-600"/></label>
                      </div>
                      <div className="col-span-2 md:col-span-1 flex items-center text-sm md:text-base">
                        <label className="pt-5 w-full"><button className="w-full p-2 rounded-lg bg-[#673ab7] hover:bg-[#563199] text-white my-0.5">Search</button></label>
                      </div>
                    </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-4 md:mt-6">
                {num.map((value,index)=>(
                  <div key={index} className="border rounded-lg pb-3 text-center font-bold text-sm md:text-base">
                    <Link href="/user/admin/curriculum/curriculumActivity">
                      <div className="cursor-pointer">
                        <Image src={Card} alt=""/>
                        <div>Deep Space</div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}