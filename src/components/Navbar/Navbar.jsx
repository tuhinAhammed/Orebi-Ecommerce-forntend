import react from "react"
import logo from "../../assets/Logo.png"
const Navbar = () => {
    return (
        <nav className="max-w-container mx-auto flex py-8">
            <div className="w-3/12 ">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="w-9/12 ">
                <div className="menu">
                    <ul className="flex justify-end gap-x-[40px] text-base bold font-dmSans " >
                        <li className="text-primary cursor-pointer">Home</li>
                        <li className="text-secondary hover:text-primary cursor-pointer">Shop</li>
                        <li className="text-secondary hover:text-primary cursor-pointer">About</li>
                        <li className="text-secondary hover:text-primary cursor-pointer">Contacts</li>
                        <li className="text-secondary hover:text-primary cursor-pointer">Journal</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar

