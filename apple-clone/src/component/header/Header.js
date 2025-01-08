import logo from "../../asset/images/icons/logo.png"
import search from "../../asset/images/icons/search-icon.png"
import cart from "../../asset/images/icons/cart.png"
import { useEffect, useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
// import { Navbar } from "react-bootstrap";

function Header() {
  useEffect(()=>{
    return () => {
      let options = $('.op');
      let slideop = $('.sli');

      options.on('click', function() {
          if (document.getElementById("op").className === "fa-solid fa-bars op") {
              document.getElementById("op").className = "fa-solid fa-xmark op";
              $('section').css('display', 'none');
              $('footer').css('display', 'none');
          } else {
              document.getElementById("op").className = "fa-solid fa-bars op";
              $('section').css('display', 'block');
              $('footer').css('display', 'block');
          };
          slideop.slideToggle();
      })
    }
  }, [])
  return (
    <>
    <header className="backGR py-1">
    <div className="container">
      <ul className="row navv">
        <li className="col-9 col-md aplogo">
          <Link to="/"><img src={logo} alt="" /></Link>
        </li>
        <li className="col-md d-none d-md-block iphone"><a className="iphone" href="/iphone/">iPhone</a></li>
        <li className="col-md d-none d-md-block"><a href="/mac/">Mac</a></li>
        <li className="col-md d-none d-md-block"><a href="#">ipad</a></li>
        <li className="col-md d-none d-md-block"><a href="#">Watch</a></li>
        <li className="col-md d-none d-md-block"><a href="#">Tv</a></li>
        <li className="col-md d-none d-md-block"><a href="#">Music</a></li>
        <li className="col-md d-none d-md-block"><a href="#">Support</a></li>
        <li className="col-1 col-md d-md-block">
          <Link to="#"><img src={search} alt="" /></Link>
        </li>
        <li className="col-1 col-md d-md-block">
          <Link to="/cart"><img src={cart} alt="" /></Link>
        </li>
        <li className="col-1 col-md d-md-none fontas">
          <i className="fa-solid fa-bars op" id="op"></i>
        </li>
      </ul>
    </div>
    </header>
    <div className="d-md-none sli" id="dropdownMenu">
      <div><a href="/iphone/">iPhone</a></div>
      <div>Mac</div>
      <div>ipad</div>
      <div>Store</div>
      <div>Airpod</div>
      <div>Macbook</div>
      <div>Watch</div>
      <div>Tv</div>
    </div>
    </>
  )
}

export default Header;