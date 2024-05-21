import React, { useEffect } from 'react'
import Badge from './Badge'
import arrive1 from "../../assets/arrive-1.png"
import Flex from './Flex'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { useState } from 'react';
import axios from 'axios';
const Product = ({ badge, productImage, productName, productColor, productPrice , className}) => {
    const [productData, setProductData] = useState([])

    useEffect(() => {
        async function getProductData() {
            const data = await axios.get("http://localhost:4000/auth/v1/product/getproduct")
            //   console.log(data.data);
            setProductData(data.data);
        }
        getProductData()
    }, [])
    console.log(productData)
    //     const productName = productAllData.name
    // const productPrice = (productAllData.variants[0]?.price);
    // const productColor = (productAllData.variants[0]?.color);
    // const productImage = (productAllData.image);
    // console.log(productAllData.variants[0]?.price);
    // addToWishList Oprion
    const [isAtiveWishList, setIsActiveWishList] = useState(false)
    const handleAddToWishList = () => {
        setIsActiveWishList(!isAtiveWishList)
        console.log(isAtiveWishList);
    }

    return (
        <>
            {/* /* //  <div className="itemArrived px-6 py-1 text-tertiary rounded-[2px] font-sm bg-primary absolute top-[5%] left-[5%]">New</div>  */}

            <div className={`itemBox relative group w-full ${className}`}>

                {
                    badge &&
                    <Badge title="New" />
                }
                <div className="productImage relative overflow-y-hidden w-[250px] h-[250px]">
                    <img src={productImage} alt="" className='w-full' />
                    <div className="absolute activeButtons w-full bg-secondary p-4  bottom-[-60%] left-0 overflow-hidden   group-hover:bottom-0  ">
                        <div className="mainActiveButtonsList ">
                            <Flex className="innerActiveButtons my-2  justify-end gap-4 place-items-center text-tertiary text-base text-dmSans cursor-pointer  hover:font-bold transition-all duration-300">
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
                <Flex className="w-full justify-between py-3.5 place-items-center">
                    <h1 className='productName text-md text-dmSans font-bold'>{productName}</h1>
                    <div className="productPrice text-secondary text-base">{productPrice}</div>
                </Flex>
                <div className="productColor text-base text-secondary">{productColor}</div>
            </div>
        </>
    )
}

export default Product