

const HeroCard = ({title, date} : {
    title: string,
    date: string
}) => {
    return <div className="flex justify-center pt-4">
        <div className="flex justify-between pt-4 pb-2 w-1/2 border-t-[1px] border-[#56504f]">
        <div className="text-xl lg:text-xl">{title}</div>
        <div className="text-sm lg:text-lg">{date}</div>
    </div>
    </div>
}

export default HeroCard;