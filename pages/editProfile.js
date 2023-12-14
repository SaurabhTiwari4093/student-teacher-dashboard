import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import User from "../assets/user.jpg";
import Image from "next/image";

export default function EditProfile() {
  const [firstName, setFirstName] = useState("Saurabh");
  const [lastName, setLastName] = useState("Tiwari");
  const [bio, setBio] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iure facere ipsum dolores totam possimus, veritatis velit dolor sequi laboriosam esse ullam hic fuga placeat et dolore dolorem aliquid consectetur.");
  const [linkedIn, setLinkedIn] = useState("https://www.linkedin.com");

  return (
    <>
        <div className="min-h-screen text-slate-800 grid grid-cols-3">
          <div className="hidden md:block col-span-1 h-full w-full bg-[url(../assets/login.png)] bg-cover"></div>
          <div className="col-span-3 md:col-span-2">
              <div className="p-4 md:p-6 border-b font-semibold text-lg md:text-xl flex items-center gap-3">
                <div className="text-3xl"><FontAwesomeIcon icon={faCircleUser}/></div>
                <div>Edit Profile</div>
              </div>
              <div className="p-4 md:p-6 flex justify-center">
                  <div>
                    <div className="flex items-center gap-4 md:gap-6">
                      <div>
                        <Image src={User} alt="user" className="rounded-full" height="150" width="150"/>
                      </div>
                      <div>
                        <button className="py-2 px-4 rounded-lg bg-[#673ab7] hover:bg-[#563199] text-white text-sm font-semibold">
                          Upload New Picture
                        </button>
                      </div>
                      <div>
                        <button className="py-2 px-4 rounded-lg border-2 hover:bg-[#ede7f6] text-sm font-semibold">
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:gap-6 text-left font-semibold mt-4 md:mt-6">
                        <div className="col-span-1">
                          <label>First name
                            <input className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                          </label>
                        </div>
                        <div className="col-span-1">
                          <label>Last Name
                            <input className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                          </label>
                        </div>
                        <div className="col-span-2">
                          <label>Bio
                            <textarea className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600" rows="6" value={bio} onChange={(e)=>setBio(e.target.value)}/>
                          </label>
                        </div>
                        <div className="col-span-2">
                          <label>LinkedIn Profile Address
                            <input className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600" value={linkedIn} onChange={(e)=>setLinkedIn(e.target.value)}/>
                          </label>
                        </div>
                    </div>
                    <div className="flex mt-4 md:mt-6 justify-end">
                        <button className="py-2 px-4 rounded-lg bg-[#673ab7] hover:bg-[#563199] text-white text-sm font-semibold">Update</button>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    </>
  )
}