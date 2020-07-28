import React, { Component, useState } from 'react';
import black from '../black.jpg'
import blackbot from '../blackbot.jpg'
import bluebot from '../bluebot.jpg'
import bluetop from '../bluetop.jpg'
import redbot from '../redbot.jpeg'
import redtop from '../redtop.jpg'
import whitebot from '../whitebot.jpg'
import monoblacktop from '../monoblacktop.jpg'
import monoblackbot from '../monoblackbot.jpg'
import s from '../App.module.css'

 function Products() {
    
    return (
        <div сlassName={s.container}>
            <div className={s.image}>
                <img src={black} alt='black'/>
                <h3>Black top</h3>
                <h3>2999p</h3>
                <a className='addToCart cart1' href='#'>Add to cart</a>
            </div>
            <div className='image'>
                <img src={blackbot} alt='black'/>
                <h3>Black bot</h3>
                <h3>2699p</h3>
                <a className='addToCart cart2' href='#'>Add to cart</a>
            </div>
        </div>
    )
}

export default Products