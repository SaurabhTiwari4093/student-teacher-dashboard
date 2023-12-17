import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faPlusCircle,
  faToggleOff,
  faToggleOn,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function AddActivity(props) {
  const { addActivitySidebarOpen, setAddActivitySidebarOpen } = props;
  const [toggleOn, setToggleOn] = useState(true);
  const [toggleTwoOn, setToggleTwoOn] = useState(true);

  const closeAddActivitySidebar = () => {
    if (addActivitySidebarOpen == true) {
      setAddActivitySidebarOpen(false);
    }
  };

  const onToggleButton = () => {
    if (!toggleOn) {
      setToggleOn(true);
    } else {
      setToggleOn(false);
    }
  };

  const onToggleButtonTwo = () => {
    if (!toggleTwoOn) {
      setToggleTwoOn(true);
    } else {
      setToggleTwoOn(false);
    }
  };

  return (
    <div className="w-full grid grid-cols-5 h-screen fixed right-0 top-0 z-30 text-slate-800 overflow-y-auto">
      <div className="bg-opacity-50 col-span-1 bg-black"></div>
      <div className="col-span-4 bg-white">
        <div className="bg-[#e3f2fd] fixed top-0 w-full p-4 md:p-6 flex items-center justify-start gap-4 md:gap-6">
          <div>
            <button
              className="py-1 px-3 text-xl rounded-lg bg-[#673ab7] hover:bg-[#563199] text-white"
              onClick={closeAddActivitySidebar}
            >
              X
            </button>
          </div>
          <div className="text-center font-bold text-base md:text-xl">
            Add New Activity
          </div>
        </div>
        <div className="p-4 pt-24 md:p-6 md:pt-24">
          <div className="border-b-2 py-3 mb-4 md:mb-6">
            <div className="text-base md:text-xl font-semibold my-1 text-[#673ab7]">
              Basics
            </div>
            <div className="text-xs md:text-sm text-slate-500 my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              ullam quia fuga nesciunt accusamus.
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 md:gap-6">
            <div className="col-span-1 bg-[#e3f2fd] rounded-lg flex items-center justify-center p-4">
              <div className="flex flex-col gap-3 items-center">
                <div className="bg-[white] py-3 px-4 rounded-3xl w-fit text-[#673ab7] shadow-lg text-2xl">
                  <FontAwesomeIcon icon={faImage} />
                </div>
                <div className="font-semibold text-sm md:text-base">
                  Activity Image
                </div>
                <div>
                  <button className="py-2 px-3 text-sm rounded-lg bg-[#673ab7] hover:bg-[#563199] text-white">
                    <FontAwesomeIcon icon={faUpload} /> Upload
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-2 gap-4 md:gap-6 font-semibold p-2">
              <div className="col-span-2">
                <label>
                  Activity Name
                  <input
                    type="text"
                    placeholder=""
                    className="w-full p-2 border border-slate-200 rounded-lg outline-none"
                  />
                </label>
              </div>
              <div className="col-span-1">
                <label>
                  Category
                  <select className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600">
                    <option>Select</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </label>
              </div>
              <div className="col-span-1">
                <label>
                  Sub Category
                  <select className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600">
                    <option>Select</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="col-span-4 font-semibold">
              <label>
                Objective
                <input className="w-full p-2 border border-slate-200 rounded-lg outline-none" />
              </label>
            </div>
            <div className="col-span-4 font-semibold">
              <label>
                Description
                <textarea
                  className="w-full p-2 border border-slate-200 rounded-lg outline-none"
                  rows="5"
                />
              </label>
            </div>
            {/*<div className="col-span-4 rounded-lg bg-[#f6f7f8] p-4 md:p-6">
                     <div className="mb-2 font-semibold">Suitable levels</div>
                     <div className="grid grid-cols-2 gap-2 md:gap-4">
                      <div className="col-span-1"><input type="checkbox" className="mx-2"/>Explorer</div>
                      <div className="col-span-1"><input type="checkbox" className="mx-2"/>Initiator</div>
                      <div className="col-span-1"><input type="checkbox" className="mx-2"/>Innovator</div>
                      <div className="col-span-1"><input type="checkbox" className="mx-2"/>Leader</div>
                    </div>
                  </div>*/}
            <div className="col-span-4 rounded-lg bg-[#f6f7f8] p-4 md:p-6">
              <div className="flex justify-between items-center mb-2">
                <div className="font-semibold">
                  Age Group
                  <span className="font-light">
                    {" ("}You can add multiple{")"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="font-semibold">Apply to All Ages</div>
                  <div
                    className="text-[#673ab7] text-3xl p-0 cursor-pointer"
                    onClick={onToggleButton}
                  >
                    {toggleOn ? (
                      <FontAwesomeIcon icon={faToggleOn} />
                    ) : (
                      <FontAwesomeIcon icon={faToggleOff} />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-4 text-slate-700 font-medium">
                <div>
                  <label>
                    Range Min
                    <select className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600">
                      <option>Select</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label>
                    Range Max
                    <select className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600">
                      <option>Select</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-span-4 rounded-lg bg-[#f6f7f8] p-4 md:p-6 grid grid-cols-2 gap-4 md:gap-6 font-semibold">
              <div className="col-span-1">
                <label className="w-full py-0.5 px-3 border border-slate-200 rounded-lg outline-none text-slate-600 mt-6 bg-white flex items-center justify-between">
                  <input className="bg-white" value="Picture based" disabled />
                  <div
                    className="text-[#673ab7] text-3xl cursor-pointer"
                    onClick={onToggleButtonTwo}
                  >
                    {toggleTwoOn ? (
                      <FontAwesomeIcon icon={faToggleOn} />
                    ) : (
                      <FontAwesomeIcon icon={faToggleOff} />
                    )}
                  </div>
                </label>
              </div>
              <div className="col-span-1">
                <label>
                  Formats
                  <select className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600">
                    <option>Select</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </label>
              </div>
              {/*<div className="col-span-2">
                      <label>Props
                        <select className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600">
                          <option>Select</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                        </select>
                      </label>
                    </div>*/}
            </div>
            <div className="col-span-4 font-semibold">
              <label>
                Upload Activity
                <div className="bg-[#f6f7f8] p-4 md:p-6 grid grid-cols-5 rounded-lg">
                  <div className="col-span-1 flex justify-center items-center">
                    <div className="p-3 px-4 bg-white rounded-full w-fit text-2xl shadow">
                      <FontAwesomeIcon icon={faUpload} />
                    </div>
                  </div>
                  <div className="col-span-4 flex flex-col gap-3">
                    <div className="text-xs md:text-sm">
                      Drag and drop one or more files here or select a file from
                      your computer
                    </div>
                    <div>
                      <button className="py-2 px-3 text-sm rounded-lg bg-[#673ab7] hover:bg-[#563199] text-white">
                        <FontAwesomeIcon icon={faUpload} /> Upload
                      </button>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div className="border-b-2 py-3  mt-6 md:mt-8">
            <div className="text-base md:text-xl font-semibold my-1 text-[#673ab7]">
              Triggers
            </div>
            <div className="text-xs md:text-sm text-slate-500 my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              ullam quia fuga nesciunt accusamus.
            </div>
          </div>
          <div className="font-semibold my-4 md:my-6">
            <div className="flex justify-between items-end gap-4 md:gap-6">
              <div className="w-full">
                <label>
                  Triggers{" ("}You can add multiple{" )"}
                  <input
                    type="text"
                    placeholder=""
                    className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600"
                  />
                </label>
              </div>
              <div>
                <button className="py-2.5 px-3 text-sm rounded-lg bg-[#673ab7] hover:bg-[#563199] text-white my-0.5">
                  <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </div>
            </div>
            <div className="text-xs md:text-sm text-slate-500 my-3 font-normal flex flex-col gap-2">
              <div className="bg-[#f6f7f8] py-2 px-3 flex justify-between rounded-lg">
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                  dolores architecto, voluptate commodi.
                </div>
                <div>X</div>
              </div>
              <div className="bg-[#f6f7f8] py-2 px-3 flex justify-between rounded-lg">
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                  dolores architecto.
                </div>
                <div>X</div>
              </div>
            </div>
          </div>
          <div className="border-b-2 py-3 mt-6 md:mt-8">
            <div className="text-base md:text-xl font-semibold my-1 text-[#673ab7]">
              Learning Outcomes
            </div>
            <div className="text-xs md:text-sm text-slate-500 my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              ullam quia fuga nesciunt accusamus.
            </div>
          </div>
          <div className="font-semibold my-4 md:my-6">
            <div className="flex justify-between items-end gap-4 md:gap-6">
              <div className="w-full">
                <label>
                  Learning Outcomes{" ("}You can add multiple{" )"}
                  <input
                    type="text"
                    placeholder=""
                    className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600"
                  />
                </label>
              </div>
              <div>
                <button className="py-2.5 px-3 text-sm rounded-lg bg-[#673ab7] hover:bg-[#563199] text-white my-0.5">
                  <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </div>
            </div>
            <div className="text-xs md:text-sm text-slate-500 my-3 font-normal flex flex-col gap-2">
              <div className="bg-[#f6f7f8] py-2 px-3 flex justify-between rounded-lg">
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                  dolores architecto, voluptate commodi.
                </div>
                <div>X</div>
              </div>
              <div className="bg-[#f6f7f8] py-2 px-3 flex justify-between rounded-lg">
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                  dolores architecto.
                </div>
                <div>X</div>
              </div>
            </div>
          </div>
          <div className="border-b-2 py-3 mt-6 md:mt-8">
            <div className="text-base md:text-xl font-semibold my-1 text-[#673ab7]">
              Additional Information
            </div>
            <div className="text-xs md:text-sm text-slate-500 my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              ullam quia fuga nesciunt accusamus.
            </div>
          </div>
          <div className="font-semibold my-4 md:my-6 gap-4 md:gap-6">
            <label>
              Additional Information
              <textarea
                type="text"
                placeholder=""
                className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600"
                rows="5"
              />
            </label>
          </div>
          <div className="my-4 md:my-6 grid grid-cols-2 gap-4 md:gap-6 font-semibold">
            <div className="col-span-1">
              <label>
                Teacher{"'"}s SOP
                <div className="bg-[#f6f7f8] p-4 md:p-6 grid grid-cols-5 gap-3 rounded-lg">
                  <div className="col-span-1 flex justify-center items-center">
                    <div className="p-3 px-4 bg-white rounded-full w-fit text-2xl shadow">
                      <FontAwesomeIcon icon={faUpload} />
                    </div>
                  </div>
                  <div className="col-span-4 flex flex-col gap-3">
                    <div className="text-xs md:text-sm">
                      Drag and drop one or more files here or select a file from
                      your computer
                    </div>
                    <div>
                      <button className="py-2 px-3 text-sm rounded-lg bg-[#673ab7] hover:bg-[#563199] text-white">
                        <FontAwesomeIcon icon={faUpload} /> Upload
                      </button>
                    </div>
                  </div>
                </div>
              </label>
            </div>
            <div className="col-span-1">
              <label>
                Best Case Show Case Video
                <div className="bg-[#f6f7f8] p-4 md:p-6 grid grid-cols-5 gap-3 rounded-lg">
                  <div className="col-span-1 flex justify-center items-center">
                    <div className="p-3 px-4 bg-white rounded-full w-fit text-2xl shadow">
                      <FontAwesomeIcon icon={faUpload} />
                    </div>
                  </div>
                  <div className="col-span-4 flex flex-col gap-3">
                    <div className="text-xs md:text-sm">
                      Drag and drop one or more files here or select a file from
                      your computer
                    </div>
                    <div>
                      <button className="py-2 px-3 text-sm rounded-lg bg-[#673ab7] hover:bg-[#563199] text-white">
                        <FontAwesomeIcon icon={faUpload} /> Upload
                      </button>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="py-2 px-6 rounded-lg bg-[#673ab7] hover:bg-[#563199] text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
