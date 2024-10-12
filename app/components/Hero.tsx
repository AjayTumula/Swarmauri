"use client"
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "../ui-kit/Button";
import HeroCard from "../ui-kit/HeroCard";
import { title } from "process";

const ReleaseData = [
    {
        title: "Sdk release v0.5.0",
        date: "Oct 2024"
    },
    {
        title: "Sdk release v0.4.1",
        date: "Sep 2024"
    },
    {
        title: "Serialization and Swarmauri",
        date: "Jul 2024"
    },
    {
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
                ReleaseData.map((release) => (
                    <HeroCard title={release.title} date={release.date}/>
                ))
            }
            
        </div>
    </div>
}

export default Hero;