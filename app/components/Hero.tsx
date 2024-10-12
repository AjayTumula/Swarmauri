"use client"
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "../ui-kit/Button";
import HeroCard from "../ui-kit/HeroCard";

const ReleaseData = [
    {
        id: 1,
        title: "Sdk release v0.5.0",
        date: "Oct 2024"
    },
    {
        id: 2,
        title: "Sdk release v0.4.1",
        date: "Sep 2024"
    },
    {
        id: 3,
        title: "Serialization and Swarmauri",
        date: "Jul 2024"
    },
    {
        id: 4,
        title: "The swarmauri sdk",
        date: "Apr 2024"
    },
]

const Hero = () => {
    return <div className="flex flex-col align-middle pt-10">

        <div className="flex justify-center">
            <Image src={'https://swarmauri.com/wp-content/uploads/2024/09/Swarmauri-logo-lockup-1024x379.png'} alt='hero-logo'
            height={450} width={450} priority={true}/>
        </div>
       

        <div className="flex justify-center">
            <div className="mr-5">
                <PrimaryButton onClick={() => {
                    console.log("button has clicked")
                }}>Download</PrimaryButton>
            </div>
        
            <div>
                <SecondaryButton onClick={() => {
                    console.log("hhh")
                }}>About</SecondaryButton>
            </div>
        </div>

        <div className="mt-12 mb-24">
            {
                ReleaseData.map(({id, title, date}) => (
                    <div key={id}>
                        <HeroCard title={title} date={date}/>
                    </div>
                ))
            }
            
        </div>
    </div>
}

export default Hero;