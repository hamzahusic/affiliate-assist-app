import GoBackBtn from "@/components/GoBack";
import PageNav from "@/components/PageNav";
import { HiSparkles  } from "react-icons/hi2";
import { MdCancel } from "react-icons/md";

const page = () => {
    return ( 
        <>
            <PageNav placeholder={"Search products..."} pageName={"Products"}/>
            <div className="bg-white rounded-[15px] shadow-sm py-8 px-6">
                <div className=" flex justify-between items-center mb-4">
                    <GoBackBtn href={'/dashboard/product/add'}/>
                    <button className=" bg-[#48BB78] rounded-[15px] text-white px-8 py-2 text-[15px]">Finish</button>
                </div>
                <div className=" flex flex-col md:flex-row py-7 gap-10 max-h-[650px] h-full overflow-y-auto no-scrollbar">
                    <div>
                        <h2 className=" font-medium text-[20px] text-center">Product image</h2>
                        <div className=" min-h-full grid place-items-center">
                            <img
                                src="https://novabytes.co.uk/cdn/shop/files/notebook-xps-17-9730-t-gray-gallery-12_7cb96987-2f20-48f2-ad1d-189ffd3edea6_1280x.png"
                                width={390}
                                height={360}
                                className=" object-cover"
                            />
                        </div>
                    </div>
                    <div className=" flex-grow pr-2">
                        <p className=" font-medium text-base">Product information</p>
                        <div className=" flex flex-col w-full mt-4">
                            <p className=" text-[15px] font-medium">Title</p>
                            <input type="text" className=" rounded-[5px] border-[1px] border-tcolor/20 px-3 py-1 outline-none w-full mt-[5px]"/>
                            
                            <div className="flex gap-4 mt-3">
                                <div>
                                    <p className=" text-[15px] font-medium">Price</p>
                                    <input type="text" className=" rounded-[5px] border-[1px] border-tcolor/20 px-3 py-1 outline-none w-full mt-[5px]"/>
                                </div>
                                <div>
                                    <p className=" text-[15px] font-medium">Affiliate url</p>
                                    <input type="text" className=" rounded-[5px] border-[1px] border-tcolor/20 px-3 py-1 outline-none w-full mt-[5px]"/>
                                </div>
                            </div>
                            
                            <div className=" mt-4">
                                <div className=" flex items-center justify-between">
                                    <p className=" text-[15px] font-medium">Description</p>
                                    <button className=" text-[10px] flex items-center gap-2 bg-dcolor rounded-[15px] px-[14px] py-2">
                                        Regenerate
                                        <HiSparkles  size={15} />
                                    </button>
                                </div>
                                <textarea rows={5} className="rounded-[5px] border-[1px] border-tcolor/20 px-3 py-1 outline-none w-full mt-[5px]"/>
                            </div>
                            <p className=" font-medium text-base mt-6">Additional information</p>
                            <div className=" pt-2 grid grid-cols-1 xl:grid-cols-2 gap-y-[14px] gap-x-[11px]">
                                {/* Additional information button */}
                                <div className=" flex items-center gap-[6px]">
                                    <p className=" text-xs font-semibold">1.</p>
                                    <div className=" flex items-center border-[1px] text-sm p-2 rounded-[5px] gap-1 justify-between w-full">
                                        <input type="text" value={"Data 123"}  className=" outline-none" readOnly/>
                                        <MdCancel size={12} className=" text-red-600" />
                                    </div>
                                </div>

                                <div className=" flex items-center gap-[6px]">
                                    <p className=" text-xs font-semibold">2.</p>
                                    <div className=" flex items-center border-[1px] text-sm p-2 rounded-[5px] gap-1 justify-between w-full">
                                        <input type="text" value={"Data 123"}  className=" outline-none" readOnly/>
                                        <MdCancel size={12} className=" text-red-600" />
                                    </div>
                                </div>

                                <div className=" flex items-center gap-[6px]">
                                    <p className=" text-xs font-semibold">3.</p>
                                    <div className=" flex items-center border-[1px] text-sm p-2 rounded-[5px] gap-1 justify-between w-full">
                                        <input type="text" value={"Data 123"}  className=" outline-none" readOnly/>
                                        <MdCancel size={12} className=" text-red-600" />
                                    </div>
                                </div>             

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default page;