"use client"
import PostCard from "@/components/Cards/PostCard";
import CreateCard from "@/components/CreateCard";
import PageNav from "@/components/PageNav";

const page = () => {
    return ( 
        <>
            <PageNav placeholder={"Search posts..."} pageName={"Social Posts"}/>
            <div className="bg-white rounded-[15px] px-4 py-9">
                <h2 className=" text-lg mb-4">Social posts that you created</h2>
                <div 
                className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-[214px] gap-[27px] max-h-[650px] h-full overflow-y-auto"
                >
                    <div className="max-w-[230px] md:max-w-[189px] w-full h-full">
                        <CreateCard text={"Create Post"} createAction={() => console.log("Social post added!")}/>
                    </div>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                </div>
            </div>
        </>
     );
}
 
export default page;