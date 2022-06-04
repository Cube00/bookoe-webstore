import './booksale.styles.scss';

import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import {selectBookItems} from '../../redux/books/books.selectors';

import BookItem from '../bookitem/bookitem.component';

import {addToCart} from '../../redux/cart/cart.actions';

const BookOnSale = ({books, addToCart}) =>{
  return <>
    <div className="book-on-sale">
      <div className="title"><h2>Books On Sale</h2></div>
      <div className="sale">
        <Swiper
          // install Swiper modules
          modules={[Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={6}
          pagination={{ clickable: true }}
        >
          {
            books.map(item=>{
              return (<SwiperSlide key={item.primary_isbn13}>
                        <BookItem key={item.primary_isbn13} addToCart={addToCart} item={item}/>
                      </SwiperSlide>)
            })
          }
        </Swiper>
      </div>
    </div>
  </>
}

const mapStateToProps = createStructuredSelector({
  books: selectBookItems
})

const mapDispatchToProps = dispatch => ({
  addToCart: (item) => dispatch(addToCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookOnSale);
