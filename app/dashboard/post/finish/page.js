import GoBackBtn from "@/components/GoBack";
import PageNav from "@/components/PageNav";
import RegenerateBtn from "@/components/RegenerateBtn";
import Image from "next/image";
import { FiDownloadCloud } from "react-icons/fi";

const page = () => {
    return ( 
        <>
            <PageNav placeholder={"Search blogs..."} pageName={"Blogs"}/>
            <div className=" bg-white rounded-[15px] shadow-sm py-8 px-6">
                <div className=" flex justify-between items-center mb-4">
                    <GoBackBtn href={'/dashboard/post'}/>
                    <button className=" bg-[#48BB78] rounded-[15px] text-white px-8 py-2 text-[15px]">Finish</button>
                </div>
                <h2 className=" text-[20px] font-medium mb-4">Post preview</h2>
                <div className="flex gap-10 flex-col lg:flex-row items-center">
                    <div className=" md:mx-16">
                        <Image
                            src={'/images/tempPostImg.png'}
                            width={291}
                            height={403}
                            className="w-[291px] h-[403px] object-cover mx-auto"
                            alt="Social post template"
                        />
                    </div>
                    <div className=" flex-grow flex flex-col gap-1 text-sm">
                        <div className="flex items-center justify-between gap-2">
                            <p className=" font-semibold text-base">Product information</p>
                            <RegenerateBtn/>
                        </div>
                        <div className=" flex flex-col gap-[5px] py-2 ">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" className=" rounded-[5px] outline-none p-2 border-tcolor/20 border-[1px]"/>
                            <label htmlFor="description">Description</label>
                            <textarea rows={3} name="description" className=" rounded-[5px] outline-none p-2 border-tcolor/20 border-[1px]"></textarea>
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
                            <p className=" font-semibold text-base">Download image</p>
                            <div className=" pt-4 flex gap-[15px]">
                                <button className="rounded-[100px] border-tcolor border-[1px] py-2 pr-5 pl-7 text-[12px] flex items-center gap-[11px]">
                                    Download
                                    <FiDownloadCloud size={13}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default page;