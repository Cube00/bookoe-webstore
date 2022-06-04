import './offers-item.styles.scss';

const OffersItem = ({item}) =>{
  const {title, book_image, author, price} = item;
  return <>
    <div className="offers-item">
      <div className="offers-image">
        <img src={book_image} alt=""/>
      </div>
      <div className="offers-info">
        <h2>{title}</h2>
        <h3>{author}</h3>
      </div>
      <div className="offers-price">
        <span>{price}</span>
      </div>
    </div>
  </>
}

export default OffersItem
