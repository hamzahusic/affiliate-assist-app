"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { BsFillPostcardHeartFill } from "react-icons/bs";
import { AiFillProduct, AiOutlineQuestionCircle } from "react-icons/ai";
import { IoDocumentText, IoLogOut } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { usePathname } from "next/navigation";

const Layout = ({children}) => {

    let nav_links = [
        {
            name : 'Dashboard',
            href : '/dashboard',
            icon : <FaHome size={35} className=" text-tcolor bg-dcolor p-[8px] rounded-[12px]"/>
        },
        {
            name : 'Products',
            href : '/dashboard/product',
            icon : <AiFillProduct size={35} className=" text-tcolor bg-dcolor p-[8px] rounded-[12px]"/>
        },
        {
            name : 'Blogs',
            href : '/dashboard/blog',
            icon : <IoDocumentText size={35} className=" text-tcolor bg-dcolor p-[8px] rounded-[12px]"/>
        },
        {
            name : 'Social posts',
            href : '/dashboard/post',
            icon : <BsFillPostcardHeartFill size={35} className=" text-tcolor bg-dcolor p-[8px] rounded-[12px]"/>
        },
        {
            name : 'Emails',
            href : '/dashboard/email',
            icon : <MdEmail size={35} className=" text-tcolor bg-dcolor p-[8px] rounded-[12px]"/>
        }
    ]
    
    const pathName = usePathname();

    const [isActive,setIsActive] = useState('/dashboard');

    const updateActivePath = () => {
        
        let fixedPath = '';
        
        if(pathName.length > 10){
            {/*Gets / after dashboard path ex. /dashboard/product/ */}
            let indexOfNextSlash = pathName.indexOf('/',11)
            let mainPath = pathName.substring(0, indexOfNextSlash == -1 ? pathName.length : indexOfNextSlash)
            fixedPath = mainPath
        }
        else{
            fixedPath = pathName;
        }

        setIsActive(fixedPath)

    }

   
    useEffect(() => {
        updateActivePath();
    },[pathName])


    return ( 
        <div className=" flex main-container">
            {/* DASHBOARD NAVBAR */}
            <div className=" px-2 sm:px-4 max-w-[85px] sm:max-w-[100px] lg:min-w-[230px]">
                {/* LOGO */}
                <div className=" flex items-center justify-center gap-[5px] pt-9 pb-7 border-b-[1px] border-tcolor/20">
                    <Image
                        src={'/images/logo.png'}
                        width={16}
                        height={19}
                        quality={100}
                        alt="logo"
                    />
                    <p className=" text-[15px] font-medium hidden lg:block">AFFILIATE ASSIST</p>
                </div>
                {/* NAV LINKS */}
                <div className="py-4 flex flex-col">
                    {nav_links.map((link) => (
                        <Link href={link.href} 
                            key={link.name} 
                            className={` flex items-center gap-3 px-4 py-3 ${isActive === link.href ? 'bg-white shadow-sm' : 'bg-transparent'} rounded-[15px]`}
                            >
                            {link.icon}
                            <span className=" text-[12px] font-medium hidden lg:block">{link.name}</span>
                        </Link>
                    ))}
                </div>
                {/* ACC LINKS */}
                <div>
                    <p className=" font-semibold py-4 lg:py-6 text-sm text-center lg:text-left">ACCOUNT PAGES</p>
                    <Link href={'/dashboard/profile'} 
                        className={` flex items-center gap-3 px-4 py-3 ${isActive === '/dashboard/profile' ? 'bg-white' : 'bg-transparent'} rounded-[15px]`}
                        >
                        <FaUser size={35} className=" text-tcolor bg-dcolor p-[8px] rounded-[12px]"/>
                        <span className=" text-[12px] font-medium hidden lg:block">Profile</span>
                    </Link>
                    <Link href={'/'} 
                        className={`flex items-center gap-3 px-4 py-3 rounded-[15px]`}
                    >
                        <IoLogOut size={35} className=" text-tcolor bg-dcolor p-[8px] rounded-[12px]"/>
                        <span className=" text-[12px] font-medium hidden lg:block">Log out</span>
                    </Link>
                </div>
                {/* HELP LINK */}
                <div className=" p-[10px] lg:p-4 bg-dcolor rounded-[15px] flex-col flex mt-10 text-center lg:text-left">
                    <AiOutlineQuestionCircle size={35} className=" text-tcolor bg-white p-2 mb-3 lg:mb-5 rounded-xl "/>
                    <p className=" text-sm font-medium">Need help?</p>
                    <p className=" text-xs hidden lg:block">Please check our demo</p>
                    <Link 
                        href={'/'}
                        className=" py-3 rounded-xl text-center bg-white text-tcolor font-semibold text-[10px] mt-2"
                    >
                        VIEW DEMO
                    </Link>
                </div>
            </div>
            <div className=" px-2 sm:px-5 md:px-10 pt-5 flex-grow">
                {children} 
            </div>
        </div>
     );
}
 
export default Layout;