import React, { useState } from 'react'
import Flex from "./Flex"
import { IoMdArrowDropdownCircle } from "react-icons/io";
import MinTitle from "./MinTitle"
import CategoryDropdown from "./CategoryDropdown"
import { useEffect } from 'react';

const ShopByCategory = ({dropdown , title , children}) => {

    const [dropdownShow , setDropdownShow] = useState(dropdown)
    const [itemShow, setItemShow] = useState(true)
    const handleDropdown = () => {
        setItemShow(!itemShow)
    }

    // get categoryName from Database
    useEffect(() => {
        
    })
    return (
        <div className='list-none text-base text-secondary font-dm-Sans py-2'>
            {
                dropdownShow ?
                <Flex className=" justify-between place-items-center">
                <p className='text-base font-bold font-dmSans capitalize text-primary'>{title}</p>
                <IoMdArrowDropdownCircle onClick={handleDropdown} className='cursor-pointer' />
            </Flex>

                : <p className='text-base font-bold font-dmSans capitalize text-primary'>{title}</p>

            }

            {
                itemShow && (
                <ul className='mt-1'>
                    <li> <CategoryDropdown  categoryDropdown={true} className="" title ="category-1"/></li>                    
                    <li> <CategoryDropdown categoryDropdown={false} className="" title ="category-2"/> </li>
                    <li> <CategoryDropdown categoryDropdown={true} className="" title ="category-3"/> </li>
                    <li> <CategoryDropdown categoryDropdown={false} className="" title ="category-4"/> </li>
                </ul> 
            )}
            {
                dropdownShow == false && (
                <ul className='mt-1'>
                    <li> <CategoryDropdown  categoryDropdown={true} className="" title ="category-1"/></li>                    
                    <li> <CategoryDropdown categoryDropdown={false} className="" title ="category-2"/> </li>
                    <li> <CategoryDropdown categoryDropdown={true} className="" title ="category-3"/> </li>
                    <li> <CategoryDropdown categoryDropdown={false} className="" title ="category-4"/> </li>
                </ul> 
            )}
        </div>
    )
}

export default ShopByCategory