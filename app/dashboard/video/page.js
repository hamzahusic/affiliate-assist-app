"use client"
import PageNav from "@/components/PageNav";
import { IoIosTimer } from "react-icons/io";

const page = () => {
    return ( 
        <>
            <PageNav placeholder={"Search videos..."} pageName={"Videos"}/>
            <div className="bg-white rounded-[15px] px-4 py-9">
                <h2 className=" text-lg mb-4">Videos that you created</h2>
                <div 
                className="grid place-items-center h-[350px]"
                >
                    <div>
                        <IoIosTimer size={55} className=" mx-auto"/>
                        <p class="mt-2 font-semibold text-lg tracking-wider">
                            Coming soon...
                        </p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default page;
