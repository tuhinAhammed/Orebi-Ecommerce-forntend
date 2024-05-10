import React from 'react'

import ShopByCategory from "./ShopByCategory"
import Flex from "../Layout/Flex"
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { useState } from 'react';
import LeftSidebarContentColor from './ShopByColor';
import ShopByBrand from './ShopByBrand';
import ShopByPrice from './ShopByPrice';
const CategorySidebar = () => {

  return (
    <> 
    {/* Shop By Category Here */}
        
        <ShopByCategory dropdown = {true} title = "Shop by Category"></ShopByCategory>
        <LeftSidebarContentColor dropdown = {true}  title = "Color"></LeftSidebarContentColor>
        <ShopByBrand dropdown = {true}  title = "Shop by Brand"></ShopByBrand>
        <ShopByPrice dropdown = {false}  title = "Shop By Price"></ShopByPrice>

    </>
  )
}

export default CategorySidebar