import React from 'react';
import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useGetPostsQuery } from "../Slices/apiSlice";
import { removeFromCart, increment, decrement } from "../Slices/appSlice";
import './Cart.css';
import { Link } from 'react-router-dom';
import ShoppingCart from '../Components/Assets/ShoppingCart.png';
import Profile from '../Components/Assets/Profile.png';
import Search from '../Components/Assets/Search.png';
import Like from '../Components/Assets/Like.png';
import Call from '../Components/Assets/Call.png';
import Email from '../Components/Assets/Email.png';
import Instagram from '../Components/Assets/Binstagram.png';
import Facebook from '../Components/Assets/Bfacebook.png';
import Youtube from '../Components/Assets/Byoutube.png';
import Twitter from '../Components/Assets/Btwitter.png';
import Arrow from '../Components/Assets/icn arrow-right icn-xs (1).png';
import delete1 from "../Components/Assets/mdi_delete-outline.png";
import star1 from "../Components/Assets/stars (1).png";
import plus from "../Components/Assets/+.png";

const Cart = () => {

    const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const quantities = useSelector((state) => state.cart.quantities);
  const { data: products, error, isLoading } = useGetPostsQuery();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleRemoveImage = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increment(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decrement(itemId));
  };


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

      <div className="product-cards">
        <div className="product-card-1">
          <h3 className="shopping-cart">Shopping Cart</h3>
          <div className="shopping-cart-details">
            <div>
              <p>Item Details</p>
            </div>
            <div>
              <p>Quantity</p>
            </div>
            <div>
              <p>Price</p>
            </div>
          </div>


          <div className="cards-container">
            <div className="cart-item-product">
              <div className="cart-items">
                {cart.length > 0 ? (
                  cart.map((item, index) => (
                    <div key={index} className="cart-item">
                      <div>
                        {item.images && item.images.length > 1 ? (
                          <img src={item.images[1]} alt={item.title} />
                        ) : (
                          <img src="default_image.png" alt="default" />
                        )}
                        <div>
                          <button
                            className="remove-item"
                            onClick={() => handleRemoveImage(item.images)}
                          >
                            <img src={delete1} alt="" />
                            <span> REMOVE</span>
                          </button>
                        </div>
                      </div>
                      <div className="item-details">
                        <h5>{item.title}</h5>
                        <p id="stock">
                          {item.stock} <span>In Stock</span>{" "}
                        </p>
                        <p id="rating-cart">
                          <img src={star1} alt="" />
                          <span> {item.rating} Reviews</span>
                        </p>
                      </div>
                      <div className="quantity-controls">
                        <button
                          id="decreaseQ"
                          onClick={() => handleDecreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={quantities[item.id]}
                          readOnly
                        />
                        <button
                          id="increaseQ"
                          onClick={() => handleIncreaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <div className="calculated-price">
                        <p id="price-figure">
                          ${item.price * quantities[item.id]}
                        </p>
                        <div className="calculated-price-1">
                          <p id="figure">$259.98</p>
                          <p id="figureX">
                            {" "}
                            <img src={plus} alt="" />{" "}
                            <input
                              type="text"
                              value={quantities[item.id]}
                              readOnly
                            />{" "}
                            <span>Item</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Your cart is empty</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="addtocart-items">
          <div className="cart-items">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div key={index} className="summary-cart-item">
                  <div id="cart-summary">
                    <h4>Order Summary</h4>
                    <p> <input type="text" value={quantities[item.id]} readOnly /> <span>Item</span></p>
                  </div>
                  <div id="cart-delivery">
                    <h6>Delivery Charges</h6>
                    <div>
                      <p>
                        Add your delivery address to checkout to see delivery
                        charges.
                      </p>
                    </div>
                  </div>
                  <div id="cart-subtotal">
                    <h4>Subtotal</h4>
                    <p id="cart-price-figure">${item.price * quantities[item.id]}</p>
                  </div>
                  <div id="cart-total">
                    <h3>Total</h3>
                    <p id="cart-price-figure-1">${item.price * quantities[item.id]}</p>
                  </div>
                  <p id="cart-delivery-carges">Excluding Delivery Charges</p>
                  <button>Proceed to Checkout</button>
                </div>
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        </div>
      </div>

      <div className="BESTSELLER-PRODUCTS">
        <div className="BESTSELLER-PRODUCT-1">
          <h3>PRODUCTS RELATED TO ITEMS IN YOUR CART</h3>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error loading products</p>}
          {products && (
            <div className="product-products-grid">
              {products.products.slice(0, 8).map((product) => (
                <div key={product.id} className="product-product-item">
                  <img
                    className="product-section-images"
                    src={product.images[0]}
                    alt={product.title}
                  />
                  <h5>{product.title}</h5>
                  <p id="product-product-category">{product.category}</p>
                  <div id="product-product-amount">
                    <p id="product-product-price">${product.price}</p>
                    <p id="product-discount">{product.discountPercentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bandage">
        <h3>Bandage</h3>
        <div>
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>

      <footer>
        <div className="inner-footer">
          <div className="inner-footer-1">
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
          <div className="inner-footer-1">
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
          <div className="inner-footer-1">
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
          <div className="inner-footer-1">
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
          <div className="inner-footer-1">
            <h5>Get In Touch</h5>
            <div className="input-group">
              <input
                type="Email"
                className="input-field"
                placeholder="Your Email"
              />
              <button className="subscribe-btn">Subscribe</button>
            </div>
            <p id="inner-footer-1-p">Lore imp sum dolor Amit</p>
          </div>
        </div>
        <div id="product-last-footer">
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </footer>

          
      
    </div>
  )
}

export default Cart
