import Navbar from "../../../../components/navbar";
import Sidebar from "../../../../components/counsellor/sidebar";
import { useState} from "react";
import useWindowDimensions from '../../../../components/useWindowDimensions';
import styles from "../../../../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import Activity from "../../../../assets/activity.png"
import AddActivity from "../../../../components/counsellor/curriculum/addActivity";

export default function Activities() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { width } = useWindowDimensions();
  const [addActivitySidebarOpen,setAddActivitySidebarOpen]=useState(false);

  const openAddActivitySidebar=()=>{
    if(addActivitySidebarOpen==false){
      setAddActivitySidebarOpen(true);
    }
  }

  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      {sidebarOpen?<Sidebar/>:""}
      <div className="px-4 pt-20 h-screen text-slate-800" style={width>="768"&&sidebarOpen?{paddingLeft:"18rem"}:{paddingLeft:"1rem"}}>
        <div className="bg-[#e3f2fd] h-full rounded-t-lg p-4 md:p-6 overflow-y-auto" id={styles.noScrollBar}>
          <div className="bg-white rounded-lg border border-[#bee1fa] h-full">
            <div className="p-4 md:p-6 font-semibold text-lg border-b flex items-center gap-3">
              <div className="flex items-center"><FontAwesomeIcon icon={faBookOpen}/></div>
              <div>Activities</div>
            </div>
            <div className="p-4 md:p-6 flex items-center justify-center text-center">
              <div className="md:w-1/3 flex flex-col gap-2 mt-10">
                <div><Image src={Activity} height={100} width={100}/></div>
                <div className="font-bold text-base md:text-lg">No Activities Added Yet!</div>
                <div className="text-xs md:text-sm text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quo voluptate quidem.</div>
                <div><button className="py-2 px-6 font-semibold rounded-lg bg-[#ede7f6] text-[#673ab7] hover:bg-[#673ab7] hover:text-white my-2" onClick={openAddActivitySidebar}><FontAwesomeIcon icon={faPlusCircle}/>{" "}Add New Activity</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {addActivitySidebarOpen?<AddActivity addActivitySidebarOpen={addActivitySidebarOpen} setAddActivitySidebarOpen={setAddActivitySidebarOpen}/>:""}
    </>
  )
}