import Image from "next/image";


const Hero = () => {
    return <div className="flex justify-center pt-10">
        <Image src={'https://swarmauri.com/wp-content/uploads/2024/09/Swarmauri-logo-lockup-1024x379.png'} alt='hero-logo'
        height={450} width={450} priority={true}/>
    </div>
}

export default Hero;