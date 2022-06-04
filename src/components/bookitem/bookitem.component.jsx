import './bookitem.styles.scss';

const BookItem = ({item, addToCart}) =>{
  const {title, author, price, book_image} = item;
  return <>
    <div className="book">
      <div className="book-image">
        <img src={book_image} alt="" />
        <div className="addToCart">
          <button onClick={()=>addToCart(item)}>Add to cart</button>
        </div>
      </div>
      <div className="book-info">
        <h2>{title}</h2>
        <h3>{author}</h3>
      </div>
      <div className="book-price">
        <span>{price}</span>
      </div>
    </div>
  </>
}

export default BookItem;
