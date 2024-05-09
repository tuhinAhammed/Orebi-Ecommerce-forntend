import React from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import arrive1 from "../../assets/arrive-1.png"
import Title from '../Layout/Title'
import Badge from '../Layout/Badge'
import Product from '../Layout/Product'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const NewArrivals = (badge) => {

  // react slick slider here

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="newArrived w-full">
        <Container className="py-16">
          {/* <h1 className='text-4xl font-bold pb-10'>New Arrivals</h1> */}
          <Title className="text-primary pb-10" title="New Arrivals"></Title>
          <div className="item w-[100%]">

            <Slider {...settings} className="flex gap-x-4">
            {/* <Flex className=" "> */}
              <Product badge={true}></Product>
              <Product badge={true}></Product>
              <Product badge={true}></Product>
              <Product badge={true}></Product>
            {/* </Flex> */}

            </Slider>


          </div>
        </Container>
      </div>
    </>
  )
}

export default NewArrivals