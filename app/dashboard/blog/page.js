"use client"
import BlogCard from "@/components/Cards/BlogCard";
import CreateCard from "@/components/CreateCard";
import PageNav from "@/components/PageNav";

const page = () => {
    return ( 
        <>
            <PageNav placeholder={"Search blogs..."} pageName={"Blogs"}/>
            <div className="bg-white rounded-[15px] px-4 py-9">
                <h2 className=" text-lg mb-4">Blogs that you created</h2>
                <div 
                className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-[214px] gap-[27px] max-h-[650px] h-full overflow-y-auto"
                >
                    <CreateCard text={"Create Blog"} createAction={() => console.log("Blog added!")}/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </div>
            </div>
        </>
     );
}
 
export default page;