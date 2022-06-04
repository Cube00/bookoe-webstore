import React from 'react';

import MainDeal from '../../components/deals-main/deal.component';
import Qualifications from '../../components/qualification/qualification.component';
import SpecialOffers from '../../components/special-offers/special-offers.component';
import BookOnSale from '../../components/booksale/booksale.component';

import "./home.styles.scss"

const HomePage = () =>{
  return <>
    <div className="wall">
      <MainDeal />
      <Qualifications />
      <SpecialOffers />
      <BookOnSale />
    </div>
  </>
}

export default HomePage
