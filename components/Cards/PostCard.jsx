import { MdDeleteForever } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";

const PostCard = () => {
    return ( 
        <div className=" rounded-[15px] shadow relative overflow-hidden w-full h-full max-w-[230px] md:max-w-[189px]">
            <Image
                src={"/images/footer.png"}
                className="w-full h-[214px] object-cover"
                width={189}
                height={214}
                alt="Social post image"
            />
            <div className=" flex items-center justify-center gap-[8px] absolute bottom-[10px] left-[5px] right-[5px] ">
                <button className=" bg-white/80 px-[38px] py-[5px] text-[12px] font-semibold rounded-[5px] text-tcolor">Edit</button>
                <MdDeleteForever size={28} className=" bg-dcolor p-[5px] rounded-[5px] cursor-pointer"/>
                <FiDownload size={28} className=" bg-dcolor p-[5px] rounded-[5px] cursor-pointer"/>
            </div>
        </div>
     );
}
 
export default PostCard;