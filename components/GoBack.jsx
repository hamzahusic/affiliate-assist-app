import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const GoBackBtn = ({href}) => {
    return ( 
        <Link href={href} className=" gap-3 text-lg font-medium flex items-center">
                    <FaArrowLeftLong size={20}/>
                    Go back
        </Link>
     );
}
 
export default GoBackBtn;