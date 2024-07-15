import React from "react";
import loginImage from "../assets/images/login2.png";
import { FaUser, FaLock, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="px-32 py-5 h-screen overflow-y-hidden bg-slate-200">
      <div className="navbar pt-3 flex items-center justify-between px-5">
        <div className="text-black text-4xl font-loginName font-bold cursor-pointer">
          <span className="text-blue-400 font-extrabold text-4xl font-loginName "> DEV </span>
          ESTIMATE
        </div>
        <div>
          <p className="font-bold text-xl">
            New user ?{" "}
            <span className="pl-1 text-blue-400 cursor-pointer"><Link to='/sign-up'>Sign Up</Link></span>
          </p>
        </div>
      </div>
      <div className=" hero-section flex items-center justify-evenly h-full">
        <div className="hero-right flex-1">
          <img className="w-screen" src={loginImage} alt=" login-image" />
        </div>
        <div className="hero-left flex-1 flex justify-center items-center">
          <div className="border-4 border-blue-400 p-14 rounded-md shadow-slate-700 shadow-2xl">
            <div className="mb-10">
              <h2 className="text-black text-3xl font-bold">Welcome Back!</h2>
              <p className="text-black text-opacity-70 font-bold text-xl">
                Login to Continue
              </p>
            </div>
            <div className="flex items-center mb-5 bg-white p-5 border-2 rounded-md border-blue-400">
              <FaUser className="text-blue-400 text-2xl" />
              <input
                className="outline-none w-full px-5"
                type="text"
                placeholder="Ex: zerocode@gmail.com"
                Enter
                the
                password
              />
            </div>
            <div className="flex items-center mb-10 bg-white p-5 border-2 rounded-md border-blue-400">
              <FaLock className="text-blue-400 text-2xl" />
              <input
                className="outline-none w-full px-5"
                type="password"
                placeholder="Enter the password"
              />
            </div>
            <div className="flex items-center gap-10">
              <button className="bg-blue-500 px-8 py-3 rounded-lg font-bold hover:bg-blue-400 duration-300">
                <Link to='/docs'>Login</Link>
              </button>
              <h3 className="text-blue-400 font-bold">Forget password?</h3>
            </div>
            <div className="flex gap-10 items-center justify-center mt-10">
              <h2 className="mr-2 font-bold">Login with</h2>
              <FaGoogle className="text-2xl hover:text-blue-500 duration-200 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
