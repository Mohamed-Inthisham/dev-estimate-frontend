import React from "react";
import { FaUser, FaEnvelope, FaLock,} from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="px-32 py-5 h-screen overflow-y-hidden bg-slate-200">
      <div className="navbar pt-3 flex items-center justify-between px-5">
        <div className="text-black text-4xl font-loginName font-bold cursor-pointer">
          <span className="text-blue-400 font-extrabold text-4xl font-loginName">DEV </span>
          ESTIMATE
        </div>
        <div>
          <p className="font-bold text-xl">
            Already have an account?{" "}
            <span className="pl-1 text-blue-400 cursor-pointer"> <Link to='/login'> Login</Link></span>
          </p>
        </div>
      </div>
      <div className="hero-section flex items-center justify-center h-full">
        <div className="border-4 border-blue-400 p-14 rounded-md shadow-slate-700 shadow-2xl w-1/2">
          <div className="mb-10 text-center">
            <h2 className="text-black text-3xl font-bold">Seconds to Sign Up!</h2>
            <p className="text-black text-opacity-70 font-bold text-xl">
              Start from here...
            </p>
          </div>
          <div className="flex items-center mb-5 bg-white p-5 border-2 rounded-md border-blue-400">
            <FaUser className="text-blue-400 text-2xl" />
            <input
              className="outline-none w-full px-5"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="flex items-center mb-5 bg-white p-5 border-2 rounded-md border-blue-400">
            <FaEnvelope className="text-blue-400 text-2xl" />
            <input
              className="outline-none w-full px-5"
              type="email"
              placeholder="Ex: zerocode@gmail.com"
            />
          </div>
          <div className="flex items-center mb-5 bg-white p-5 border-2 rounded-md border-blue-400">
            <FaLock className="text-blue-400 text-2xl" />
            <input
              className="outline-none w-full px-5"
              type="password"
              placeholder="Enter the password"
            />
          </div>
          <div className="flex items-center mb-10 bg-white p-5 border-2 rounded-md border-blue-400">
            <FaLock className="text-blue-400 text-2xl" />
            <input
              className="outline-none w-full px-5"
              type="password"
              placeholder="Re-type the password"
            />
          </div>
          <div className="flex justify-center items-center gap-10 mb-5">
            <button className="bg-blue-500 px-10 py-3 rounded-lg font-bold hover:bg-blue-400 duration-300">
              Sign Up
            </button>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default SignUp;
