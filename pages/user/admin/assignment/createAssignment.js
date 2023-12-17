import Navbar from "../../../../components/navbar";
import Sidebar from "../../../../components/admin/sidebar";
import { useState,useEffect} from "react";
import useWindowDimensions from '../../../../components/useWindowDimensions';
import styles from "../../../../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook, faMinusCircle, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import AskQuestion from "../../../../components/admin/assignment/askQuestion";


export default function CreateAssignment() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { width } = useWindowDimensions();
  const [noQuestion,setNoQuestion]=useState(1);
  const arr=Array.apply(null, Array(noQuestion)).map(function () {})

  const increaseQuestion=()=>{
    setNoQuestion(noQuestion+1)
  }

  const decreaseQuestion=()=>{
    if(noQuestion>1){
      setNoQuestion(noQuestion-1);
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
          <div className="bg-white rounded-lg border border-[#bee1fa]">
            <div className="p-4 md:p-6 font-semibold text-lg border-b flex items-center gap-3">
              <div className="flex items-center"><FontAwesomeIcon icon={faBook}/></div>
              <div>Create Assignment</div>
            </div>
            <div className="p-4 md:p-6 flex justify-center w-full">
              <form className="w-full">
                  <div className="text-lg mb-4 font-medium">Fill this form and click submit to create assignment</div>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6 font-semibold">
                    <div className="col-span-2 md:col-span-1">
                      <label>Title
                        <input type="text" placeholder="" className="w-full p-2 border border-slate-300 rounded-lg outline-[#673ab7] text-[#673ab7]"/>
                      </label>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label>Student Level
                        <input type="text" placeholder="" className="w-full p-2 border border-slate-300 rounded-lg outline-[#673ab7] text-[#673ab7]"/>
                      </label>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label>Sub category
                        <input type="text" placeholder="" className="w-full p-2 border border-slate-300 rounded-lg outline-[#673ab7] text-[#673ab7]"/>
                      </label>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label>Age Group
                        <input type="text" placeholder="" className="w-full p-2 border border-slate-300 rounded-lg outline-[#673ab7] text-[#673ab7]"/>
                      </label>
                    </div>
                    <div className="col-span-2">
                      <label>Description
                        <textarea placeholder="" className="w-full p-2 border border-slate-300 rounded-lg outline-[#673ab7] text-[#673ab7]" rows="3"/>
                      </label>
                    </div>
                    <div className="col-span-2">
                      <label>Attachment
                        <input type="file" placeholder="" className="w-full border border-slate-300 rounded-lg outline-[#673ab7] text-[#673ab7]"/>
                      </label>
                    </div>
                    <div className="col-span-2">
                      {
                        arr.map((value,index)=>(
                            <div key={index} className="mb-4 md:mb-6">
                              <AskQuestion/>
                            </div>
                        ))
                      }
                      <div className="text-3xl gap-2 px-2 -mt-4 md:-mt-6 flex">
                        <div onClick={increaseQuestion} className="text-slate-400 cursor-pointer"><FontAwesomeIcon icon={faPlusCircle}/></div>
                        <div onClick={decreaseQuestion} className="text-slate-400 cursor-pointer"><FontAwesomeIcon icon={faMinusCircle}/></div>
                      </div>
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