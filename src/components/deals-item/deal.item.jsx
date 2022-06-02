import "./deal-item.styles.scss"

import {BsArrowRight} from 'react-icons/bs'

const DealItem = ({item}) =>{
  const {title, description, quote, motto, image } = item;
  return <>
    <div className="deal-item">
      <div className="image" style={{backgroundImage: `url(${image})`}} />
      <div className="_info">
        <h4>{motto}</h4>
        <h2>{title}</h2>
        <h3>{quote}</h3>
        <p>{description}</p>
        <div className="deal-buttons">
          <button>Get the deal <span><BsArrowRight/></span></button>
          <button>See other promos</button>
        </div>
      </div>
    </div>
  </>
}

export default DealItem
