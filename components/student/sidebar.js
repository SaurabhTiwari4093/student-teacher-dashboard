import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faUsers,
  faMessage,
  faChalkboardUser,
  faHandshake,
  faPersonChalkboard,
  faPenFancy,
  faPeopleArrowsLeftRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-72 pt-20 h-screen fixed left-0 bg-white z-10">
      <div
        className="flex flex-col gap-4 p-4 font-medium text-sm text-slate-600 h-full overflow-y-auto"
        id={styles.noScrollBar}
      >
        <Link href="/user/teacher/dashboard">
          <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faGauge} />
            </div>
            <div className="flex items-center">Dashboard</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
