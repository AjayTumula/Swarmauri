


const CareerCard = ({title, description, jobType, location}: {
    title: string,
    description: string,
    jobType: string,
    location: string
}) => {
    return <div className="flex justify-center pt-3 text-white bg-none">
        <div className="flex flex-col w-1/2 border-t-[1px] border-[#56504f]">
            <div className="text-xl pt-4 lg:text-2xl">{title}</div>
            <div className="text-sm pt-4 lg:text-lg">{description}</div>    
            <div className="flex pt-4">
                <div className="flex justify-between lg:border-2 lg:rounded-full p-2 mr-3 items-center md:items-center">
                    <div className="mr-2 text-[10px] md:text-[10px] lg:text-[12px]">
                        <i className="fa-solid fa-location-dot" style={{color: '#ffffff'}}></i>
                    </div>
                    <div className="text-[12px] md:text-[12px] lg:text-[12px]">
                        {jobType}
                    </div>
                </div>
                <div className="flex justify-between lg:border-2 lg:rounded-full p-2 items-center md:items-center">
                    <div className="mr-2 text-[10px] md:text-[10px] lg:text-[12px]">
                        <i className="fa-regular fa-clock" style={{color: '#ffffff'}}></i>
                    </div>
                    <div className="text-[12px] md:text-[12px] lg:text-[12px]">
                        {location}
                    </div>
                </div>               
            </div>
        </div>
    </div>
}

export default CareerCard;