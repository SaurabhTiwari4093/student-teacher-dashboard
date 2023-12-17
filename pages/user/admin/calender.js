import Navbar from "../../../components/navbar";
import Sidebar from "../../../components/admin/sidebar";
import { useState,useEffect} from "react";
import useWindowDimensions from '../../../components/useWindowDimensions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarWeek} from '@fortawesome/free-solid-svg-icons';
import styles from "../../../styles/Home.module.css";
import CalenderComponent from "../../../components/teacher/takeClass/calender";

export default function Calender() {
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
        <div className="bg-[#e3f2fd] h-full rounded-t-lg p-4 md:p-6 overflow-y-auto" id={styles.noScrollBar}>
          <div className="bg-white rounded-lg border border-[#bee1fa] w-[50rem] overflow-x-auto md:w-full">
            <div className="p-4 md:p-6 font-semibold text-lg border-b flex items-center gap-3">
              <div className="flex items-center"><FontAwesomeIcon icon={faCalendarWeek}/></div>
              <div>Calender</div>
            </div>
            <div>
              <CalenderComponent/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}