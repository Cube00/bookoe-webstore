import './bookitem.styles.scss';

import {MdOutlineFavoriteBorder} from 'react-icons/md';

const BookItem = ({item, addToCart}) =>{
  const {title, author, price, book_image} = item;
  return <>
    <div className="book">
      <div className="book-image">
        <img src={book_image} alt="" />
      </div>
      <div className="book-info">
        <h2>{title}</h2>
        <h3>{author}</h3>
      </div>
      <div className="book-price">
        <span>{price}</span>
      </div>
      <div className="addToCart">
        <button onClick={()=>addToCart(item)}><span>Add to cart</span></button>
        <button><span><MdOutlineFavoriteBorder className="f-co"/></span></button>
      </div>
    </div>
  </>
}

export default BookItem;
