import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGauge,faPeopleArrowsLeftRight,faPeopleRoof,faList, faSliders,faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import styles from "../../styles/Home.module.css";
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className='w-72 pt-20 h-screen fixed left-0 bg-white z-10'>
        <div className="flex flex-col gap-4 p-4 font-medium text-sm text-slate-600 h-full overflow-y-auto" id={styles.noScrollBar}>

          <div className='border-b p-2'>
            <div className='text-slate-900 mb-3 font-semibold'>Dashboard</div>
            <Link href="/user/admin/dashboard">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faGauge}/></div>
              <div className='flex items-center'>Dashboard</div>
            </div>
            </Link>
          </div>

          <div className='border-b p-2'>
            <div className='text-slate-900 mb-3 font-semibold'>Manage</div>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faPeopleRoof}/></div>
              <div className='flex items-center'>Manage Team</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faList}/></div>
              <div className='flex items-center'>Manage Master List</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faSliders}/></div>
              <div className='flex items-center'>Manage Subscription</div>
            </div>
            </Link>
          </div>

          <div className='px-2 pb-0'>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer">
              <div className='flex items-center'><FontAwesomeIcon icon={faGraduationCap}/></div>
              <div className='flex items-center'>Interact With Students</div>
            </div>
            </Link>
          </div>

          <div className='px-2 py-0'>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer">
              <div className='flex items-center'><FontAwesomeIcon icon={faPeopleArrowsLeftRight}/></div>
              <div className='flex items-center'>Log Parent Interaction</div>
            </div>
            </Link>
          </div>

        </div>
    </div>
  )
}