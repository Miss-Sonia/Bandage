import React from 'react'
import './HeroCard.css'

const HeroCard = ({ product}) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <span>{product.items} Items</span>
        <h2>{product.title}</h2>
        <a href="#readmore">Read More</a>
      </div>
    </div>
  )
}

export default HeroCard
