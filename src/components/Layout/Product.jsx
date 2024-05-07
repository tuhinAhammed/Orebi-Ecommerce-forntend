

import React from 'react'
import Badge from './Badge'
import arrive1 from "../../assets/arrive-1.png"
import Flex from './Flex'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { useState } from 'react';
const Product = ({ badge }) => {

    // addToWishList Oprion
    const [isAtiveWishList, setIsActiveWishList] = useState(false)
    const handleAddToWishList = () => {
        setIsActiveWishList(!isAtiveWishList)
        console.log(isAtiveWishList);
    }

    return (
        <>
        {/* /* //  <div className="itemArrived px-6 py-1 text-tertiary rounded-[2px] font-sm bg-primary absolute top-[5%] left-[5%]">New</div>  */}
                    
            <div className="itemBox relative group ">
                
                {
                    badge && 
                   <Badge title="New"/>
                }
                <div className="productImage relative overflow-y-hidden ">
                    <img src={arrive1} alt="" className='w-[370px]' />
                    <div className="activeButtons w-[100%] bg-secondary p-4 absolute bottom-50 left-0    group-hover:bottom-0">
                            <div className="mainActiveButtonsList ">
                                <Flex className="innerActiveButtons my-2  justify-end gap-4 place-items-center text-tertiary text-base text-dmSans cursor-pointer  hover:font-bold ">
                                    <h1 className="">Add to Wish List</h1>
                                    <FaHeart className={isAtiveWishList ? `isAtiveWishList text-primary` : `isAtiveWishList`} onClick={handleAddToWishList} />
                                </Flex>
                                <Flex className="innerActiveButtons my-2 justify-end gap-4 place-items-center text-tertiary text-base text-dmSans cursor-pointer  hover:font-bold transition-all duration-300" >
                                    <h1 className="">Compare</h1>
                                    <TfiReload />
                                </Flex>
                                <Flex className="innerActiveButtons my-2 justify-end gap-4 place-items-center text-tertiary text-base text-dmSans cursor-pointer  hover:font-bold transition-all duration-300" >
                                    <h1 className="">Add to Cart</h1>
                                    <FaShoppingCart />
                                </Flex>
                            </div>
                    </div>
                </div>
                <Flex className="justify-between py-3.5 place-items-center">
                    <h1 className='productName text-xl text-dmSans font-bold'>Basic Crew Neck Tee</h1>
                    <div className="productPrice text-secondary text-base">200$</div>
                </Flex>
                <div className="productColor text-base text-secondary">Black</div>
            </div>
        </>
    )
}

export default Product