import React from 'react'
import abc from './mytra.module.css'
import img from './mytra_pic.jpeg'

const MytraP = () => {
    return (
        <section id={abc.nav}>
            <article>
                <div className={abc.logo}><img src={img} alt="" /></div>
                <div className={abc.menu}>
                    <ul>
                        <li><a href="">MEN</a></li>
                        <li><a href="">WOMEN</a></li>
                        <li><a href="">KIDS</a></li>
                        <li><a href="">HOME&LIVING</a></li>
                        <li><a href="">BEAUTY</a></li>
                        <li><a href="">STUDIO<sup>New</sup></a></li>
                    </ul>
                </div>
                <div className={abc.search}>
                    <div className={abc.box}>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        < input type="text" placeholder='search for product,brandsand more' />

                    </div>

                </div>

                <div className={abc.menu2}>
                    <ul>
                          <li>
                            <i class="fa-solid fa-user"></i>
                            <a href="">Profile</a>
                        </li>
                        <li>
                            <i class="fa-regular fa-heart"></i>
                            <a href="">Wishlist</a>
                        </li>
                        <li>
                            <i class="fa-solid fa-bag-shopping"></i>
                            <a href="">Bag</a>
                        </li>
                    </ul>
                </div>


            </article>

        </section>


    )
}

export default MytraP
