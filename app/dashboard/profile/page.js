import Image from "next/image";

const page = () => {
    return ( 
        <>
            <div className="bg-dcolor max-h-[220px] h-full shadow-xs rounded-[15px]"></div>
            <div>
                <Image
                    width={100}
                    height={100}
                    src={'/images/footer.png'}
                    alt="Profile image"
                    className=" rounded-full overflow-hidden object-cover h-[80px] w-[80px] md:h-[100px] md:w-[100px] border-[2px] border-dashed border-tcolor mx-auto relative bottom-[50px]"
                />

                <form className=" flex flex-col max-w-[487px] mx-auto gap-4 px-5 md:px-0">
                    <div className=" flex gap-[21px] flex-col md:flex-row">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className=" font-medium">First name</label>
                            <input type="text" name="name" className=" outline-none p-1 rounded-[5px] border-[1px] border-tcolor"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="lname" className=" font-medium">Last name</label>
                            <input type="text" name="lname" className=" outline-none p-1 rounded-[5px] border-[1px] border-tcolor"/>
                        </div>
                    </div>
                    <label htmlFor="email" className=" font-medium">Email</label>
                    <input type="email" name="email" className=" outline-none p-1 rounded-[5px] border-[1px] border-tcolor"/>
                    <label htmlFor="phone" className=" font-medium">Phone number</label>
                    <input type="text" name="phone" className=" outline-none p-1 rounded-[5px] border-[1px] border-tcolor"/>
                    <button className="bg-[#48BB78] text-white rounded-[15px] py-3 block mt-[44px]">Save</button>
                </form>

            </div>
        </>
     );
}
 
export default page;