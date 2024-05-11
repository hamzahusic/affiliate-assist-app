"use client"
import EmailCard from "@/components/Cards/EmailCard";
import CreateCard from "@/components/CreateCard";
import CreateModal from "@/components/Modal/CreateModal";
import PageNav from "@/components/PageNav";
import handleModal from "@/utils/handleModal";
import { useState } from "react";

const page = () => {

    const [isModalOpen,setModal] = useState(false);

    return ( 
        <>
            <PageNav placeholder={"Search emails..."} pageName={"Emails"}/>
            <div className="bg-white rounded-[15px] px-4 py-9">
                <h2 className=" text-lg mb-4 font-medium">Emails that you created</h2>
                <div 
                className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-[190px] gap-[27px] max-h-[650px] h-full overflow-y-auto"
                >
                    <div className="max-w-[250px] md:max-w-[280px] w-full h-full">
                        <CreateCard text={"Create Email"} createAction={() => handleModal(isModalOpen,setModal)}/>
                    </div>
                    <EmailCard/>
                    <EmailCard/>
                    <EmailCard/>
                    <EmailCard/>
                    <EmailCard/>
                    <EmailCard/>
                </div>
                <CreateModal isOpen={isModalOpen} hideModal={() => handleModal(isModalOpen,setModal)}/>
            </div>
        </>
     );
}
 
export default page;