import './special-offers.styles.scss'

import {connect} from 'react-redux'

import { createStructuredSelector } from 'reselect';

import {selectSpecialBooks} from '../../redux/books/books.selectors'

import OffersItem from '../offers-item/offers-item.component'

import CountdownTimer from '../countdown/countdown.component'

import {addToCart} from '../../redux/cart/cart.actions'

const SpecialOffers = ({specialBooks, addToCart}) => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return <>
    <div className="offers-heading">
      <h2>Flash Sale</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className="timer">
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </div>
    </div>
    <div className="offers-content">
      {
        specialBooks.map((item)=>(
            <OffersItem key={item.primary_isbn13} addToCart={addToCart} item={item}/>
          )
        )
      }
    </div>
  </>
}

const mapStateToProps = createStructuredSelector({
  specialBooks: selectSpecialBooks
})

const mapDispatchToProps = dispatch => ({
  addToCart: (item) => dispatch(addToCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(SpecialOffers)
