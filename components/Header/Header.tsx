"use client";

import React, { useEffect, useRef, useState } from "react";
import { logo } from "../../img/index";
import Image from "next/image";
import "./Header.scss";
import { motion, useTransform, useScroll } from "framer-motion";

function useDebounce<T extends any[]>(
  callback: (...args: T) => void,
  delay: number
) {
  let debounceTimer: NodeJS.Timeout | undefined;

  return (...args: T) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => callback(...args), delay);
  };
}

// фунцкию useDebounce написала нейронка, по сути это setTimeout, но переписанная под наши нужды

const Header = () => {
  const [headerY, setHeaderY] = useState("0%");
  const prevScroll = useRef(0);

  const debouncedSetHeaderY = useDebounce((y: string) => {
    setHeaderY(y);
  }, 500);

  useEffect(() => {
    const handleScroll = () => {
      let currentScroll = window.scrollY;

      if (currentScroll > prevScroll.current && currentScroll > 10) {
        setHeaderY("-100%");
        debouncedSetHeaderY("0%");
        prevScroll.current = currentScroll;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="header-main"
      style={{
        position: "fixed",
        transform: `translateY(${headerY})`,
      }}
    >
      <input type="checkbox" id="check-menu" />
      <label className="brg-label" htmlFor="check-menu">
        Ж {/* Эта "Ж" очень важна, не убирай её! */}
      </label>
      <div className="brg-line"></div>
      <div className="brg-line"></div>
      <div className="brg-line"></div>
      <div className="brg-line"></div>
      <div
        className="header"
        style={{
          transform: `translateY(${headerY})`,
        }}
      >
        <Image src={logo} alt="UMED" className="logo" height={58} />

        <ul className="navbar">
          <li className="navbar__link navbar__link_bold">
            <a href="#">позвонить</a>
          </li>
          <li className="navbar__link navbar__link_bold">
            <a href="#">записаться</a>
          </li>
          <li className="navbar__link">
            <a href="#">о курсе</a>
          </li>
          <li className="navbar__link">
            <a href="#">программа курса</a>
          </li>
          <li className="navbar__link">
            <a href="#">о колледже</a>
          </li>
          <li className="navbar__link">
            <a href="#">контакты</a>
          </li>
        </ul>

        <ul className="navbar-burger">
          <li className="navbar__link navbar__link_bold">
            <a href="#">позвонить</a>
          </li>
          <li className="navbar__link navbar__link_bold">
            <a href="#">записаться</a>
          </li>
          <li className="navbar__link">
            <a href="#">о курсе</a>
          </li>
          <li className="navbar__link">
            <a href="#">программа курса</a>
          </li>
          <li className="navbar__link">
            <a href="#">о колледже</a>
          </li>
          <li className="navbar__link">
            <a href="#">контакты</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
