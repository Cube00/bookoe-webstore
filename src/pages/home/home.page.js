import React from 'react';

import MainDeal from '../../components/deals-main/deal.component'
import Qualifications from '../../components/qualification/qualification.component'
import SpecialOffers from '../../components/special-offers/special-offers.component'

import "./home.styles.scss"

const HomePage = () =>{
  return <>
    <div className="wall">
      <MainDeal />
      <Qualifications />
      <SpecialOffers />
    </div>
  </>
}

export default HomePage
