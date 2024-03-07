import react from "react"
import logo from "../../assets/Logo.png"
import Container from "../Layout/Container"
import Flex from "../Layout/Flex"
const Navbar = () => {
    return (
        <Container>
            <div className="py-6">
                <Flex className="items-center">
                <div className="w-3/12 ">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="w-9/12 ">
                            <ul className="flex justify-end gap-x-[40px] text-base bold font-dmSans " >
                                <li className="text-primary cursor-pointer">Home</li>
                                <li className="text-secondary hover:text-primary cursor-pointer">Shop</li>
                                <li className="text-secondary hover:text-primary cursor-pointer">About</li>
                                <li className="text-secondary hover:text-primary cursor-pointer">Contacts</li>
                            </ul>
                    </div>
                </Flex>
            </div>
            </Container>
    )
}
export default Navbar

