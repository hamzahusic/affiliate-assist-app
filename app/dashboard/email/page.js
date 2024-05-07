"use client"
import EmailCard from "@/components/Cards/EmailCard";
import CreateCard from "@/components/CreateCard";
import PageNav from "@/components/PageNav";

const page = () => {
    return ( 
        <>
            <PageNav placeholder={"Search emails..."} pageName={"Emails"}/>
            <div className="bg-white rounded-[15px] px-4 py-9">
                <h2 className=" text-lg mb-4">Emails that you created</h2>
                <div 
                className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-[190px] gap-[27px] max-h-[650px] h-full overflow-y-auto"
                >
                    <div className="max-w-[250px] md:max-w-[280px] w-full h-full">
                        <CreateCard text={"Create Email"} createAction={() => console.log("Email added!")}/>
                    </div>
                    <EmailCard/>
                    <EmailCard/>
                    <EmailCard/>
                    <EmailCard/>
                    <EmailCard/>
                    <EmailCard/>
                </div>
            </div>
        </>
     );
}
 
export default page;