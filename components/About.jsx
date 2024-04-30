import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
    return ( 
        <div className=" flex justify-between flex-col-reverse md:flex-row items-center gap-10 xl:gap-0 py-20 main-container p-5">
            <div className="max-w-[600px]">
                <h2 className=" font-extrabold text-4xl  lg:text-5xl">Why Choose Affiliate Assist?</h2>
                <p className=" text-lg py-6">Discover how Affiliate Assist can revolutionize your affiliate marketing strategy. With our intuitive platform, you can save time with automated workflows and access essential product details instantly using product URLs. After that with just a few clicks, generate any content creation and post it. Easy as that! Take your affiliate business to new heights with Affiliate Assist!</p>
                <Link href={'/'} className=" flex items-center gap-5">Chechk the demo <FaArrowRight /></Link>
            </div>
            <Image
                src={'/images/about.png'}
                width={492}
                height={412}
                alt="Picture of a graph"
                quality={100}
                className=" max-w-[400px] lg:max-w-[600px] mx-auto"
            />
        </div>
     );
}
 
export default About;