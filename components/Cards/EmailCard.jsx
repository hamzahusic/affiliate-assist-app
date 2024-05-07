const EmailCard = () => {
    return ( 
        <div className="rounded-[15px] shadow w-full max-w-[250px] md:max-w-[280px] flex flex-col gap-3 px-4 py-4">
            <div>
                <p className=" text-[16px] mb-1 font-semibold">Subject</p>
                <p className=" text-[14px]">user@gmail.com</p>
            </div>
            <p className=" text-[14px]">Please add your content here. Keep it short and simple. And smile :) </p>
            <div className=" text-xs flex gap-2">
                <button className=" py-3 px-5 bg-white border-[1px] border-tcolor rounded-[100px]">Edit</button>
                <button className="py-3 px-4 bg-tcolor border-[1px] border-tcolor rounded-[100px] text-white">Delete</button>
            </div>
        </div>
     );
}
 
export default EmailCard;