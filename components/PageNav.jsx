import { IoSearch } from "react-icons/io5";

const PageNav = ({placeholder,pageName}) => {
    return ( 
        <div className=" flex items-start justify-between w-full">
            <div className=" flex flex-col gap-[5px] text-xs mb-8">
                <p className=" text-[#A0AEC0]">Pages / <span className=" text-tcolor font-medium">{pageName}</span></p>
                <p className=" text-sm font-medium">{pageName}</p>
            </div>
            <div className=" bg-white rounded-[15px] p-2 md:p-3 flex items-center gap-3 border-[1px] border-[#E2E8F0] text-xs">
                <IoSearch size={15} className=" cursor-pointer"/>
                <input type="text" placeholder={placeholder} className=" outline-none max-w-[120px] sm:max-w-full"/>
            </div>
        </div>
     );
}
 
export default PageNav;