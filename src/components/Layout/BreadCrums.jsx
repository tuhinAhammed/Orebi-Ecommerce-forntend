import React from 'react'
import Flex from '../Layout/Flex'
import MinTitle from '../Layout/MinTitle'
import Title from '../Layout/Title'
import { MdOutlineArrowForwardIos } from "react-icons/md";
const BreadCrums = () => {
    const pageName = window.location.pathname.split("/")[1]

    return (
        <>
            <Title title={pageName}></Title>
            <Flex className="pageIntregate py-6 text-sm text-secondary font-light gap-3 items-center" >
                <MinTitle text="Home" className="text-sm text-secondary font-light"></MinTitle>
                <MdOutlineArrowForwardIos className="text-sm text-secondary font-light" />
                <MinTitle text={pageName} className="text-sm text-secondary font-light"></MinTitle>

            </Flex>
        </>
    )
}

export default BreadCrums