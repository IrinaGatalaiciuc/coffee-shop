import React from 'react'
import logoimg from "../images/revo_logo.png"
import mainimg from "../images/header-img.png"
import cartimg from "../images/cart.png"
// import "../styles/header.css"
import headerstyle from "../styles/header.module.css"
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Header() {
  return (
    <div className={headerstyle.header}>
      <div className={headerstyle.logo}>
        <div className={headerstyle.logo_img}>
          <img src={logoimg} alt="logo" />
        </div>
        <div className={headerstyle.main_text}>
          <h1>YOUR <br /><span>PERSONALIZED</span>  <br /> COFFEE</h1>
        </div>
      </div>

      <div className={headerstyle.main_img}>
        <img src={mainimg} alt="main" />
      </div>


      <div className={headerstyle.navigation}>
        <div className={headerstyle.cart}>
          <img src={cartimg} alt="cart-icon" />
        </div>
        <div className={headerstyle.nav_list}>
          <span>TRANG CHỦ</span>
          <ul>
            <li><Link activeClass="active" to="coffee" spy={true} smooth={true} offset={0} duration={500}>COFFEE</Link> </li>
            <li>
            <Link activeClass="active" to="phin" spy={true} smooth={true} offset={0} duration={500}>PHIN MẠ MÀU</Link>
            </li>
            <li>
            <Link activeClass="active" to="combo" spy={true} smooth={true} offset={0} duration={500}>COMBO PHIN PHÊ</Link>
            </li>
            <li>
            <Link activeClass="active" to="giftset" spy={true} smooth={true} offset={0} duration={500}>GIFTSET</Link>
            </li>
            <li>
            <Link activeClass="active" to="lien" spy={true} smooth={true} offset={0} duration={500}>LIÊN HỆ</Link>
            </li>
          </ul>
        </div>
      </div>



    </div>
  )
}

export default Header