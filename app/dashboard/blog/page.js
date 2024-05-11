"use client"
import BlogCard from "@/components/Cards/BlogCard";
import CreateCard from "@/components/CreateCard";
import CreateModal from "@/components/Modal/CreateModal";
import PageNav from "@/components/PageNav";
import handleModal from "@/utils/handleModal";
import { useState } from "react";

const page = () => {

    const [isModalOpen,setModal] = useState(false);

    return ( 
        <>
            <PageNav placeholder={"Search blogs..."} pageName={"Blogs"}/>
            <div className="bg-white rounded-[15px] px-4 py-9">
                <h2 className=" text-lg mb-4 font-medium">Blogs that you created</h2>
                <div 
                className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-[214px] gap-[27px] max-h-[650px] h-full overflow-y-auto "
                >
                    <div className="max-w-[230px] md:max-w-[189px] w-full h-full">
                        <CreateCard text={"Create Blog"} createAction={() => handleModal(isModalOpen,setModal)}/>
                    </div>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </div>
                <CreateModal isOpen={isModalOpen} hideModal={() => handleModal(isModalOpen,setModal)}/>
            </div>
        </>
     );
}
 
export default page;