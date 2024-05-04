import React from 'react'
import Badge from './Badge'
import arrive1 from "../../assets/arrive-1.png"
import Flex from './Flex'
const Product = ({badge}) => {
    return (
        <>
            <div className="itemBox relative">
                {/* <div className="itemArrived px-6 py-1 text-tertiary rounded-[2px] font-sm bg-primary absolute top-[5%] left-[5%]">New</div> */}
                {
                    badge && 
                <Badge title="New"></Badge>
                }
                <img src={arrive1} alt="" className='w-[370px]' />
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