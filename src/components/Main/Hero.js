import React from 'react'

import "./Hero.css";
import restaurant from "../../icons_assets/restauranfood.jpg";

export default function Hero() {
  return (
    <>
      <main>
        <div className='hero-title-container'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button>Reserve a table</button>
          </div>
          <div className='hero-image-container'>
            <img src={restaurant} alt="restaurant" className='restaurant' />
          </div>
        </main>
    </>
  )
}
