export default function UpdateActivity(props) {
  const { updateActivitySidebarOpen, setUpdateActivitySidebarOpen } = props;

  const closeUpdateActivity = () => {
    if (updateActivitySidebarOpen == true) {
      setUpdateActivitySidebarOpen(false);
    }
  };

  return (
    <div className="w-full grid grid-cols-5 h-screen fixed right-0 top-0 z-30 text-slate-800 overflow-y-auto">
      <div className="bg-opacity-50 col-span-1 md:col-span-2 bg-black"></div>
      <div className="col-span-4 md:col-span-3 bg-white">
        <div className="bg-[#e3f2fd] fixed top-0 w-full p-4 md:p-6 flex items-center justify-start gap-4 md:gap-6">
          <div>
            <button
              className="py-1 px-3 text-xl rounded-lg bg-[#673ab7] hover:bg-[#563199] text-white"
              onClick={closeUpdateActivity}
            >
              X
            </button>
          </div>
          <div className="text-center font-bold text-base md:text-xl">
            Edit Activity
          </div>
        </div>
        <div className="font-semibold p-4 pt-32 md:p-6 md:pt-32">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="col-span-1">
              <label>
                Activity
                <input
                  input="text"
                  className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600"
                />
              </label>
            </div>
            <div className="col-span-1">
              <label>
                Student Level
                <input
                  type="text"
                  className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600"
                />
              </label>
            </div>
            <div className="col-span-1">
              <label>
                Sub Category
                <input
                  type="text"
                  className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600"
                />
              </label>
            </div>
            <div className="col-span-1">
              <label>
                Age Group
                <input
                  type="text"
                  className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600"
                />
              </label>
            </div>
            <div className="col-span-1">
              <label>
                Description
                <textarea
                  type="text"
                  className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600"
                  rows="4"
                />
              </label>
            </div>
            <div className="col-span-1">
              <label>
                Optional
                <textarea
                  type="text"
                  className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600"
                  rows="4"
                />
              </label>
            </div>
            <div className="col-span-2">
              <label>
                Attachments
                <input
                  type="file"
                  className="w-full border border-slate-200 rounded-lg outline-none text-slate-600"
                />
              </label>
            </div>
          </div>
          <div className="mt-6 md:mt-8">
            <button
              type="button"
              className="py-2 px-6 text-white bg-[#673ab7] rounded font-medium hover:bg-[#563199]"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
