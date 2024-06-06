import DashboardCard from "@/components/Cards/DashboardCard";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoFileTrayStacked, IoDocumentText } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsFillPostcardHeartFill } from "react-icons/bs";

const page = () => {
    const data = [
        { id: 1, name: 'Blog name : Lorem ipsum.', category: 'Blog', createdAt: '14/06/21' },
        { id: 2, name: 'Blog name : Lorem ipsum.', category: 'Blog', createdAt: '14/06/21' },
        { id: 3, name: 'Blog name : Lorem ipsum.', category: 'Blog', createdAt: '14/06/21' },
        { id: 4, name: 'Blog name : Lorem ipsum.', category: 'Blog', createdAt: '14/06/21' },
        { id: 5, name: 'Blog name : Lorem ipsum.', category: 'Blog', createdAt: '14/06/21' },
        { id: 6, name: 'Blog name : Lorem ipsum.', category: 'Blog', createdAt: '14/06/21' },
        { id: 12, name: 'Blog name : Lorem ipsum.', category: 'Blog', createdAt: '14/06/21' },
        { id: 13, name: 'Blog name : Lorem ipsum.', category: 'Blog', createdAt: '14/06/21' },
        { id: 14, name: 'Blog name : Lorem ipsum.', category: 'Blog', createdAt: '14/06/21' },
        { id: 16, name: 'Blog name : Lorem ipsum.', category: 'Blog', createdAt: '14/06/21' },
        { id: 15, name: 'Blog name : Lorem ipsum.', category: 'Blog', createdAt: '14/06/21' },
        { id: 11, name: 'Blog name : Lorem ipsum.', category: 'Blog', createdAt: '14/06/21' },
        
      ];
    return (
        <>
            <h1 className=" text-[20px] md:text-[22px] font-semibold mt-[10px] md:mt-[14px]">Dashboard</h1>
            <div className=" flex gap-4 md:gap-[27px] mt-4 md:mt-[30px] mb-7 md:mb-[40px] flex-wrap">
                <DashboardCard 
                    icon={<AiFillDollarCircle size={20}/>}
                    value={"$452,234"}
                    description={"Total products value"}
                />
                <DashboardCard 
                    icon={<IoFileTrayStacked size={20}/>}
                    value={"9,345"}
                    description={"Added products"}
                />
                <DashboardCard 
                    icon={<IoDocumentText size={20}/>}
                    value={"12,132"}
                    description={"Created blogs"}
                />
                <DashboardCard 
                    icon={<BsFillPostcardHeartFill size={20}/>}
                    value={"10,000"}
                    description={"Created social posts"}
                />
                <DashboardCard 
                    icon={<MdEmail size={20}/>}
                    value={"4,500"}
                    description={"Created emails"}
                />
            </div>
            <div className=" flex flex-col gap-[12px]">
                <p className=" text-[17px] font-medium">Recently created</p>   
                <div className=" bg-[#323232] text-white rounded-[15px] p-2 flex items-center gap-3 text-xs max-w-[240px]">
                    <IoSearch size={15} className=" cursor-pointer "/>
                    <input type="text" placeholder="Search creations" className=" outline-none max-w-full bg-transparent flex-grow"/>
                </div>
                <div className="mt-1">
                    <div className="border-[1px] border-tcolor rounded-[15px] overflow-hidden bg-white pl-4 pr-2 pt-2 max-w-[900px]">
                        <table className="min-w-full leading-normal max-w-[630px]">
                            <thead>
                                <tr>
                                    <th className="py-3 border-b-[1px] text-left text-[11px] font-medium uppercase tracking-wider md:w-[45%] w-[55%]">
                                        NAME
                                    </th>
                                    <th className="py-3 border-b-[1px] text-left text-[11px] font-medium uppercase tracking-wider w-[25%]">
                                        CATEGORY
                                    </th>
                                    <th className="py-3 border-b-[1px] text-left text-[11px] font-medium uppercase tracking-wider hidden md:table-cell w-[25%]">
                                        CREATED AT
                                    </th>
                                    <th className="py-3 border-b-[1px] text-left text-[11px] font-medium uppercase tracking-wider"></th>
                                </tr>
                            </thead>
                        </table>
                        <div className=" max-h-[350px] md:max-h-[450px] overflow-y-auto ">
                            <table className="min-w-full leading-normal">
                                <tbody className=" text-xs md:text-sm">
                                    {data.map((item, index) => (
                                        <tr key={item.id}>
                                            <td className="border-b-[1px] py-3 w-[45%] md:w-[50%]">
                                                {(index + 1) + ". " + item.name}
                                            </td>
                                            <td className="border-b-[1px] py-3 w-[25%]">
                                                {item.category}
                                            </td>
                                            <td className="border-b-[1px] py-3 hidden md:table-cell w-[25%]">
                                                {item.createdAt}
                                            </td>
                                            <td className="border-b-[1px] py-3 md:pr-3 font-semibold w-[12%] md:w-[25%]">
                                                <Link href={'/'}>Edit</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>       
                </div>
            </div>
        </>
    );
}
 
export default page;