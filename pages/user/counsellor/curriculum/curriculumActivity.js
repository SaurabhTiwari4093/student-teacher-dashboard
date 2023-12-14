import Navbar from "../../../../components/navbar";
import Sidebar from "../../../../components/counsellor/sidebar";
import { useState} from "react";
import useWindowDimensions from '../../../../components/useWindowDimensions';
import styles from "../../../../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCrown, faEye, faFilePdf, faFileVideo, faListCheck, faPersonChalkboard, faUser, faImage, faFingerprint, faHandPointUp, faArrowRight, faClipboardCheck, faList, faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import AddActivity from "../../../../components/counsellor/curriculum/addActivity";
import Video from "../../../../assets/video.png";
import Card from "../../../../assets/card.png";

const para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facilis sapiente accusamus illum dolores ex sequi praesentium laboriosam earum corrupti magnam molestiae, numquam exercitationem beatae iste doloremque explicabo voluptatem cum.";

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
          <div className="bg-white rounded-lg border border-[#bee1fa] min-h-full">
            <div className="p-4 md:p-6 font-semibold text-lg border-b flex items-center gap-3">
              <div className="flex items-center"><FontAwesomeIcon icon={faBookOpen}/></div>
              <div>Curriculum {">"} <span className="text-[#673ab7]">Activity Page</span></div>
            </div>
            <div className="grid grid-cols-4">
              <div className="col-span-3 p-4 md:p-6">
                <div className="mb-4 md:mb-6 rounded-lg grid grid-cols-4 gap-4">
                  <div className="rounded-l-lg relative col-span-1 h-48"><Image src={Card} alt="" layout="fill"/></div>
                  <div className="flex flex-col justify-center gap-2 col-span-3">
                    <div className="font-semibold text-2xl">Cast Away</div>
                    <div className="text-slate-500">Hots | Problem Soving</div>
                    <div className="text-sm mt-4 md:mt-6 font-semibold">
                      <FontAwesomeIcon icon={faUser}/><span className="ml-2 mr-6">9+ years</span>
                      <FontAwesomeIcon icon={faImage}/><span className="ml-2">Presentation Based</span>
                    </div>
                  </div>
                </div>
                <div className="text-slate-600 text-sm text-justify">
                  <div className="mb-2">{para+para}</div>
                  <div>{para}</div>    
                </div>
                <div className="border my-4 md:my-6 mt-10 md:mt-12 p-4 md:p-6 rounded-lg">
                  <div className="font-semibold mb-1">Format</div>
                  <div>PPT Format</div>
                </div>
                <div className="my-4 md:my-6 mt-10 md:mt-12 flex gap-4 md:gap-6">
                  <div className="py-1 w-14 text-2xl rounded-lg bg-[#ede7f6] text-[#673ab7] flex items-center justify-center"><FontAwesomeIcon icon={faHandPointUp}/></div>
                  <div>
                    <div className="text-base md:text-xl font-semibold my-1">
                      Triggers
                    </div>
                    <div className="text-xs md:text-sm text-slate-400 my-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ullam quia fuga nesciunt accusamus.
                    </div>
                  </div>
                </div>
                <div className="my-4 md:my-6 flex flex-col gap-3 md:gap-4 border p-4 md:p-6 rounded-lg text-xs md:text-sm">
                  <div><span className="font-bold mr-3">{">"}</span>{para.slice(0,30)}</div>
                  <div><span className="font-bold mr-3">{">"}</span>{para.slice(0,100)}</div>
                  <div><span className="font-bold mr-3">{">"}</span>{para.slice(0,90)}</div>
                  <div><span className="font-bold mr-3">{">"}</span>{para.slice(0,120)}</div>
                </div>
                <div className="my-4 md:my-6 mt-10 md:mt-12 flex gap-4 md:gap-6">
                  <div className="py-1 w-14 text-2xl rounded-lg bg-[#ede7f6] text-[#673ab7] flex items-center justify-center"><FontAwesomeIcon icon={faClipboardCheck}/></div>
                  <div>
                    <div className="text-base md:text-xl font-semibold my-1">
                      Learning Outcomes
                    </div>
                    <div className="text-xs md:text-sm text-slate-400 my-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ullam quia fuga nesciunt accusamus.
                    </div>
                  </div>
                </div>
                <div className="my-4 md:my-6 flex flex-col gap-3 md:gap-4 border p-4 md:p-6 rounded-lg text-xs md:text-sm">
                  <div><span className="font-bold mr-3">{">"}</span>{para.slice(0,30)}</div>
                  <div><span className="font-bold mr-3">{">"}</span>{para.slice(0,100)}</div>
                  <div><span className="font-bold mr-3">{">"}</span>{para.slice(0,90)}</div>
                  <div><span className="font-bold mr-3">{">"}</span>{para.slice(0,120)}</div>
                </div>
                <div className="my-4 md:my-6 mt-10 md:mt-12 flex gap-4 md:gap-6">
                  <div className="py-1 w-14 text-2xl rounded-lg bg-[#ede7f6] text-[#673ab7] flex items-center justify-center"><FontAwesomeIcon icon={faList}/></div>
                  <div>
                    <div className="text-base md:text-xl font-semibold my-1">
                      Additional Information
                    </div>
                    <div className="text-xs md:text-sm text-slate-400 my-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ullam quia fuga nesciunt accusamus.
                    </div>
                  </div>
                </div>
                <div className="my-4 md:my-6 flex flex-col gap-3 md:gap-4 border p-4 md:p-6 rounded-lg text-xs md:text-sm">
                  <div><span className="font-bold mr-3">{">"}</span>{para.slice(0,30)}</div>
                  <div><span className="font-bold mr-3">{">"}</span>{para.slice(0,100)}</div>
                  <div><span className="font-bold mr-3">{">"}</span>{para.slice(0,90)}</div>
                  <div><span className="font-bold mr-3">{">"}</span>{para.slice(0,120)}</div>
                </div>
              </div>
              <div className="col-span-1 font-semibold shadow">
                <div className="p-2 md:p-4 border-b">Files</div>
                <div className="p-4 md:p-6">
                  <div className="mb-2"><span className="text-[#673ab7]"><FontAwesomeIcon icon={faCrown}/></span>{" "}Showcase Video</div>
                  <div className="w-full relative h-40 mb-4 md:mb-6 flex justify-center items-center">
                    <Image src={Video} alt="" layout="fill"/>
                    <div className="absolute z-10 text-white text-2xl cursor-pointer"><FontAwesomeIcon icon={faPlayCircle}/></div>
                  </div>
                  <div className="mb-2"><span className="text-[#673ab7]"><FontAwesomeIcon icon={faListCheck}/></span>{" "}Activity</div>
                  <div className="mb-4 rounded-lg flex gap-4 border">
                    <div className="bg-[#f6f7f8] p-4 rounded-l-lg text-2xl text-[#ED4D51]"><FontAwesomeIcon icon={faFilePdf}/></div>
                    <div className="font-normal flex flex-col justify-center gap-1 text-xs">
                       <div className="underline font-semibold">Cast Away</div>
                       <div className="text-slate-500">2.9Mb<span className="text-[#29C1CF] ml-3"><FontAwesomeIcon icon={faEye}/>{" "}View</span></div>
                    </div>
                  </div>
                  <div className="mb-4 md:mb-6 rounded-lg flex gap-4 border">
                    <div className="bg-[#f6f7f8] p-4 rounded-l-lg text-2xl text-[#43C272]"><FontAwesomeIcon icon={faFileVideo}/></div>
                    <div className="font-normal flex flex-col justify-center gap-1 text-xs">
                       <div className="underline font-semibold">Demo video</div>
                       <div className="text-slate-500">2.9Mb<span className="text-[#29C1CF] ml-3"><FontAwesomeIcon icon={faEye}/>{" "}View</span></div>
                    </div>
                  </div>
                  <div className="mb-2"><span className="text-[#673ab7]"><FontAwesomeIcon icon={faPersonChalkboard}/></span>{" "}Teacher{"'"} SOP</div>
                  <div className="mb-4 rounded-lg flex gap-4 border">
                    <div className="bg-[#f6f7f8] p-4 rounded-l-lg text-2xl text-[#ED4D51]"><FontAwesomeIcon icon={faFilePdf}/></div>
                    <div className="font-normal flex flex-col justify-center gap-1 text-xs">
                       <div className="underline font-semibold">Cast Away SOP</div>
                       <div className="text-slate-500">2.9Mb<span className="text-[#29C1CF] ml-3"><FontAwesomeIcon icon={faEye}/>{" "}View</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {addActivitySidebarOpen?<AddActivity addActivitySidebarOpen={addActivitySidebarOpen} setAddActivitySidebarOpen={setAddActivitySidebarOpen}/>:""}
    </>
  )
}