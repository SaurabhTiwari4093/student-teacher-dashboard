import Logo from "../assets/logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const { user } = router.query;
  const userLogin = () => {
    router.push(`/user/${user.toLowerCase()}/dashboard`);
  };
  return (
    <>
      <div className="min-h-screen text-slate-800 grid grid-cols-3">
        <div className="hidden md:block md:col-span-1 col-span-1 h-full w-full bg-[url(../assets/login.png)] bg-cover"></div>
        <div className="col-span-3 md:col-span-2 flex justify-center items-center h-full p-4 md:p-6 text-center">
          <div className="w-4/5 md:w-2/5">
            <div className="font-bold text-lg my-4 flex justify-center items-center gap-1">
              <div className="flex justify-center">
                <Image src={Logo} alt="logo" width="25" height="25" />
              </div>
              <div className="flex justify-center">DEMO</div>
            </div>
            <div className="text-[#673ab7] font-bold text-2xl my-4">
              {user} Login
            </div>
            <div className="text-slate-400 text-lg my-4">
              Enter your credentials to continue
            </div>
            <div className="bg-[#ede7f6] text-[#673ab7] rounded p-2">For demo purpose, no login is required.</div>
            <div className="text-left my-4">
              <label className="text-slate-400 text-sm">
                Enter your email address
                <input
                  id="email"
                  type="email"
                  className="w-full py-2 px-2 bg-[#fafafa] rounded-lg border border-slate-300 outline-[#673ab7] text-base text-[#673ab7]"
                  placeholder="abc123@gmail.com"
                />
              </label>
            </div>
            <div className="text-left my-4">
              <label className="text-slate-400 text-sm">
                Password
                <input
                  type="password"
                  className="w-full py-2 px-2 bg-[#fafafa] rounded-lg border border-slate-300 outline-[#673ab7] text-base text-[#673ab7]"
                />
              </label>
            </div>
            <div>
              <button
                className="w-full py-2 text-white bg-[#673ab7] rounded font-medium my-4 hover:bg-[#563199]"
                onClick={userLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
