const DashboardCard = ({icon,value,description}) => {
    return (
        <div className="bg-dcolor px-3 md:px-4 py-2 md:py-[11px] rounded-[15px] max-w-[130px] md:max-w-[150px] w-full drop-shadow-[3px_3px_0px_rgba(50,50,50,0.5)]">
            {icon}
            <p className=" text-base md:text-[20px] font-medium tracking-[1px] mt-[5px] md:mt-2 mb-1 text-black">{value}</p>
            <p className=" text-[11px] md:text-xs font-light text-black">{description}</p>
        </div>
    );
}
 
export default DashboardCard;