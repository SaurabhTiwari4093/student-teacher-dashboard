import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faBookOpen,
  faUserGraduate,
  faBook,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [displayCurriculum, setDisplayCurriculum] = useState("none");
  const [displayAssignment, setDisplayAssignment] = useState("none");
  const [displayStudent, setDisplayStudent] = useState("none");
  const [displayteacher, setDisplayteacher] = useState("none");

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

  const showteacher = () => {
    if (displayteacher === "none") {
      setDisplayteacher("flex");
    } else {
      setDisplayteacher("none");
    }
  };

  return (
    <div className="w-72 pt-20 h-screen fixed left-0 bg-white z-10">
      <div
        className="flex flex-col gap-4 p-4 font-medium text-sm text-slate-600 h-full overflow-y-auto"
      >
        <Link href="/user/admin/dashboard">
          <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faGauge} />
            </div>
            <div className="flex items-center">Dashboard</div>
          </div>
        </Link>

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
            <Link href="/user/admin/curriculum/curriculumLibrary">
              <li className="cursor-pointer px-3 py-1.5 rounded-lg hover:text-[#673ab7] hover:font-semibold">
                Curriculum Library
              </li>
            </Link>
            <Link href="/user/admin/curriculum/activities">
              <li className="cursor-pointer px-3 py-1.5 rounded-lg hover:text-[#673ab7] hover:font-semibold">
                Activites
              </li>
            </Link>
          </div>
        </div>

        <div className="mb-1">
          <div
            className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg cursor-pointer p-3 pl-6"
            onClick={showAssignment}
          >
            <div className="flex items-center">
              <FontAwesomeIcon icon={faBook} />
            </div>
            <div className="flex items-center">Assignment Management</div>
          </div>
          <div
            className="flex flex-col px-6 text-sm mt-1 font-normal"
            style={{ display: displayAssignment }}
          >
            <Link href="/user/admin/assignment/assignmentList">
              <li className="cursor-pointer px-3 py-1.5 rounded-lg hover:text-[#673ab7] hover:font-semibold">
                Assignment List
              </li>
            </Link>
            <Link href="/user/admin/assignment/createAssignment">
              <li className="cursor-pointer px-3 py-1.5 rounded-lg hover:text-[#673ab7] hover:font-semibold">
                Create Assignment
              </li>
            </Link>
          </div>
        </div>

        <div className="mb-1">
          <div
            className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg cursor-pointer p-3 pl-6"
            onClick={showStudent}
          >
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUserGraduate} />
            </div>
            <div className="flex items-center">Student Management</div>
          </div>
          <div
            className="flex flex-col px-6 text-sm mt-1 font-normal"
            style={{ display: displayStudent }}
          >
            <Link href="/user/admin/student/studentList">
              <li className="cursor-pointer px-3 py-1.5 rounded-lg hover:text-[#673ab7] hover:font-semibold">
                Student List
              </li>
            </Link>
          </div>
        </div>

        <div className="mb-1">
          <div
            className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg cursor-pointer p-3 pl-6"
            onClick={showteacher}
          >
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPersonChalkboard} />
            </div>
            <div className="flex items-center">Teacher Management</div>
          </div>
          <div
            className="flex flex-col px-6 text-sm mt-1 font-normal"
            style={{ display: displayteacher }}
          >
            <Link href="/user/admin/teacher/teacherList">
              <li className="cursor-pointer px-3 py-1.5 rounded-lg hover:text-[#673ab7] hover:font-semibold">
                Teacher List
              </li>
            </Link>
            <Link href="/user/admin/teacher/createTeacher">
              <li className="cursor-pointer px-3 py-1.5 rounded-lg hover:text-[#673ab7] hover:font-semibold">
                Create Teacher
              </li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
