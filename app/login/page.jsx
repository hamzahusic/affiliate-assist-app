"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiSolidHide , BiSolidShow} from "react-icons/bi";

const LogIn = () => {

    const [showPass,setShowPass] = useState(false);

    return ( 
        <div className=" grid place-items-center min-h-screen">
            <div className=" max-w-[424px]">
                <div className=" text-center">
                    <h1 className=" text-4xl font-medium">Log In</h1>
                    <p className=" text-base mt-1">Don’t have an ccount? 
                    <Link href={"/signup"} className=" font-bold underline"> Sign up</Link>
                    </p>
                    <button className=" flex items-center mx-auto gap-4 bg-white border-[1px] border-tcolor rounded-[40px] px-20 py-3 my-10">
                        <Image
                            src={"/images/google.png"}
                            width={24}
                            height={24}
                            quality={100}
                            priority={true}
                            alt="Google icon"
                        />
                        Log in with Google
                    </button>
                </div>
                    <p className=" text-tcolor mb-4 flex items-center gap-5">
                        <span className=" content-[''] flex-[1_1_auto] border-t-[1px] border-tcolor/30"></span>
                            OR
                        <span className=" content-[''] flex-[1_1_auto] border-t-[1px] border-tcolor/30"></span>
                    </p>

                <form className=" flex flex-col gap-4">
                    <label htmlFor="email">Your email</label>
                    <input type="email" name="email" className="px-4 py-3 rounded-[12px] border-[1px] border-tcolor" required/>
                    <label htmlFor="pass" className=" flex items-center justify-between pr-2">Your password
                        <div className=" flex items-center gap-1 text-sm cursor-pointer select-none" onClick={() => setShowPass(!showPass)}>
                            {showPass ? <BiSolidShow size={22}/> : <BiSolidHide size={22}/>}
                            {showPass ? "Hide" : "Show"}
                        </div>
                    </label>
                    <input type={showPass ? 'text' : 'password'} name="pass" className="px-4 py-3 rounded-[12px] border-[1px] border-tcolor" required/>
                    <button className=" text-xl rounded-[40px] bg-tcolor text-white py-4 mt-4">Log in</button>
                </form>
            </div>
        </div>
     );
}
 
export default LogIn;