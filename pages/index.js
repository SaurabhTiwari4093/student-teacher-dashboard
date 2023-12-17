import Logo from "../assets/logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export default function WelcomePage() {
  const router = useRouter();
  const adminLogin = () => {
    router.push({
      pathname: "/login",
      query: { user: "Admin" },
    });
  };
  const studentLogin = () => {
    router.push({
      pathname: "/login",
      query: { user: "Student" },
    });
  };
  const teacherLogin = () => {
    router.push({
      pathname: "/login",
      query: { user: "Teacher" },
    });
  };
  return (
    <>
      <div className="min-h-screen text-slate-800 grid grid-cols-3">
        <div className="hidden md:block md:col-span-1 h-full w-full bg-[url(../assets/login.png)] bg-cover"></div>
        <div className="col-span-3 md:col-span-2 flex justify-center items-center h-full p-4 md:p-6 text-center">
          <div className="w-4/5 md:w-2/5">
            <div className="font-bold text-lg my-4 flex justify-center items-center gap-1">
              <div className="flex justify-center">
                <Image src={Logo} alt="logo" width="25" height="25" />
              </div>
              <div className="flex justify-center">DEMO</div>
            </div>
            <div className="text-[#673ab7] font-bold text-2xl my-4">
              Hi, Welcome Back
            </div>
            <div className="text-slate-400 text-lg my-4">
              Please select one to continue
            </div>
            <div>
              <button
                className="w-full py-2 text-white bg-[#673ab7] rounded font-medium my-4 hover:bg-[#563199]"
                onClick={adminLogin}
              >
                Admin
              </button>
            </div>
            <div>
              <button
                className="w-full py-2 text-white bg-[#673ab7] rounded font-medium my-4 hover:bg-[#563199]"
                onClick={studentLogin}
              >
                Student
              </button>
            </div>
            <div>
              <button
                className="w-full py-2 text-white bg-[#673ab7] rounded font-medium my-4 hover:bg-[#563199]"
                onClick={teacherLogin}
              >
                Teacher
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
