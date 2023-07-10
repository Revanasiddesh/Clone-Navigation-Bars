import React from 'react'
import abc from './amazon.module.css'
import img from './Amazon-India.jpg'
import ind from './Flag_of_India.svg.webp'

const Amazan = () => {
  return (
    <section id={abc.nav}>
        <article>
            <div className={abc.logo}>
                <img src={img} alt="" />
                
            </div>
            <div className={abc.loc}>
                <div className={abc.out}>
                <i class="fa-solid fa-location-dot"><sup>Hello</sup></i>
             
                 <p>Select your address</p>
                 </div>
            </div>
            <div className={abc.ser}>
                <div className={abc.box}>
                    <p>All <i class="fa-solid fa-caret-down"></i></p>
                    <input type="text"  placeholder='Search Amazon.in'/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

            </div>
            <div className={abc.en}>
                <div className={abc.fl}>
                    <img src={ind} alt="" />
                    <p>EN</p>
                    <i class="fa-sharp fa-solid fa-caret-down"></i>
                </div>

            </div>

            <div className={abc.box1}>
             
                   <p>Hello,sign in <span>Account&List</span></p>
                    <i class="fa-sharp fa-solid fa-caret-down"></i>

            </div>

            <div className={abc.box2}>
                <p>Returns <br /><span>& Orders</span></p>

            </div>
            <div className={abc.box3}>
               <div className={abc.bo}>
               <i class="fa-solid fa-cart-shopping"></i>
               <p>Cart</p>

               </div>

            </div>

           
           

        </article>
    </section>
    
  )
}

export default Amazan
