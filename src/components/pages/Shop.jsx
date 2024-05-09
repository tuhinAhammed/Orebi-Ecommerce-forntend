import React from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import MinTitle from '../Layout/MinTitle'
import Title from '../Layout/Title'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import BreadCrums from '../Layout/BreadCrums'
import Pagination from '../Layout/Pagination'
const Shop = () => {
    const pageName = window.location.pathname.split("/")[1]
    console.log(pageName);
    return (
        <>
            <div className="breadcrums py-16">
                <Container>

                    <BreadCrums></BreadCrums>
                <div className="innerShop pt-20 ">
                    <Flex className="gap-10">
                        <div className="left w-[25%]">trg</div>
                        <div className="right w-[75%]">
                            <div>adfae</div>
                            <Pagination itemsPerPage={12}></Pagination>
                        </div>
                    </Flex>
                </div>
                </Container>
            </div>
        </>
    )
}

export default Shop