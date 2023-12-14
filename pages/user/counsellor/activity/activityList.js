import Navbar from "../../../../components/navbar";
import Sidebar from "../../../../components/counsellor/sidebar";
import { useState,useEffect} from "react";
import useWindowDimensions from '../../../../components/useWindowDimensions';
import styles from "../../../../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faListCheck,faPen,faTrash} from '@fortawesome/free-solid-svg-icons';
import UpdateActivity from "../../../../components/counsellor/activity/updateActivity";

const arr=["Activity 1","Activity 2","Activity 3","Activity 4","Activity 5"]

export default function ActivityList() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { width } = useWindowDimensions();
  const [updateActivitySidebarOpen,setUpdateActivitySidebarOpen]=useState(false);

  const openUpdateActivitySidebar=()=>{
    if(updateActivitySidebarOpen==false){
      setUpdateActivitySidebarOpen(true);
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
        <div className="bg-[#e3f2fd] h-full rounded-t-lg p-4 md:p-6 overflow-y-auto" id={styles.noScrollBar}>
          <div className="bg-white rounded-lg border border-[#bee1fa] h-full w-[50rem] overflow-x-auto md:w-full">
            <div className="p-4 md:p-6 font-semibold text-lg border-b flex items-center gap-3">
              <div className="flex items-center"><FontAwesomeIcon icon={faListCheck}/></div>
              <div>Activity List</div>
            </div>
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-12 font-semibold pb-3 border-b-2 gap-2 px-2">
                <div className="col-span-3">Activity</div>
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
                    <div className="col-span-1 bg-[#ede7f6] text-[#673ab7] hover:bg-[#673ab7] hover:text-white p-2 px-3 rounded-full w-fit cursor-pointer" onClick={openUpdateActivitySidebar}><FontAwesomeIcon icon={faPen}/></div>
                    <div className="col-span-1 bg-[#ede7f6] text-[#673ab7] hover:bg-[#673ab7] hover:text-white p-2 px-3 rounded-full w-fit cursor-pointer"><FontAwesomeIcon icon={faTrash}/></div>  
                  </div>
                ))
              }
              </div>
            </div>
          </div>
        </div>
      </div>
      {updateActivitySidebarOpen?<UpdateActivity updateActivitySidebarOpen={updateActivitySidebarOpen} setUpdateActivitySidebarOpen={setUpdateActivitySidebarOpen}/>:""}
    </>
  )
}