import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const AffiliateGame = () => {
    return ( 
        <div className=" flex justify-between flex-col md:flex-row items-center gap-10 xl:gap-0 py-20 main-container p-5">
            <Image
                src={'/images/affiliategame.png'}
                width={600}
                height={464}
                alt="Picture of people working together"
                quality={100}
                className=" max-w-[350px] lg:max-w-[600px]"
            />
            <div className="max-w-[600px]">
                <h2 className=" font-extrabold text-4xl  lg:text-5xl">Transform Your Affiliate Marketing Game Today!</h2>
                <p className=" text-lg py-6">Unlock the power of streamlined content creation and automation with Affiliate Assist. Effortlessly generate engaging blogs, emails, and social posts, all just a few clicks away. Maximize your earnings and save valuable time with our intuitive platform. Get started and watch your affiliate success soar!</p>
                <Link href={'/'} className=" flex items-center gap-5">See how it helped others <FaArrowRight /></Link>
            </div>
        </div>
    );
}
 
export default AffiliateGame;