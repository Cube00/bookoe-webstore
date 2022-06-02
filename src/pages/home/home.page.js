import React from 'react';

import MainDeal from '../../components/deals-main/deal.component'

import "./home.styles.scss"

const HomePage = () =>{
  return <>
    <div className="wall">
      <MainDeal />
    </div>
  </>
}

export default HomePage
