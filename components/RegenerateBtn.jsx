import { HiSparkles } from "react-icons/hi2";

const RegenerateBtn = () => {
    return ( 
        <button className=" text-[10px] flex items-center gap-2 bg-dcolor rounded-[15px] px-[14px] h-[31px]">
            Regenerate
            <HiSparkles  size={15} />
        </button> 
    );
}
 
export default RegenerateBtn;