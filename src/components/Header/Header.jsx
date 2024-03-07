import React from 'react'
import Container from '../Layout/Container'
import Search from "./Search"
import Flex from "../Layout/Flex"
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
const Header = () => {
  return (
    <div className='bg-[#F5F5F3]'>
        <Container className="py-4">
        <Flex className="justify-between items-center" >
            <div className='flex items-center gap-[10px] text-sm font-dmSans '>
                <RiBarChartHorizontalFill />
                <div className='text-primary'>Shop by Category</div>
            </div>
            <div className='relative'>
            <Search className="w-[500px] text-base font-dmSans rounded px-[21px] py-[16px] bg-[#eee]" placeholder="Search Products"></Search>
             <IoSearch className="absolute top-5 right-5 text-primary"/>
            </div>
            <div className='flex gap-[40px] items-center text-sm font-dmSans'>
            <div className='flex'>
                <FaUser className='text-[18px]'/>
                <TiArrowSortedDown/>
            </div>
                <FaCartShopping className='text-[18px]'/>
            </div>
        </Flex>
    </Container>
    </div>
  )
}

export default Header