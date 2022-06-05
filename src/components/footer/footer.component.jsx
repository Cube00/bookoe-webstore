import './footer.styles.scss';

import Logo from '../../assets/logo.png';

import {GoLocation} from 'react-icons/go';
import {FiMail} from 'react-icons/fi';
import {AiOutlinePhone} from 'react-icons/ai';

import {AiFillYoutube} from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';

const Footer = () =>{
  return <>
    <div className="footer-component">
      <div className="t-foter">
        <div className="b-1">
          <img className="footer-logo" src={Logo} alt="" />
          <p>Bookoe is a book store Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s</p>
        </div>
        <div className="b-1">
          <h2>Follow Us</h2>
          <div className="socials">
            <button><FaFacebookF className="ic f" /></button>
            <button><AiFillYoutube className="ic y" /></button>
            <button><BsTwitter className="ic t" /></button>
            <button><FaLinkedinIn className="ic l" /></button>
            <button><BsInstagram className="ic i" /></button>
          </div>
        </div>
        <div className="b-1">
          <h2>Our Store</h2>
          <h3><GoLocation className="sp-1" /> b32 Thompson Drive, San Francisco CA 94 107, United State</h3>
          <h3><AiOutlinePhone className="sp-1" /> 123 345123 556</h3>
          <h3><FiMail className="sp-1" /> suppert@bookoe.id</h3>
        </div>
      </div>

      <div className="b-foter">
        <span>Bookoe Book Store Website - Ⓒ 2020 All Rights reserved</span>
      </div>
    </div>
  </>
}

export default Footer;
