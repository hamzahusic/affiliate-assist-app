import PageNav from "@/components/PageNav";
import Link from "next/link";
import { IoIosAddCircle  } from "react-icons/io";

const page = () => {

    const productData = [
        {
            name: 'Dell XPS 13 9320',
            imageSrc: 'https://th.bing.com/th/id/R.631476b3657ffeb5d7b79611c1fea80c?rik=ZjlWaQPvqUfLAA&pid=ImgRaw&r=0',
            category: 'Laptop',
            brand: 'DELL',
            price: 1299,
            createdAt: '14/06/21'
        },
        {
            name: 'Dell XPS 13 9320',
            imageSrc: 'https://th.bing.com/th/id/R.631476b3657ffeb5d7b79611c1fea80c?rik=ZjlWaQPvqUfLAA&pid=ImgRaw&r=0',
            category: 'Laptop',
            brand: 'DELL',
            price: 1299,
            createdAt: '14/06/21'
        },
        {
            name: 'Dell XPS 13 9320',
            imageSrc: 'https://th.bing.com/th/id/R.631476b3657ffeb5d7b79611c1fea80c?rik=ZjlWaQPvqUfLAA&pid=ImgRaw&r=0',
            category: 'Laptop',
            brand: 'DELL',
            price: 1299,
            createdAt: '14/06/21'
        },
        {
            name: 'Dell XPS 13 9320',
            imageSrc: 'https://th.bing.com/th/id/R.631476b3657ffeb5d7b79611c1fea80c?rik=ZjlWaQPvqUfLAA&pid=ImgRaw&r=0',
            category: 'Laptop',
            brand: 'DELL',
            price: 1299,
            createdAt: '14/06/21'
        },
        {
            name: 'Dell XPS 13 9320',
            imageSrc: 'https://th.bing.com/th/id/R.631476b3657ffeb5d7b79611c1fea80c?rik=ZjlWaQPvqUfLAA&pid=ImgRaw&r=0',
            category: 'Laptop',
            brand: 'DELL',
            price: 1299,
            createdAt: '14/06/21'
        },
        {
            name: 'Dell XPS 13 9320',
            imageSrc: 'https://th.bing.com/th/id/R.631476b3657ffeb5d7b79611c1fea80c?rik=ZjlWaQPvqUfLAA&pid=ImgRaw&r=0',
            category: 'Laptop',
            brand: 'DELL',
            price: 1299,
            createdAt: '14/06/21'
        },
        {
            name: 'Dell XPS 13 9320',
            imageSrc: 'https://th.bing.com/th/id/R.631476b3657ffeb5d7b79611c1fea80c?rik=ZjlWaQPvqUfLAA&pid=ImgRaw&r=0',
            category: 'Laptop',
            brand: 'DELL',
            price: 1299,
            createdAt: '14/06/21'
        },
        {
            name: 'Dell XPS 13 9320',
            imageSrc: 'https://th.bing.com/th/id/R.631476b3657ffeb5d7b79611c1fea80c?rik=ZjlWaQPvqUfLAA&pid=ImgRaw&r=0',
            category: 'Laptop',
            brand: 'DELL',
            price: 1299,
            createdAt: '14/06/21'
        },
        
    ];

    return ( 
        <>
            <PageNav placeholder={"Search products..."} pageName={"Products"}/>
            {/*Create button*/}
            <Link href={"/dashboard/product/add"} className=" flex items-center gap-[10px] px-4 py-3 rounded-[15px] bg-dcolor w-fit">
                <IoIosAddCircle size={20} className=" text-tcolor"/>
                <span className=" font-medium text-[15px]">Create Product</span>
            </Link>
            {/*All products*/}
            <div className=" mt-4 pt-[30px] pb-[15px] px-[15px] bg-white rounded-[15px] shadow-sm">
                <h2 className=" md:text-lg text-base font-medium mb-[25px]">Products that you created</h2>
                <table className="w-full border-collapse text-left">
                    <thead className=" text-xs text-[#A0AEC0] uppercase table w-[calc(100%-1em)] table-fixed">
                        <tr>
                            <th className="py-3 font-normal" colSpan={2}>Name</th>
                            <th className="py-3 font-normal hidden md:table-cell">Category</th>
                            <th className="py-3 font-normal">Price</th>
                            <th className="py-3 font-normal hidden md:table-cell">Created At</th>
                            <th className="py-3 font-normal">Edit</th>
                        </tr>
                    </thead>
                    <tbody className=" max-h-[550px] md:max-h-[600px] overflow-y-auto block min-w-full">
                        {productData.map((product,index) => (
                            <tr key={index} className="text-sm border-t-[1px] border-[#E2E8F0] w-full table table-fixed">
                                <td className=" px-1 sm:px-3 py-3 font-semibold" colSpan={2}>
                                    <div className="flex items-center gap-2 md:gap-3 md:my-1">
                                        <img
                                            src={product.imageSrc}
                                            width={50}
                                            height={60}
                                            alt="Image of product"
                                            className="object-cover"
                                        />
                                        <span>{product.name}</span>
                                    </div>
                                </td>
                                <td className=" hidden md:table-cell">
                                    <p className=" flex flex-col">
                                        <span>{product.category}</span>
                                        <span className=" uppercase">{product.brand}</span>
                                    </p>
                                </td>
                                <td className=" px-1 sm:px-3 py-3 uppercase">
                                    <span className="text-white bg-[#48BB78] rounded-lg p-2 text-center tracking-wide">
                                        ${product.price}
                                    </span>
                                </td>
                                <td className=" px-1 sm:px-3 py-3 text-tcolor font-semibold hidden md:table-cell">{product.createdAt}</td>
                                <td className=" px-1 sm:px-3 py-3 text-tcolor font-semibold cursor-pointer text-center sm:text-left">Edit</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
     );
}
 
export default page;