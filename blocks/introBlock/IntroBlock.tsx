'use client'

import React, { useRef } from "react";
import Button from "@/components/button/Button";
import { useInView } from "framer-motion";
import "./IntroBlock.scss";

const IntroBlock = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="introBlock-main">
      <div className="introBlock-container" ref={ref} style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>
        <h2 className="introBlock-container__subTitle">
          ПРОФЕССИОНАЛЬНАЯ ПЕРЕПОДГОТОВКА
        </h2>
        <p className="introBlock-container__title">
          СЕСТРИНСКОЕ ДЕЛО В КОСМЕТОЛОГИИ
        </p>
        <h2 className="introBlock-container__subPrice">СТОИМОСТЬ ОБУЧЕНИЯ</h2>
        <h2 className="introBlock-container__price">5 490 ₽/мес</h2>
        <ul className="introBlock-list">
          <li className="introBlock-list__item">Диплом установленного образца</li>
          <li className="introBlock-list__item">150 ак.часов живой практики со специалистом</li>
          <li className="introBlock-list__item">Срок обучения 2,5 месяца</li>
        </ul>
        <Button children="Записаться" style="default_md" />
      </div>
    </div>
  );
};

export default IntroBlock;
