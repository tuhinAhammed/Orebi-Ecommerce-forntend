import React from 'react'
import { useState } from 'react'
import { IoMdArrowDropdownCircle } from 'react-icons/io'
import Flex from '../Layout/Flex'
import SubCategoryDropdown from './SubCategoryDropdown'


const categoryDropdown = ({categoryDropdown , className}) => {

const [categoryDropdownShow , setCategoryDropdownShow] = useState(false)
const [categoryArrowShow , setyCategoryAroowShow] = useState(categoryDropdown)
  return (
    <div className={`py-2 ml-4 cursor-pointer ${className}`}>
    {
        categoryArrowShow ? 
        <Flex className="justify-between place-items-center  text-base">
            <p className="categoryName">Category 1</p>
            <IoMdArrowDropdownCircle onClick={() => setCategoryDropdownShow(!categoryDropdownShow)}  className='cursor-pointer'/>
        </Flex>
        :
        <p className="categoryName ">Category 1</p>

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

export default categoryDropdown