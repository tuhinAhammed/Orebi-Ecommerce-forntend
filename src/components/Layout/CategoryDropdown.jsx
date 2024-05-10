import React, { Children } from 'react'
import { useState } from 'react'
import { IoMdArrowDropdownCircle } from 'react-icons/io'
import Flex from '../Layout/Flex'
import SubCategoryDropdown from './SubCategoryDropdown'


const CategoryDropdown = ({categoryDropdown , className , children , title ,color }) => {

const [categoryDropdownShow , setCategoryDropdownShow] = useState(false)
const [categoryArrowShow , setyCategoryAroowShow] = useState(categoryDropdown)
  return (
    <div className={`py-2 ml-4 cursor-pointer text-secondary border-b-2 border-quaternary   ${className}`}>
    {
        categoryArrowShow ? 
        <Flex className="justify-between place-items-center  text-base ">
            {children}
            <p className="categoryName" style={{color : color}} >{title}</p>
            <IoMdArrowDropdownCircle onClick={() => setCategoryDropdownShow(!categoryDropdownShow)}  className='cursor-pointer '/>
        </Flex>
        :
        <p className="categoryName ">{title}</p>

    }
        
        {
            categoryDropdownShow &&
            <ul className='mt-2'>
                <li><SubCategoryDropdown/></li>
                <li><SubCategoryDropdown/></li>
            </ul>
        }
            
    </div>
    
  )
}

export default CategoryDropdown