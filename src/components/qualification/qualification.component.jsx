import './qualification.styles.scss';

import {BsFillLightningFill} from 'react-icons/bs';
import {RiShieldCheckFill} from 'react-icons/ri';
import {AiFillLike} from 'react-icons/ai';
import {BsStarFill} from 'react-icons/bs';

const Qualifications = () =>{
  return (
    <div className="store-qualifications">
      <div>
        <span><BsFillLightningFill className="_icon" /></span>
        <span>
          <h2>Quick Delivery</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </span>
      </div>
      <div>
        <span><RiShieldCheckFill className="_icon" /></span>
        <span>
          <h2>Secure Payment</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </span>
      </div>
      <div>
        <span><AiFillLike className="_icon" /></span>
        <span>
          <h2>Best Quality</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </span>
      </div>
      <div>
        <span><BsStarFill className="_icon" /></span>
        <span>
          <h2>Return Guarantee</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </span>
      </div>
    </div>
  )
}

export default Qualifications
