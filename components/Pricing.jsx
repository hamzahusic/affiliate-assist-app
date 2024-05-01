import Image from "next/image";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";

const Pricing = () => {
    return ( 
        <div className=" main-container pb-32 pt-16 px-5">
            <p className=" uppercase font-bold text-lg tracking-[5px] text-center">pricing</p>
            <h2 className=" text-[40px] font-bold mt-7 mb-2 text-center">Pricing plans for all use cases</h2>
            <p className="text-lg max-w-[742px] mx-auto text-center">Pricing plans designed to fit every affiliate marketer's needs. Our transparent pricing ensures you get the features you need without hidden costs or surprises.</p>
            <div className=" mt-12 max-w-[786px] mx-auto bg-white rounded-[20px] shadow flex flex-col sm:flex-row overflow-hidden">
                <div className=" max-w-[323px] mx-7 md:mx-12 flex flex-col items-start py-16 w-full">
                    <div className=" flex items-center gap-2">
                        <Image 
                        src={'/images/pricing.png'}
                        width={72}
                        height={72}
                        quality={100}
                        alt="Icon for pricing"
                        />

                        <div>
                            <p className=" text-lg font-medium">For everyone</p>
                            <p className=" font-bold text-2xl">All in one</p>
                        </div>
                    </div>

                    <p className=" text-lg leading-[30px] pt-4 pb-3 text-[#6F6C90]">
                        Affordable plans tailored for your affiliate marketing success journey.
                    </p>

                    <p className="text-[#6F6C90]"><span className=" font-bold text-5xl text-tcolor">$99</span> / one time payment</p>

                    <Link 
                    href={"/"}
                    className=" py-6 bg-mcolor rounded-[96px] mt-6 text-white w-full text-center"
                    >
                        Get started
                    </Link>
                </div>

                <div className=" flex items-center bg-[#F7F7FC] w-full">
                    <div className=" py-16 text-lg pl-12">
                        <p className="mb-6 font-bold">What’s included</p>
                        <div className=" flex flex-col gap-4">
                            <p className="flex items-center gap-3">
                                <FaCircleCheck size={26} className=" text-mcolor"/>
                                One year support
                            </p>
                            <p className="flex items-center gap-3">
                                <FaCircleCheck size={26} className=" text-mcolor"/>
                                Up to 15,000 products
                            </p>
                            <p className="flex items-center gap-3">
                                <FaCircleCheck size={26} className=" text-mcolor"/>
                                Full acces to all tools
                            </p>
                            <p className="flex items-center gap-3">
                                <FaCircleCheck size={26} className=" text-mcolor"/>
                                Automated workflow
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Pricing;