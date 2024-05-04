"use client"

import GoBackBtn from "@/components/GoBack";
import PageNav from "@/components/PageNav";
import { useRouter } from "next/navigation";

const page = () => {

    const router = useRouter();

    const getProductInformation = () => {
        router.push('/dashboard/product/finish');
    }

    return ( 
        <>
            <PageNav placeholder={"Search products..."} pageName={"Products"}/>
            <div className=" bg-white rounded-[15px] shadow-sm py-8 px-6">
                <GoBackBtn href={'/dashboard/product'}/>
                <div className=" text-center flex flex-col items-center mt-[170px] mb-[260px]">
                    <h2 className=" text-[20px] font-semibold">Enter the url of a product</h2>
                    <p className=" text-[12px] ">(only one product)</p>
                    <input type="text" placeholder="https://shorturl.at/zGK57" className=" font-light outline-none px-3 py-2 rounded-[5px] border-[1px] border-tcolor/20 w-full max-w-[630px] mt-3 mb-7"/>
                    <button className=" bg-[#48BB78] rounded-[15px] text-white px-12 py-2 text-[15px]" onClick={getProductInformation}>Next</button>
                </div>
            </div>
        </>
     );
}
 
export default page;