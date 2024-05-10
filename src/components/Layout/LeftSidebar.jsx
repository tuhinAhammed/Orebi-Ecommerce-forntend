import React from 'react'

import LeftSidebarContent from "../Layout/LeftSidebarContent"
import Flex from "../Layout/Flex"
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { useState } from 'react';
const CategorySidebar = () => {

  return (
    <> 
    {/* Shop By Category Here */}
        
        <LeftSidebarContent dropdown = {true}></LeftSidebarContent>
        <LeftSidebarContent dropdown = {false}></LeftSidebarContent>
        <LeftSidebarContent dropdown = {false}></LeftSidebarContent>
        {/* <ul className="">
            <li className='py-4'></li>
        </ul> */}
    </>
  )
}

export default CategorySidebar