"use client";

import React from "react";
import "./ContactBlock.scss";
import type { YMapLocationRequest } from "@yandex/ymaps3-types";
import Map from "@/components/Map";
import Button from "@/components/button/Button";
import Image from "next/image";
import { footer_btns } from "@/img";



const ContactBlock = () => {

  return (
    <>
    <div className="ContactBlock">
      <div className="contact-container">
        <h2>КОНТАКТЫ</h2>
          <div className="title-underline"></div>
      <p>
        АННПОО «Уральский медицинский колледж» <br /> <br />
        Адрес: 454092, г. Челябинск, ул. <br /> <br />
        Художника Русакова, д. 7В.  <br /> <br />
        Телефон: 8 (351) 202-02-56  <br /> <br />
        Лицензия на осуществление образовательной деятельности № 14202 от 28 мая 2018 года
        выдана Министерством образования и науки Челябинской области.
      </p>
      </div>
    </div>
    <div className="mapBlock">
      <Map />
    </div>
    <div className="footer-container">
      <div className="footer-top">
        <button className="footer-top__btn">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</button>
      </div>
      <div className="footer-bottom">
        <Button children="ЗАПИСАТЬСЯ" style="default_md"></Button>
        <div className="footer-bottom-wrapper">
          <span>
            @ 2024 UMED
          </span>
            <button className="footer-bottom__btn">umedcollege.ru</button>
            <p className="bottom__par">
              Горячая линия <br /><br />
              <b>+7 (351) 202-02-56</b>
            </p>
              <Image src={footer_btns} alt="VK, OK" className="footer__btns" />
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactBlock;
