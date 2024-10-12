


const Footer = () => {


    return <footer className="mb-16">
            <div className="w-3/4 mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
           
            <ul className="flex flex-wrap items-center mt-3 text-md font-medium text-white  sm:mt-0">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">TOS</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Contact</a>
                </li>
            </ul>
            <span className="text-md text-white sm:text-center">© 2024 <a href="/" className="hover:underline">Swarmauri</a>. All Rights Reserved.
            </span>
            </div>
        </footer>
}

export default Footer;