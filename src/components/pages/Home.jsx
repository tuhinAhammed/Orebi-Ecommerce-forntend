import React from 'react'
import Ads from '../Body/Ads'
import Banner from '../Banner/Banner'
import NewArrivals from '../Body/NewArrivals'
import AdsSeconsd from '../Body/AdsSeconsd'
import SpeatialOffer from '../Body/SpeatialOffer'

const Home = () => {
  return (
    <div>
        < Banner/>
        <Ads></Ads>
        <NewArrivals></NewArrivals>
        <AdsSeconsd></AdsSeconsd>
        <SpeatialOffer></SpeatialOffer>
    </div>
  )
}

export default Home