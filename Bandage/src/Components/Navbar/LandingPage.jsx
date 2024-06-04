import React from 'react'
import { useState } from "react";
import './LandingPage.css';
import { increment } from "../../Slices/appSlice";
import { useDispatch } from "react-redux";
import { useGetPostsQuery } from "../../Slices/apiSlice";

// import { increment } from "../Assets/appSlice.js";
// import { useDispatch } from "react-redux";
// import { useGetPostsQuery } from "../Assets/apiSlice";
import HeroCard from './HeroCard';
import { Link, NavLink } from 'react-router-dom';
import ShoppingCart from '../Assets/ShoppingCart.png';
import Profile from '../Assets/Profile.png';
import Search from '../Assets/Search.png';
import Like from '../Assets/Like.png';
import Call from '../Assets/Call.png';
import Email from '../Assets/Email.png';
import Instagram from '../Assets/Binstagram.png';
import Facebook from '../Assets/Bfacebook.png';
import Youtube from '../Assets/Byoutube.png';
import Twitter from '../Assets/Btwitter.png';
import image1 from '../Assets/PinkPlates.png';
import image2 from '../Assets/FlowerPot.png';
import image3 from '../Assets/HangingLight.png';
import image4 from '../Assets/ClayPots.png';
// import Reader from '../Assets/BookReader.png';
// import Book from '../Assets/Book.png';
// import Arrow from '../Assets/Arrow.png';
import None from '../Assets/@none.png';
import Clock from '../Assets/icon akar-icons-calendar.png';
import Comment from '../Assets/icon ant-design-area-chart-outlined.png';
import Tag from '../Assets/tag.png';
import Room1 from '../Assets/unsplash_hHdHCfAifHU.png';
import Room2 from '../Assets/unsplash_tVEqStC2uz8.png';
import Room3 from '../Assets/unsplash_dEGu-oCuB1Y.png';
import User from '../Assets/user.1.png';
import Stars from '../Assets/stars.png';
import Camera from '../Assets/unsplash_0y8p69vwIYM.png';
import Lady1 from '../Assets/unsplash_ah7yIXWrtKs.png';
import Alley from '../Assets/unsplash_6_dx4H4yi1Y.png';
import Pastry from '../Assets/unsplash_GHztzvLLOdQ.png';
import Lady2 from '../Assets/unsplash_UUTOuXqaExk.png';
import Writer from '../Assets/unsplash_rhn8ff1G_QY.png';
import Mountain from '../Assets/unsplash_jo40QKbxUP0.png';
import Forrest from '../Assets/unsplash_QLGA5Zv3doo.png';
import Blue from '../Assets/unsplash_1R1ecHV4i0Y.png';
import twitter from '../Assets/stwitter.png';
import facebook from '../Assets/sfacebook.png';
import instagram from '../Assets/ant-design_instagram-outlined.png';






const LandingPage = () => {

  const { data, error, isLoading } = useGetPostsQuery();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [menuOpen, setMenuOpen] = useState(false);

  const incrementHandler = (e) => {
    e.preventDefault();
    dispatch(increment(input));
    setInput("");
  };

  const handleViewMore = () => {
    setVisibleProducts((prev) => prev + 10);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


    

    

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
            <Link to="/ProductP"><img src={Search} /></Link>
            <Link to="/Cart"><img src={ShoppingCart} /></Link>
            <img src={Like} />
            <div className="nav-cart-count">1</div>

            <div className="nav-like-count">1</div>
        </div>
        
    </div>



<div className="hero-section">
        <div className="hero-image">
          <div>
            <div className="inner-hero inner-hero-1">
              <h6>
                <span className="items">Items</span>
              </h6>
              <h2>FURNITURE</h2>
              <h6>Read</h6>
            </div>
            <img src={image1} alt="" />
          </div>
        </div>
        <div>
          <div>
            <div className="inner-hero">
              <h6>
                <span className="items">Items</span>
              </h6>
              <h3>FURNITURE</h3>
              <h6>Read</h6>
            </div>
            <img id="inner-hero-img" src={image2} alt="" />
          </div>
          <div className="inner-hero-section">
            <div >
              <div className="inner-hero">
                <h6>
                  <span className="items">Items</span>
                </h6>
                <h3>FURNITURE</h3>
                <h6>Read</h6>
              </div>
              <img className="heroimage3" src={image3} alt="" />
            </div>
            <div id="hero-1">
              <div className="inner-hero">
                <h6>
                  <span className="items">Items</span>
                </h6>
                <h3>FURNITURE</h3>
                <h6>Read</h6>
              </div>
              <img src={image4} alt="" />
            </div>
          </div>
        </div>
      </div>

      


<section>
        <div className="mobile-product">
          <h4>Featured Products</h4>
          <h3>BESTSELLER PRODUCTS</h3>
          <p>Problems trying to resolve the conflict between </p>
        </div>

        <ul className="product-grid">
          {data &&
            data.products &&
            data.products.slice(0, visibleProducts).map((product) => (
              <li className="product-item" key={product.id}>
                <NavLink to={`/ProductP/${product.id}`} className="product-link">
                  <img
                    className="section-images"
                    src={product.images[0]}
                    alt={product.title}
                  />
                  <h5>{product.title}</h5>
                  <p>{product.category}</p>
                  <div id="product-amount">
                    <p id="product-price">${product.price}</p>
                    <p id="discount">{product.discountPercentage}%</p>
                  </div>
                </NavLink>
              </li>
            ))}
        </ul>

        {data && data.products && visibleProducts < data.products.length && (
          <button className="view-more-btn" onClick={handleViewMore}>
            LOAD MORE PRODUCTS
          </button>
        )}
      </section>

      <div className="container">
        <h6>Practice Advice</h6>
        <h2>Featured Posts</h2>
        <div className="inside-container">
          <div className="inside-container-1">
            <div className="tag">
              {" "}
              <img src={Tag} alt="" />
            </div>
            <img src={Room1} alt="" />
            <div>
              <span className="google">Google</span>
              <span className="trending"> Trending</span>
              <span className="new"> New</span>
              <h4>Loudest à la Madison #1 (L'integral)</h4>
              <p>
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div>
                <div className="calender">
                  <div>
                    <p>
                      <img src={Clock} alt="" />
                      22 April 2021
                    </p>
                  </div>
                  <div>
                  <p className="comments">
                      <img src={Comment} alt="" />
                      10 comments
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="learn-more">
              <h6>
                Learn More <img src={None} alt="" />
              </h6>
            </div>
          </div>
          <div className="inside-container-1">
            <div className="tag">
              {" "}
              <img src={Tag} alt="" />
            </div>
            <img src={Room2} alt="" />
            <div>
              <span className="google">Google</span>
              <span className="trending"> Trending</span>
              <span className="new"> New</span>
              <h4>Lou dest à la Madison #1 (L'integral)</h4>
              <p>
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div>
                <div className="calender">
                  <div>
                    <p>
                      <img src={Clock} alt="" />
                      22 April 2021
                    </p>
                  </div>
                  <div>
                    <p className="comments">
                      <img src={Comment} alt="" />
                      10 comments
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="learn-more">
              <h6>
                Learn More <img src={None} alt="" />
              </h6>
            </div>
          </div>
          <div className="inside-container-1">
            <div className="tag">
              {" "}
              <img src={Tag} alt="" />
            </div>
            <img src={Room3} alt="" />
            <div>
              <span className="google">Google</span>
              <span className="trending"> Trending</span>
              <span className="new"> New</span>
              <h4>Loudest à la Madison #1 (L'integral)</h4>
              <p>
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div>
                <div className="calendar">
                  <div>
                    <p>
                      <img src={Clock} alt="" />
                      22 April 2021
                    </p>
                  </div>
                  <div>
                    <p className="comments">
                      <img src={Comment} alt="" />
                      10 comments
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="learn-mores">
              <h6>
                Learn More <img src={None} alt="" />
              </h6>
            </div>
          </div>
        </div>
      </div>

      

      <div className="reviews">
        <div className="inside-reviews">
          <h3>What they say about us</h3>
          <div id="reviewer-image">
            <img src={User} alt="" />
            <img id="stars" src={Stars} alt="" />
          </div>
          <h6>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </h6>
          <p id="reg">Regina Miles</p>
          <p id="designer">Designer</p>
        </div>
        <div className="review-images">
          <img src={Camera} alt="" />
          <img src={Lady1} alt="" />
          <img src={Alley} alt="" />
          <img src={Pastry} alt="" />
          <img src={Lady2} alt="" />
          <img src={Writer} alt="" />
          <img src={Mountain} alt="" />
          <img src={Forrest} alt="" />
          <img src={Blue} alt="" />
        </div>
        
        </div>

        <div></div>

      <div className="designing-better">
        <div className="inside-designing">
          <h6>Designing Better Experience</h6>
          <h2>Problems trying to resolve the conflict between </h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:{" "}
          </p>
          <h3>$16.48</h3>
          <button id="better-btn">ADD YOUR CALL TO ACTION</button>
        </div>
      </div>

      <div className="before-footer">
        <h3>Bandage</h3>
        <div>
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

export default LandingPage
