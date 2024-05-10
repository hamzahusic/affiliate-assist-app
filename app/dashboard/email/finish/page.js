import GoBackBtn from "@/components/GoBack";
import PageNav from "@/components/PageNav";
import RegenerateBtn from "@/components/RegenerateBtn";
import SelectProduct from "@/components/SelectProduct";

const page = () => {
    return ( 
        <>
            <PageNav placeholder={"Search emails..."} pageName={"Emails"}/>
            <div className=" bg-white rounded-[15px] shadow-sm py-8 px-6">
                <div className=" flex justify-between items-center mb-4">
                    <GoBackBtn href={'/dashboard/email'}/>
                    <button className=" bg-[#48BB78] rounded-[15px] text-white px-8 py-2 text-[15px]">Finish</button>
                </div>
                <div className="max-w-[560px] mx-auto px-2 max-h-[650px] h-full overflow-y-auto no-scrollbar">
                    <div className="flex items-center justify-between gap-2">
                        <h2 className=" text-lg mb-4 font-semibold">Email details</h2>
                        <RegenerateBtn/>
                    </div>
                    <div className=" flex justify-between gap-4 flex-col md:flex-row">
                        <div className=" flex flex-col gap-[5px] flex-grow">
                            <label htmlFor="subject" className=" text-[15px] font-semibold">Subject</label>
                            <input type="text" name="subject" className=" outline-none rounded-[5px] px-2 py-1 border-[1px] border-tcolor/20"/>
                        </div>
                        <div className=" flex flex-col gap-[5px] flex-grow">
                            <label htmlFor="customer_email" className=" text-[15px] font-semibold">Customer email</label>
                            <input type="email" name="customer_email" className=" outline-none rounded-[5px] px-2 py-1 border-[1px] border-tcolor/20"/>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-[5px] flex-grow mt-[10px]">
                        <label htmlFor="content" className=" text-[15px] font-semibold">Content</label>
                        <textarea name="content" rows={5} className=" outline-none rounded-[5px] px-2 py-1 border-[1px] border-tcolor/20"/>
                    </div>
                    <p className=" text-[15px] my-[10px] font-semibold">Selected products</p>
                    <div className="flex flex-col gap-[5px]">
                        <SelectProduct/>
                        <SelectProduct/>
                        <SelectProduct/>
                        <SelectProduct/>
                        <SelectProduct/>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default page;