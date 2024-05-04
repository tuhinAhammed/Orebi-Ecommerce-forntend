import React from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import arrive1 from "../../assets/arrive-1.png"
import Title from '../Layout/Title'
import Badge from '../Layout/Badge'
import Product from '../Layout/Product'
const NewArrivals = (badge) => {
  return (
    <>
        <Container className="py-16">
            {/* <h1 className='text-4xl font-bold pb-10'>New Arrivals</h1> */}
            <Title className="text-primary" title="New Arrivals"></Title>
            <div className="item">
                <Flex className="justify-beetween gap-10">
                    <Product badge = {true}></Product>
                    <Product badge = {true}></Product>
                    <Product badge = {true}></Product>
                    <Product badge = {true}></Product>
                </Flex>
            </div>
        </Container>
    </>
  )
}

export default NewArrivals