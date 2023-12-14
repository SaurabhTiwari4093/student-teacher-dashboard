import Navbar from "../../../../components/navbar";
import Sidebar from "../../../../components/counsellor/sidebar";
import { useState,useEffect} from "react";
import useWindowDimensions from '../../../../components/useWindowDimensions';
import styles from "../../../../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPersonChalkboard} from '@fortawesome/free-solid-svg-icons';


export default function CreateTrainer() {
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
          <div className="bg-white rounded-lg border border-[#bee1fa] min-h-full">
            <div className="p-4 md:p-6 font-semibold text-lg border-b flex items-center gap-3">
              <div className="flex items-center"><FontAwesomeIcon icon={faPersonChalkboard}/></div>
              <div>Create Trainer</div>
            </div>
            <div className="p-4 md:p-6 flex justify-center w-full">
              <form className="w-full">
                  <div className="text-lg mb-4 font-medium">Fill this form and click submit to create trainer</div>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6 font-semibold">
                    <div className="col-span-2 md:col-span-1">
                      <label>Name
                        <input type="text" placeholder="" className="w-full p-2 border border-slate-300 rounded-lg outline-[#673ab7] text-[#673ab7]"/>
                      </label>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label>DOB
                        <input type="date" placeholder="" className="w-full p-2 border border-slate-300 rounded-lg outline-[#673ab7] text-[#673ab7]"/>
                      </label>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label>Experience
                        <input type="text" placeholder="" className="w-full p-2 border border-slate-300 rounded-lg outline-[#673ab7] text-[#673ab7]"/>
                      </label>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label>Skill Set
                        <input type="text" placeholder="" className="w-full p-2 border border-slate-300 rounded-lg outline-[#673ab7] text-[#673ab7]"/>
                      </label>
                    </div>
                    <div className="col-span-2">
                      <label>Address
                        <input type="text" placeholder="" className="w-full p-2 border border-slate-300 rounded-lg outline-[#673ab7] text-[#673ab7]"/>
                      </label>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label>Image
                        <input type="file" placeholder="" className="w-full border border-slate-300 rounded-lg outline-[#673ab7] text-[#673ab7]"/>
                      </label>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label>Resume
                        <input type="file" placeholder="" className="w-full border border-slate-300 rounded-lg outline-[#673ab7] text-[#673ab7]"/>
                      </label>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <button type="button" className="py-2 px-6 text-white bg-[#673ab7] rounded font-medium hover:bg-[#563199]">Submit</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}