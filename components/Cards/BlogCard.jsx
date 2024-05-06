import Image from "next/image";

const BlogCard = () => {
    return ( 
        <div className=" rounded-[15px] shadow w-full max-w-[230px] md:max-w-[189px]">
            <div className="p-[8px]">
                <p className=" text-[15px] font-medium mb-1">Headline</p>
                <p className=" text-[11px]">Please add your content here. Keep it short and..</p>
            </div>
            <Image
                src={'/images/footer.png'}
                width={189}
                height={88}
                alt="Preview of blog"
                className=" h-[88px] w-full  object-cover"
            />
            <div className=" flex gap-3 justify-center items-center py-[7px]">
                <button className=" text-[11px] font-semibold rounded-[11px] text-white bg-tcolor py-[10px] px-[23px]">Edit</button>
                <button className=" text-[11px] font-semibold rounded-[11px] text-tcolor bg-white py-[9px] px-[15px] border-[1px] border-tcolor">Delete</button>
            </div>
        </div>
     );
}
 
export default BlogCard;