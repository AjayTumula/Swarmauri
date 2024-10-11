


const CareerCard = ({title, description, jobType, location}: {
    title: string,
    description: string,
    jobType: string,
    location: string
}) => {
    return <div className="border-t-3 text-black bg-none">
        <div>{title}</div>
        <div>{description}</div>
        <div className="flex">
            <div className="border-2 p-4">
                {jobType}
            </div>
            <div className="border-2 p-4">
                {location}
            </div>               
        </div>
    </div>
}

export default CareerCard;