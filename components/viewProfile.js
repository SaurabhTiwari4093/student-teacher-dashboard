import Link from "next/link";
import { useState } from "react";
import User from "../assets/user.jpg";
import Image from "next/image";

export default function ViewProfile(props) {
  const { showViewProfile, setShowViewProfile } = props;
  const [name, setName] = useState("Saurabh Tiwari");
  const [linkedIn, setLinkedIn] = useState("https://www.linkedin.com");
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iure facere ipsum dolores totam possimus, veritatis velit dolor sequi laboriosam esse ullam hic fuga placeat et dolore dolorem aliquid consectetur."
  );

  const closeViewProfile = () => {
    if (showViewProfile == "block") {
      setShowViewProfile("none");
    }
  };

  return (
    <div className="absolute h-screen w-screen backdrop-blur-sm backdrop-brightness-50 z-40 flex justify-center items-center">
      <div className="bg-white w-11/12 md:w-1/3 border-2 rounded-lg text-sm">
        <div className="p-4 md:p-6 grid grid-cols-3 gap-4 md:gap-6">
          <div className="cols-span-1 flex justify-center items-center">
            <div>
              <Image src={User} alt="user" className="rounded-full" />
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-4 md:gap-6 font-semibold">
            <label>
              Name
              <input
                className="w-full p-2 border border-slate-200 rounded-lg outline-none"
                disabled
                value={name}
              />
            </label>
            <label>
              LinkedIn
              <input
                className="w-full p-2 border border-slate-200 rounded-lg outline-none"
                disabled
                value={linkedIn}
              />
            </label>
          </div>
          <div className="col-span-3 font-semibold">
            <label>
              Bio
              <textarea
                className="w-full p-2 border border-slate-200 rounded-lg outline-none"
                rows="6"
                disabled
                value={bio}
              />
            </label>
          </div>
        </div>
        <div className="flex justify-end gap-2 md:gap-4 p-4 md:p-6 pt-0 md:pt-0">
          <div>
            <button
              className="py-2 px-4 rounded-lg border hover:bg-[#ede7f6] font-semibold"
              onClick={closeViewProfile}
            >
              Cancel
            </button>
          </div>
          <div>
            <Link href="/editProfile">
              <button className="py-2 px-4 rounded-lg bg-[#673ab7] text-white hover:bg-[#563199]">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
