import React, { useState } from "react";
import * as s from "./Navbar.module.scss";

const Navbar = () => {
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  return (
    <nav className={s.navbar}>
      <div className={s.logo}>musya.brovkina</div>
      <ul className={s.navLinks}>
        <li
          className={s.navItem}
          onMouseEnter={() => setIsServicesHovered(true)}
          onMouseLeave={() => setIsServicesHovered(false)}
        >
          <a href="#services">
            Услуги <span className={s.arrow}>↓</span>
          </a>
          {isServicesHovered && (
            <div className={s.servicesPanel}>
              <ul>
                <li><a href="#service1">Услуга 1</a></li>
                <li><a href="#service2">Услуга 2</a></li>
                <li><a href="#service3">Услуга 3</a></li>
              </ul>
            </div>
          )}
        </li>
        <li><a href="#about">О нас</a></li>
        <li><a href="#gallery">Галерея</a></li>
        <li><a href="#contacts">Контакты</a></li>
      </ul>
      <button className={s.bookButton}>Записаться</button>
    </nav>
  );
};

export default Navbar;
