import GoBackBtn from "@/components/GoBack";
import PageNav from "@/components/PageNav";
import SelectProduct from "@/components/SelectProduct";
import Image from "next/image";

const page = () => {
    return ( 
        <>
            <PageNav placeholder={"Search blogs..."} pageName={"Blogs"}/>
            <div className=" bg-white rounded-[15px] shadow-sm py-8 px-6">
                <div className=" flex justify-between items-center mb-4">
                    <GoBackBtn href={'/dashboard/product/add'}/>
                    <button className=" bg-[#48BB78] rounded-[15px] text-white px-8 py-2 text-[15px]">Finish</button>
                </div>
                <h2 className=" text-[20px] font-medium mb-4">Blog preview</h2>
                <div className="flex gap-10 flex-col lg:flex-row items-center">
                    <Image
                        src={'/images/tempImg.png'}
                        width={441}
                        height={486}
                        className="w-[341px] h-[386px] xl:w-[441px] xl:h-[486px] object-cover"
                        alt="Blog template"
                    />
                    <div className=" flex-grow flex flex-col gap-1">
                        <p className=" font-semibold text-base">Selected products</p>
                        <div className=" flex flex-col gap-[5px] py-2 ">
                            <SelectProduct/>
                            <SelectProduct/>
                            <SelectProduct/>
                            <SelectProduct/>
                        </div>
                        <div>
                            <p className=" font-semibold text-base">Themes</p>
                            <div className=" py-2 flex gap-[15px]">
                                <div className="w-[77px] h-[73px] rounded-[15px] bg-tcolor block"></div>
                                <div className="w-[77px] h-[73px] rounded-[15px] bg-tcolor/20 block"></div>
                                <div className="w-[77px] h-[73px] rounded-[15px] bg-tcolor/20 block"></div>
                            </div>
                        </div>
                        <div>
                            <p className=" font-semibold text-base">Export code</p>
                            <div className=" pt-4 flex gap-[15px]">
                                <button className="rounded-[100px] border-tcolor border-[1px] py-2 px-7 text-[12px]">HTML/CSS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default page;