import Navbar from "../../../../components/navbar";
import Sidebar from "../../../../components/admin/sidebar";
import { useState,useEffect} from "react";
import useWindowDimensions from '../../../../components/useWindowDimensions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook,faPen,faTrash} from '@fortawesome/free-solid-svg-icons';
import UpdateAssignment from "../../../../components/admin/assignment/updateAssignment";

const arr=["Assignment 1","Assignment 2","Assignment 3","Assignment 4","Assignment 5"]

export default function AssignmentList() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { width } = useWindowDimensions();
  const [updateAssignmentSidebarOpen,setUpdateAssignmentSidebarOpen]=useState(false);

  const openUpdateAssignmentSidebar=()=>{
    if(updateAssignmentSidebarOpen==false){
      setUpdateAssignmentSidebarOpen(true);
    }
  }

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
              <div className="flex items-center"><FontAwesomeIcon icon={faBook}/></div>
              <div>Assignment List</div>
            </div>
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-12 font-semibold pb-3 border-b-2 gap-2 px-2">
                <div className="col-span-3">Title</div>
                <div className="col-span-3">Description</div>
                <div className="col-span-2">Attachment</div>
                <div className="col-span-2">Assign</div>
                <div className="col-span-1">Edit</div>
                <div className="col-span-1">Remove</div>
              </div>
              <div>
              {
                arr.map((value,index)=>(
                  <div key={index} className="grid grid-cols-12 text-slate-600 py-3 border-b text-sm gap-2 hover:bg-[#f6f7f8] px-2">
                    <div className="col-span-3 flex items-center">{value}</div>
                    <div className="col-span-3 flex items-center">Description</div>
                    <div className="col-span-2 flex items-center">Attachment</div>
                    <div className="col-span-2 flex items-center">
                      <select className="p-1 px-2 border border-slate-300 rounded-lg">
                          <option>Select</option>
                          <option>Class 1</option>
                          <option>Class 2</option>
                          <option>Class 3</option>
                          <option>Class 4</option>
                        </select>
                    </div>
                    <div className="col-span-1 bg-[#ede7f6] text-[#673ab7] hover:bg-[#673ab7] hover:text-white p-2 px-3 rounded-full w-fit cursor-pointer" onClick={openUpdateAssignmentSidebar}><FontAwesomeIcon icon={faPen}/></div>
                    <div className="col-span-1 bg-[#ede7f6] text-[#673ab7] hover:bg-[#673ab7] hover:text-white p-2 px-3 rounded-full w-fit cursor-pointer"><FontAwesomeIcon icon={faTrash}/></div>  
                  </div>
                ))
              }
              </div>
            </div>
          </div>
        </div>
      </div>
      {updateAssignmentSidebarOpen?<UpdateAssignment updateAssignmentSidebarOpen={updateAssignmentSidebarOpen} setUpdateAssignmentSidebarOpen={setUpdateAssignmentSidebarOpen}/>:""}
    </>
  )
}