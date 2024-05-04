import React from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import ads1 from "../../../src/assets/Ad_1.png"
import ads2 from "../../../src/assets/Ad_2.png"
import ads3 from "../../../src/assets/Ad_3.png"
const Ads = () => {
  return (
    <>
      <Container className="pt-[120px] pb-[60px]">
        <Flex className=" justify-center">
          <div  className='left '>
            <img  src={ads1} alt="" className=''/>
          </div>
          <div className='right'>
          <img  src={ads2} alt="" className=''/>
          <img  src={ads3} alt="" className='pt-[30px]'/>
          </div>
        </Flex>
      </Container>
    </>
  )
}

export default Ads