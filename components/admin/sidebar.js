import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faBookOpen,
  faCalendar,
  faUserGraduate,
  faChalkboardTeacher,
  faBook,
  faListCheck,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [displayCurriculum, setDisplayCurriculum] = useState("none");
  const [displayAssignment, setDisplayAssignment] = useState("none");
  const [displayStudent, setDisplayStudent] = useState("none");
  const [displayTrainer, setDisplayTrainer] = useState("none");
  const [displayActivity, setDisplayActivity] = useState("none");

  const showCurriculum = () => {
    if (displayCurriculum === "none") {
      setDisplayCurriculum("flex");
    } else {
      setDisplayCurriculum("none");
    }
  };

  const showAssignment = () => {
    if (displayAssignment === "none") {
      setDisplayAssignment("flex");
    } else {
      setDisplayAssignment("none");
    }
  };

  const showStudent = () => {
    if (displayStudent === "none") {
      setDisplayStudent("flex");
    } else {
      setDisplayStudent("none");
    }
  };

  const showTrainer = () => {
    if (displayTrainer === "none") {
      setDisplayTrainer("flex");
    } else {
      setDisplayTrainer("none");
    }
  };

  const showActivity = () => {
    if (displayActivity === "none") {
      setDisplayActivity("flex");
    } else {
      setDisplayActivity("none");
    }
  };

  return (
    <div className="w-72 pt-20 h-screen fixed left-0 bg-white z-10">
      <div
        className="flex flex-col gap-4 p-4 font-medium text-sm text-slate-600 h-full overflow-y-auto"
        id={styles.noScrollBar}
      >
        <div className="border-b p-2">
          <div className="text-slate-900 mb-3 font-semibold">Dashboard</div>
          <Link href="/user/counsellor/dashboard">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faGauge} />
              </div>
              <div className="flex items-center">Dashboard</div>
            </div>
          </Link>
        </div>

        <div className="border-b p-2">
          <div className="text-slate-900 mb-3 font-semibold">Management</div>

          <div className="mb-1">
            <div
              className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg cursor-pointer p-3 pl-6"
              onClick={showCurriculum}
            >
              <div className="flex items-center">
                <FontAwesomeIcon icon={faBookOpen} />
              </div>
              <div className="flex items-center">Curriculum Management</div>
            </div>
            <div
              className="flex flex-col px-6 text-sm mt-1 font-normal"
              style={{ display: displayCurriculum }}
            >
              <Link href="/user/counsellor/curriculum/curriculumLibrary">
                <li className="cursor-pointer px-3 py-1.5 rounded-lg hover:text-[#673ab7] hover:font-semibold">
                  Curriculum Library
                </li>
              </Link>
              {/*<Link href="/user/counsellor/curriculum/createCurriculum"><li className='cursor-pointer px-3 py-1.5 rounded-lg hover:text-[#673ab7] hover:font-semibold'>Add Activity</li></Link>*/}
              <Link href="/user/counsellor/curriculum/activities">
                <li className="cursor-pointer px-3 py-1.5 rounded-lg hover:text-[#673ab7] hover:font-semibold">
                  Activites
                </li>
              </Link>
            </div>
          </div>

          {/* <div className='mb-1'>
              <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg cursor-pointer p-3 pl-6" onClick={showAssignment}>
                <div className='flex items-center'><FontAwesomeIcon icon={faBook}/></div>
                <div className='flex items-center'>Assignment Management</div>
              </div>
              <div className="flex flex-col px-6 text-sm mt-1 font-normal" style={{display:displayAssignment}}>
                 <Link href="/user/counsellor/assignment/assignmentList"><li className='cursor-pointer px-3 py-1.5 rounded-lg hover:text-[#673ab7] hover:font-semibold'>Assignment List</li></Link>
                 <Link href="/user/counsellor/assignment/createAssignment"><li className='cursor-pointer px-3 py-1.5 rounded-lg hover:text-[#673ab7] hover:font-semibold'>Create Assignment</li></Link>
              </div>
            </div>

            <div className='mb-1'>
              <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg cursor-pointer p-3 pl-6" onClick={showStudent}>
                <div className='flex items-center'><FontAwesomeIcon icon={faUserGraduate}/></div>
                <div className='flex items-center'>Student Management</div>
              </div>
              <div className="flex flex-col px-6 text-sm mt-1 font-normal" style={{display:displayStudent}}>
                 <Link href="/user/counsellor/student/studentList"><li className='cursor-pointer px-3 py-1.5 rounded-lg hover:text-[#673ab7] hover:font-semibold'>Student List</li></Link>
              </div>
            </div>

            <div className='mb-1'>
              <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg cursor-pointer p-3 pl-6" onClick={showTrainer}>
                <div className='flex items-center'><FontAwesomeIcon icon={faPersonChalkboard}/></div>
                <div className='flex items-center'>Trainer Management</div>
              </div>
              <div className="flex flex-col px-6 text-sm mt-1 font-normal" style={{display:displayTrainer}}>
                 <Link href="/user/counsellor/trainer/trainerList"><li className='cursor-pointer px-3 py-1.5 rounded-lg hover:text-[#673ab7] hover:font-semibold'>Trainer List</li></Link>
                 <Link href="/user/counsellor/trainer/createTrainer"><li className='cursor-pointer px-3 py-1.5 rounded-lg hover:text-[#673ab7] hover:font-semibold'>Create Trainer</li></Link>
              </div>
            </div>

            <div className='mb-1'>
              <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg cursor-pointer p-3 pl-6">
                <div className='flex items-center'><FontAwesomeIcon icon={faChalkboardTeacher}/></div>
                <div className='flex items-center'>Class Management</div>
              </div>
            </div> */}

          {/*<div className='mb-1'>
              <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg cursor-pointer p-3 pl-6" onClick={showActivity}>
                <div className='flex items-center'><FontAwesomeIcon icon={faListCheck}/></div>
                <div className='flex items-center'>Activity Management</div>
              </div>
              <div className="flex flex-col px-6 text-sm mt-1 font-normal" style={{display:displayActivity}}>
                 <Link href="/user/counsellor/activity/activityList"><li className='cursor-pointer px-3 py-1.5 rounded-lg hover:text-[#673ab7] hover:font-semibold'>Activity List</li></Link>
              </div>
            </div>*/}
        </div>

        {/* <div className='px-2 py-0'>
            <Link href="/user/counsellor/calender">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer">
              <div className='flex items-center'><FontAwesomeIcon icon={faCalendar}/></div>
              <div className='flex items-center'>Calender</div>
            </div>
            </Link>
          </div> */}
      </div>
    </div>
  );
}
