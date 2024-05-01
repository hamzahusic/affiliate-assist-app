import Image from "next/image";

const Benefits = () => {
    return ( 
        <div className="py-20 flex flex-wrap justify-around main-container gap-14 md:gap-0">
            <div className=" text-center max-w-[272px]">
                <Image
                    src={'/images/url.png'}
                    width={96}
                    height={96}
                    alt="URL icon"
                    className=" mx-auto"
                />
                <h2 className=" font-bold text-2xl py-4">Instant Product Information</h2>
                <p className=" text-base">Simply input a product URL to retrieve essential details for effective promotion.</p>
            </div>

            <div className=" text-center max-w-[272px]">
                <Image
                    src={'/images/automation.png'}
                    width={96}
                    height={96}
                    alt="Automation icon"
                    className=" mx-auto"
                />
                <h2 className=" font-bold text-2xl py-4">Time-Saving Automation</h2>
                <p className=" text-base">Automate repetitive tasks and workflows to save time and boost productivity.</p>
            </div>

            <div className=" text-center max-w-[272px]">
                <Image
                    src={'/images/creation.png'}
                    width={96}
                    height={96}
                    alt="Creation icon"
                    className=" mx-auto"
                />
                <h2 className=" font-bold text-2xl py-4">Streamlined Content Creation</h2>
                <p className=" text-base">Effortlessly produce compelling blogs, emails, and social posts with just a few clicks.</p>
            </div>

            <div className=" text-center max-w-[272px]">
                <Image
                    src={'/images/template.png'}
                    width={96}
                    height={96}
                    alt="Template icon"
                    className=" mx-auto"
                />
                <h2 className=" font-bold text-2xl py-4">Customizable Templates</h2>
                <p className=" text-base">Access of customizable templates for blogs, emails, and social posts to accelerate content creation.</p>
            </div>
        </div>
     );
}
 
export default Benefits;