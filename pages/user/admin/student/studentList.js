import Navbar from "../../../../components/navbar";
import Sidebar from "../../../../components/admin/sidebar";
import { useState,useEffect} from "react";
import useWindowDimensions from '../../../../components/useWindowDimensions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserGraduate,faTrash} from '@fortawesome/free-solid-svg-icons';

const arr=["Student 1","Student 2","Student 3","Student 4","Student 5"]


export default function StudentList() {
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
          <div className="bg-white rounded-lg border border-[#bee1fa] h-full w-[50rem] overflow-x-auto md:w-full">
            <div className="p-4 md:p-6 font-semibold text-lg border-b flex items-center gap-3">
              <div className="flex items-center"><FontAwesomeIcon icon={faUserGraduate}/></div>
              <div>Student List</div>
            </div>
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-12 font-semibold pb-3 border-b-2 gap-2 px-2">
                <div className="col-span-2">Student Name</div>
                <div className="col-span-2">DOB</div>
                <div className="col-span-3">Event Name</div>
                <div className="col-span-2">Date of Joining</div>
                <div className="col-span-2">Assign</div>
                <div className="col-span-1">Remove</div>
              </div>
              <div>
              {
                arr.map((value,index)=>(
                  <div key={index} className="grid grid-cols-12 text-slate-600 py-3 border-b text-sm gap-2 hover:bg-[#f6f7f8] px-2">
                    <div className="col-span-2 flex items-center">{value}</div>
                    <div className="col-span-2 flex items-center">11/03/2002</div>
                    <div className="col-span-3 flex items-center">Event Name</div>
                    <div className="col-span-2 flex items-center">28/05/2022</div>
                    <div className="col-span-2 flex items-center">
                      <select className="p-1 px-2 border border-slate-300 rounded-lg">
                          <option>Select</option>
                          <option>Class 1</option>
                          <option>Class 2</option>
                          <option>Class 3</option>
                          <option>Class 4</option>
                        </select>
                    </div>
                    <div className="col-span-1 bg-[#ede7f6] text-[#673ab7] hover:bg-[#673ab7] hover:text-white p-2 px-3 rounded-full w-fit cursor-pointer"><FontAwesomeIcon icon={faTrash}/></div>
                  </div>
                ))
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}