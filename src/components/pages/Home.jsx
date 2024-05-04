import React from 'react'
import Ads from '../Body/Ads'
import Banner from '../Banner/Banner'
import NewArrivals from '../Body/NewArrivals'

const Home = () => {
  return (
    <div>
        < Banner/>
        <Ads></Ads>
        <NewArrivals></NewArrivals>
    </div>
  )
}

export default Home