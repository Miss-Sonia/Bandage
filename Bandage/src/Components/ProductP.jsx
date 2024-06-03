import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import ShoppingCart from './Assets/ShoppingCart.png';
import Profile from './Assets/Profile.png';
import Search from './Assets/Search.png';
import Like from './Assets/Like.png';
import Call from './Assets/Call.png';
import Email from './Assets/Email.png';
import Instagram from './Assets/Binstagram.png';
import Facebook from './Assets/Bfacebook.png';
import Youtube from './Assets/Byoutube.png';
import Twitter from './Assets/Btwitter.png';
import Arrow from './Assets/icn arrow-right icn-xs (1).png';
import Cafe from './Assets/unsplash_QANOF9iJlFs.png';
import link from './Assets/link.png';
import Brand1 from './Assets/col-md-2.png';
import Brand2 from './Assets/col-md-2 (1).png';
import Brand3 from './Assets/col-md-2 (2).png';
import Brand4 from './Assets/col-md-2 (3).png';
import Brand5 from './Assets/col-md-2 (4).png';
import Brand6 from './Assets/col-md-2 (5).png';
import twitter from './Assets/stwitter.png';
import facebook from './Assets/sfacebook.png';
import instagram from './Assets/ant-design_instagram-outlined.png';



// import None from './Assets/@none.png';
// import twitter from '../Assets/stwitter.png';
// import facebook from '../Assets/sfacebook.png';
// import instagram from '../Assets/ant-design_instagram-outlined.png';

const ProductP = () => {
  return (
    <div>


        <header className='header'>
            <div className="contact-info">
                <div className='call'>
                  <img src={Call} />
                  <span>(225) 555-0118</span>
                </div>
                <div className='email'>
                   <img src={Email} />
                   <span>michelle.rivera@example.com</span>
                </div>
            </div>
            <div className="banner">
                <span>Follow Us and get a chance to win 80% off</span>
            </div>
            <div className='socials'>
                <span>Follow Us : </span>
                <img src={Instagram} />
                <img src={Youtube} />
                <img src={Facebook} />
                <img src={Twitter} />
            </div>

        </header>
        <div className='navbar'>
            <div className='nav-logo'>
               <p>Bandage</p>
            </div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contract</li>
            <li>Pages</li>
        </ul>
        <div className="nav-login-cart">
            <div className='login'>
              <img src={Profile} />
              <button>Login/Register</button>
            </div>
            <Link to="/Home"><img src={Search} /></Link>
            <Link to="/Cart"><img src={ShoppingCart} /></Link>
            <img src={Like} />
            <div className="nav-cart-count">1</div>

            <div className="nav-like-count">1</div>
        </div>

      </div>

      <div className="under-nav">
        <div className="under-nav1">
          <ul>
            <li>
              Home <img src={Arrow} alt="" />
            </li>
          </ul>
            <Link to="/ProductP"><h6>Shop</h6> </Link>
        
        </div>
      </div>

      <div></div>

      <div className="product-discription-2">
        <ul>
          <li>Description</li>
          <li>Additional Information</li>
          <li>
            Reviews <img src={link} alt="" />
          </li>
        </ul>
      </div>

      <div>
        <div className="container">
          <div className="container-row">
            <div className="card">
              <h3>the quick fox jumps over </h3>
              <div>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
              <div>
                <p id="inside-card">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
              <div>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>

            <div className="card-img">
              <img src={Cafe} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="brands">
        <div className="brands-1">
            <img src={Brand1} alt="" />
            <img src={Brand2} alt="" />
            <img src={Brand3} alt="" />
            <img src={Brand4} alt="" />
            <img src={Brand5} alt="" />
            <img src={Brand6} alt="" />
        </div>
      </div>

      <div className="product-bandage">
        <h3>Bandage</h3>
        <div className='socialsB'>
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>

      <footer>
        <div className="inside-footer">
          <div className="inside-footer-1">
            <h5>Company Info</h5>
            <a href="">
              <p>About Us</p>
            </a>
            <a href="">
              <p>Carrier</p>
            </a>
            <a href="">
              <p>We are hiring</p>
            </a>
            <a href="">
              <p>Blog</p>
            </a>
          </div>
          <div className="inside-footer-1">
            <h5>Legal</h5>
            <a href="">
              <p>About Us</p>
            </a>
            <a href="">
              <p>Carrier</p>
            </a>
            <a href="">
              <p>We are hiring</p>
            </a>
            <a href="">
              <p>Blog</p>
            </a>
          </div>
          <div className="inside-footer-1">
            <h5>Features</h5>
            <a href="">
              <p>Business Marketing</p>
            </a>
            <a href="">
              <p>User Analytic</p>
            </a>
            <a href="">
              <p>Live Chat</p>
            </a>
            <a href="">
              <p>Unlimited Support</p>
            </a>
          </div>
          <div className="inside-footer-1">
            <h5>Resources</h5>
            <a href="">
              <p>IOS & Android</p>
            </a>
            <a href="">
              <p>Watch a Demo</p>
            </a>
            <a href="">
              <p>Customers</p>
            </a>
            <a href="">
              <p>API</p>
            </a>
          </div>
          <div className="inside-footer-1">
            <h5>Get In Touch</h5>
            <div className="input-group">
              <input
                type="Email"
                className="input-field"
                placeholder="Your Email"
              />
              <button className="subscribe-btn">Subscribe</button>
            </div>
            <p id="inside-footer-1-p">Lore imp sum dolor Amit</p>
          </div>
        </div>
        <div id="footer-end">
          <p>Made With Love By Finland All Right Reserved </p>
        </div>
      </footer>


      
    </div>
  )
}

export default ProductP
