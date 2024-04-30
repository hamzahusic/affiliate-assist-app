"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false);

    return ( 
        <div className="main-container flex justify-between items-center p-5">
            <div className="flex gap-1 items-center">
                <Image
                    src={'/images/logo.png'}
                    width={21}
                    height={26}
                />
                <p className=" font-bold text-xl ">Affiliate Assist</p>
            </div>
            <div className=" hidden md:flex items-center gap-7 font-semibold">
                <Link href={"/"}>About Us</Link>
                <Link href={"/"}>View Demo</Link>
                <Link href={"/"}>Pricing</Link>
            </div>
            <div className="hidden md:flex items-center gap-5 font-semibold">
                <Link href={"/"}>Log In</Link>
                <Link href={"/"} className="bg-tcolor text-white py-3 px-11 rounded-md">Sign Up</Link>
            </div>
            <IoMenu size={30} className=" cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}/>
            {isOpen && <div className=" absolute top-0 left-0 bottom-0 bg-tcolor text-white flex flex-col px-2 py-10 gap-2 text-center openNav w-[300px]">
                <Link href={"/"} className=" px-20 py-3 transition-all rounded-md">About Us</Link>
                <Link href={"/"} className=" px-20 py-3 transition-all rounded-md">View Demo</Link>
                <Link href={"/"} className=" px-20 py-3 transition-all rounded-md">Pricing</Link>
                <Link href={"/"} className=" px-20 py-3 transition-all rounded-md">Log In</Link>
                <Link href={"/"} className=" px-20 py-3 bg-white transition-all text-tcolor rounded-md">Sign Up</Link>
            </div>}
        </div>
     );
}
 
export default Navbar;