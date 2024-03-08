import React from 'react'
import Container from '../Layout/Container'
import Search from "./Search"
import Flex from "../Layout/Flex"
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const Header = () => {
    const [show , setShow] = useState(false)
    // const handleClick = () => {
    //     setShow (!show)
    // }
    const myRef = useRef()
    useEffect(() => {
        document.body.addEventListener("click" , (e) => {
            if (myRef.current.contains(e.target)){
                setShow(true)
            }
            else{
                setShow(false)
            } 
        })
    },[])
  return (
    <div className='bg-[#F5F5F3]'>
        <Container className="py-4">
        <Flex className="justify-between items-center" >
            <div  className='flex items-center gap-[10px] text-sm font-dmSans '>
                <div className='relative' ref = {myRef} >
                    <div className='flex items-center gap-[10px] text-sm font-dmSans'>
                        <RiBarChartHorizontalFill />
                        <div className='text-primary text-base'>Shop by Category</div>
                    </div>
                   {
                    show && (
                        <ul className='absolute bg-primary top-[50px] w-[263px] font-dmSans' >
                        <li className='text-base py-[16px]  px-[21px]  border-b border-secondary ease-in duration-100 text-tertiary text-opacity-[70%] hover:text-tertiary hover:bold hover:pl-[30px] hover:text-opacity-[100%]'>Accesories</li>
                        <li className='text-base py-[16px]  px-[21px]  border-b border-secondary ease-in duration-100 text-tertiary text-opacity-[70%] hover:text-tertiary hover:bold hover:pl-[30px] hover:text-opacity-[100%]'>Furniture</li>
                        <li className='text-base py-[16px]  px-[21px]  border-b border-secondary ease-in duration-100 text-tertiary text-opacity-[70%] hover:text-tertiary hover:bold hover:pl-[30px] hover:text-opacity-[100%]'>Electronics</li>
                        <li className='text-base py-[16px]  px-[21px]  border-b border-secondary ease-in duration-100 text-tertiary text-opacity-[70%] hover:text-tertiary hover:bold hover:pl-[30px] hover:text-opacity-[100%]'>Clothes</li>
                        <li className='text-base py-[16px]  px-[21px]  border-b border-secondary ease-in duration-100 text-tertiary text-opacity-[70%] hover:text-tertiary hover:bold hover:pl-[30px] hover:text-opacity-[100%]'>Bags</li>
                        <li className='text-base py-[16px]  px-[21px]  border-b border-secondary ease-in duration-100 text-tertiary text-opacity-[70%] hover:text-tertiary hover:bold hover:pl-[30px] hover:text-opacity-[100%]'>Home appliances</li>
                    </ul>
                    )
                   }
                </div>
               
                
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