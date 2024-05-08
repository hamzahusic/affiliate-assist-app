import { MdCancel } from "react-icons/md";

const SelectProduct = () => {
    return ( 
        <div className=" flex items-center border-[1px] text-sm p-2 rounded-[5px] gap-1 justify-between w-full">
            <div className=" flex gap-2 items-center">
                <img
                    src="https://novabytes.co.uk/cdn/shop/files/notebook-xps-17-9730-t-gray-gallery-12_7cb96987-2f20-48f2-ad1d-189ffd3edea6_1280x.png"
                    width={50}
                    height={60}
                    alt="Image of product"
                    className="object-cover"
                />
                <p className=" text-xs font-semibold">Dell XPS 13 9320</p>
            </div>
            <MdCancel size={14} className=" text-red-600 cursor-pointer" />
        </div>
     );
}
 
export default SelectProduct;