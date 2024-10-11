"use client"
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "../ui-kit/Button";


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
    </div>
}

export default Hero;