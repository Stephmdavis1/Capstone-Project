import React from 'react'

import "./Highlights.css"
import salad from "../../icons_assets/greek salad.jpg"
import brushetta from "../../icons_assets/bruchetta.png"
import lemon from "../../icons_assets/lemon dessert.jpg"

export default function Highlights() {
  return (
  <>
  <section className='highlights_section'>
    <div className='specials_container'>
        <h1>This weeks specials!</h1>
        <button>Online Menu</button>
    </div>
    <div className='highlights_container'>
        <div className='highlights_card'>
            <img src={salad} alt="salad" />
            <div className='card_container'>
                <h3>Greek Salad</h3>
                <h4>$12.99</h4>
                <p>The famous Greek salad of crispy lettuce, pepper, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <button>Order a delivery</button>
            </div>
        </div>
        <div className='highlights_card'>
            <img src={brushetta} alt="brushetta" />
            <div className='card_container'>
                <h3>Brushetta</h3>
                <h4>$5.99</h4>
                <p>Our Brushetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                <button>Order a delivery</button>
            </div>
        </div>
        <div className='highlights_card'>
            <img src={lemon} alt="lemon dessert" />
            <div className='card_container'>
                <h3>Lemon Dessert</h3>
                <h4>$5.00</h4>
                <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <button>Order a delivery</button>
            </div>
        </div>
    </div>
  </section>
 </>
  )
}
