import React from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import MinTitle from '../Layout/MinTitle'
import Title from '../Layout/Title'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import BreadCrums from '../Layout/BreadCrums'
const Shop = () => {
    const pageName = window.location.pathname.split("/")[1]
    console.log(pageName);
    return (
        <>
            <div className="breadcrums py-16">
                <Container>

                    <BreadCrums></BreadCrums>

                </Container>
            </div>
        </>
    )
}

export default Shop