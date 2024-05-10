import React, { useState } from 'react'
import Flex from "../Layout/Flex"
import { IoMdArrowDropdownCircle } from "react-icons/io";
import MinTitle from "./MinTitle"
import CategoryDropdown from "./CategoryDropdown"

const LeftSidebarContent = ({dropdown}) => {

    const [dropdownShow , setDropdownShow] = useState(dropdown)
    const [itemShow, setItemShow] = useState(false)
    const handleDropdown = () => {
        setItemShow(!itemShow)
    }
    return (
        <div className='list-none text-base text-secondary font-dm-Sans py-2'>
            {
                dropdownShow ?
                <Flex className=" justify-between place-items-center">
                <MinTitle text="Shop by Category"></MinTitle>
                <IoMdArrowDropdownCircle onClick={handleDropdown} className='cursor-pointer' />
            </Flex>

                : <MinTitle text="Shop by Category"></MinTitle>

            }

            {
                itemShow &&
                <ul className='mt-1'>
                    <li> <CategoryDropdown  categoryDropdown={true} className=" "/> </li>
                    <li> <CategoryDropdown categoryDropdown={false} className=""/> </li>
                    <li> <CategoryDropdown categoryDropdown={true} className=""/> </li>
                    <li> <CategoryDropdown categoryDropdown={false} className=""/> </li>
                </ul> 
            }
        </div>
    )
}

export default LeftSidebarContent