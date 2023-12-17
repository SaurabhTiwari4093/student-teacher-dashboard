import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import ViewProfile from "./viewProfile";

export default function ProfilePopUp() {
  const [greeting, setGreeting] = useState("Good Morning");
  const [userType, setUserType] = useState("");
  const [showViewProfile, setShowViewProfile] = useState("none");
  const time = new Date().getHours();
  const router = useRouter();

  useEffect(() => {
    var str = router.pathname;
    var mySubString = str.substring(0, 7);
    if (mySubString === "/user/a") {
      setUserType("Admin");
    } else if (mySubString === "/user/b") {
      setUserType("B2B");
    } else if (mySubString === "/user/t") {
      setUserType("Teacher");
    } else if (mySubString === "/user/c") {
      setUserType("Operation Team");
    } else {
      setUserType("");
    }
  }, [router.pathname]);

  useEffect(() => {
    if (time >= 0 && time <= 12) {
      setGreeting("Good Morning");
    } else if (time > 12 && time < 17) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, [time]);

  const logout = () => {
    localStorage.clear();
    router.push("/");
  };

  const viewProfile = () => {
    if (showViewProfile == "none") {
      setShowViewProfile("block");
    }
  };

  return (
    <>
      <div className="absolute right-5 md:right-7 top-[4.6rem] bg-[white] shadow-xl rounded-lg p-4 md:p-6 z-30 w-5/6 md:w-1/5 text-slate-800">
        <div className="border-b pb-4 md:pb-6">
          <div>
            <span className="font-bold">{greeting + ", "}</span>
            <spna className="font-medium">Saurabh Tiwari</spna>
          </div>
          <div className="text-slate-400">{userType}</div>
        </div>
        <div className="flex flex-col gap-2 mt-3 text-slate-500 font-medium text-sm">
          <div className="px-2">
            <div
              className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer"
              onClick={viewProfile}
            >
              <div className="flex items-center">
                <FontAwesomeIcon icon={faGear} />
              </div>
              <div className="flex items-center">Profile</div>
            </div>
          </div>
          <div className="px-2">
            <div
              className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer"
              onClick={logout}
            >
              <div className="flex items-center">
                <FontAwesomeIcon icon={faRightFromBracket} />
              </div>
              <div className="flex items-center">Logout</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: showViewProfile }}>
        <ViewProfile
          showViewProfile={showViewProfile}
          setShowViewProfile={setShowViewProfile}
        />
      </div>
    </>
  );
}
