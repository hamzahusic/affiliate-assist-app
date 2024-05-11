"use client"

import { IoClose, IoSearch } from "react-icons/io5";
import SelectProduct from "../SelectProduct";

const CreateModal = ({isOpen,hideModal}) => {
    return ( 
        isOpen ? <div className="bg-black/30 grid place-items-center absolute top-0 right-0 bottom-0 left-0 px-3 md:px-0">
                    <div className=" bg-white px-[33px] py-[25px] rounded-[15px] max-w-[877px] w-full">
                        <div className=" flex items-center justify-between mb-4">
                            <p className=" text-[19px] font-semibold">Select products</p>
                            <IoClose size={20} className=" cursor-pointer" onClick={() => hideModal()}/>
                        </div>

                        <div className=" flex items-start flex-col md:flex-row gap-[30px] md:gap-[50px]">
                            <div className=" w-full">
                                <div className=" bg-white rounded-[15px] px-2 py-2 flex items-center gap-3 border-[1px] border-[#E2E8F0] text-xs ">
                                    <IoSearch size={15} className=" cursor-pointer"/>
                                    <input type="text" placeholder="Search products" className=" outline-none w-full"/>
                                </div>
                                <div className=" mt-[35px] flex flex-col gap-[8px] max-h-[320px] h-full overflow-y-auto px-2">
                                    <SelectProduct disableRemove={true}/>
                                    <SelectProduct disableRemove={true}/>
                                    <SelectProduct disableRemove={true}/>
                                    <SelectProduct disableRemove={true}/>
                                    <SelectProduct disableRemove={true}/>
                                    <SelectProduct disableRemove={true}/>
                                    <SelectProduct disableRemove={true}/>
                                    <SelectProduct disableRemove={true}/>
                                </div>
                            </div>
                            <div className=" w-full">
                                <p className=" text-[17px] font-semibold mb-[15px]">Selected products</p>
                                <div className=" flex flex-col gap-[8px] max-h-[320px] h-full overflow-y-auto px-2">
                                    <SelectProduct/>
                                    <SelectProduct/>
                                    <SelectProduct/>
                                </div>
                            </div>
                        </div>
                       
                        <button className=" bg-[#48BB78] rounded-[15px] text-white px-14 py-2 text-[15px] mt-5 w-full">Next</button>
                    </div>
                </div>
            : 
            <></>
     );
}
 
export default CreateModal;