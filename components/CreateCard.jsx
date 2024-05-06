"use client"
import { IoIosAddCircle } from "react-icons/io";

const CreateCard = ({text,createAction}) => {
    return ( 
        <div className=" bg-dcolor rounded-[15px] grid place-items-center cursor-pointer w-full h-full" onClick={createAction}>
            <div>
                <IoIosAddCircle size={45} className=" text-tcolor mx-auto mb-[10px]"/>
                <p className=" text-[16px]">{text}</p>
            </div>
        </div>
     );
}
 
export default CreateCard;