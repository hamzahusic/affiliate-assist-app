import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return ( 
        <div className=" flex flex-col break:flex-row justify-around items-center main-container py-14 px-5 gap-11 lg:gap-0">
            <div>
                <h1 className=" text-[55px] lg:text-[70px] font-extrabold leading-[70px] tracking-[-2.2px]">Skyrocket Your Earnings with Affiliate Assist 🚀</h1>
                <p className=" tracking-[1px] text-xl pt-4 pb-6">Effortlessly create blogs, emails, social post and more with our intuitive affiliate marketing solution</p>
                <div className=" flex gap-6 items-center">
                    <Link href={'/'} className=" bg-tcolor text-white rounded-md w-full md:w-auto text-center py-4 md:px-14">Sign Up</Link>
                    <Link href={'/'} className=" bg-white text-tcolor border-[1px] border-tcolor rounded-md w-full md:w-auto text-center py-4 md:px-14">View Demo</Link>
                </div>
            </div>
            <Image
                src={"/images/main_aa_header.png"}
                width={650}
                height={600}
                className=" max-w-[300px] bimg:max-w-[400px] lg:max-w-[500px] xl:max-w-[650px] mx-auto"
                alt="Picture of the man using platform"
                quality={100}
                priority={true}
            />
        </div>
     );
}
 
export default Header;