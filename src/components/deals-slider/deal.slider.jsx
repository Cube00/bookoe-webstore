import React, {useEffect} from 'react'

import { Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import {suggest} from '../../data/suggest.js'

import DealItem from '../deals-item/deal.item'

import {connect} from 'react-redux'

import {mainDealsAction} from '../../redux/main-deals/main-deals.actions'

import { createStructuredSelector } from 'reselect';

import {selectCurrentDeals} from '../../redux/main-deals/main-deal.selectors'

import './deal-slider.styles.scss'

const DealsSlider = ({deals, setDeals}) => {
  useEffect(()=>{
    setDeals(suggest)
  },[setDeals])

  return (
    <div className="deals-slider">
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
          deals.map(item=>(
              <SwiperSlide key={item.id}><DealItem key={item.id} item={item}/></SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  deals: selectCurrentDeals
})

const mapDispatchToProps = dispatch => ({
  setDeals: (data)=> dispatch(mainDealsAction(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(DealsSlider)
