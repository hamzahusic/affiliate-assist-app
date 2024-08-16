import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return ( 
        <div className="bg-tcolor text-white px-5">
            <div className=" main-container py-[50px] md:py-[100px] flex justify-around items-center">
                <div className=" max-w-[350px]">
                    <h2 className=" font-semibold text-[45px] md:text-[60px] leading-[60px] md:leading-[90px]">Questions? Let’s talk </h2>
                    <p className=" py-7 text-lg font-normal">Contact us through our social network. We’re always happy to help!</p>
                    <Link 
                    href={"/"}
                    className=" bg-mcolor text-tcolor font-medium rounded-[15px] py-[12px] px-10"
                    >Contact Us</Link>
                </div>
                <Image
                src={'/images/footer.png'}
                width={500}
                height={400}
                quality={100}
                className=" hidden md:block max-w-[350px] lg:max-w-[500px]"
                alt="Image of wallet"
                />
            </div>
            
            <div className=" p-5 md:p-12 flex items-center flex-col md:flex-row justify-around border-t-[1px] border-white/20">
                <h3 className=" text-lg md:text-[24px] font-semibold hidden md:block">Affiliate Assist</h3>
                <div className="flex flex-col-reverse md:flex-row items-center gap-5 md:gap-10">
                    <Link href={'/'}>
                    © Affiliate Assist  { new Date().getFullYear()}
                    </Link>
                    <Link href={'/'}>
                    Privacy policy
                    </Link>
                    <Link href={'/'}>
                    Cookies policy
                    </Link>
                    <Link href={'/'}>
                    Terms of use
                    </Link>
                </div>
            </div>

        </div>
     );
}
 
export default Footer;