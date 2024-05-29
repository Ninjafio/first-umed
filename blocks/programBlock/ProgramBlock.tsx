"use client";

import React, { useRef } from "react";
import {
  bonus_fiImg,
  bonus_foImg,
  bonus_seImg,
  bonus_thImg,
  plus,
} from "@/img/index";
import "./ProgramBlock.scss";
import Image from "next/image";
import Button from "@/components/button/Button";
import GalleryImage from "@/components/galleryImage/GalleryImage";
import { useInView } from "framer-motion";

const ProgramBlock = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const refFirst = useRef(null);
  const isInViewFirst = useInView(refFirst, { once: true });
  const refSec = useRef(null);
  const isInViewSec = useInView(refSec, { once: true });

  return (
    <div className="ProgramBlock">
      <h2 className="ProgramBlock-title">ПРОГРАММА КУРСА</h2>
      <div className="ProgramBlock-container">
        <div className="container-title">
          <div className="inv-rect" />
          <span>
            Косметология.
            <br /> Нормативно- правовые основы оказания медицинской помощи по
            профилю "косметология"
          </span>
          <Image src={plus} alt="+" width={30} className="plus-img" />
        </div>
        <div className="container-title">
          <div className="inv-rect" />
          <span>Основы дерматологии</span>
          <Image src={plus} alt="+" width={30} className="plus-img" />
        </div>
        <div className="container-title">
          <div className="inv-rect" />
          <span>
            Средства и методы коррекции эстетических недостатков покровных
            тканей человека.
          </span>
          <Image src={plus} alt="+" width={30} className="plus-img" />
        </div>
        <div className="container-title">
          <div className="inv-rect" />
          <span>Основы ухода за кожей лица и тела</span>
          <Image src={plus} alt="+" width={30} className="plus-img" />
        </div>
        <div className="container-title">
          <div className="inv-rect" />
          <span>
            Коррекция эстетических недостатков отдельных анатомических областей
            тела человека
          </span>
          <Image src={plus} alt="+" width={30} className="plus-img" />
        </div>
        <div className="container-title">
          <div className="inv-rect" />
          <span>Основы сердечно-легочной реанимации</span>
          <Image src={plus} alt="+" width={30} className="plus-img" />
        </div>
        <Button children="Записаться" style="default_bg" />
      </div>

      <div className="bonus-container-background" ref={ref}>
        <div className="bonus-container">
        <div
          className="bonus-item"
          style={{
            paddingTop: isInView ? 0 : 200,
            transition: "all 1s ",
          }}
        >
          <Image src={bonus_fiImg} alt="bonus" />
          <h2>Диплом</h2>
          <span>О ПРОФЕССИОНАЛЬНОЙ ПЕРЕПОДГОТОВКЕ</span>
          <p>
            По окончании обучения выдается диплом о профессиональной
            переподготовке, который будет свидетельствовать о вашем опыте и
            навыках
          </p>
        </div>
        <div
          className="bonus-item"
          style={{
            paddingTop: isInView ? 0 : 200,
            transition: "all 1s ",
          }}
        >
          <Image src={bonus_seImg} alt="bonus" />
          <h2>Форма обучения</h2>
          <span>ОЧНАЯ, С ПРИМЕНЕНИЕМ ДОТ</span>
          <p>
            Мы проводим очное обучение с частичным применением дистанционных
            образовательных технологий, чтобы вы могли просматривать их в любое
            удобное вам время
          </p>
        </div>
        <div
          className="bonus-item"
          style={{
            paddingTop: isInView ? 0 : 200,
            transition: "all 1s ",
          }}
        >
          <Image src={bonus_thImg} alt="bonus" />
          <h2>Практические занятия</h2>
          <span>В УДОБНОЕ ВРЕМЯ</span>
          <p>
            Мы проводим практические занятия в утреннее и вечернее время. Вам
            остается только выбрать подходящее для вас время
          </p>
        </div>
        <div
          className="bonus-item"
          style={{
            paddingTop: isInView ? 0 : 200,
            transition: "all 1s ",
          }}
        >
          <Image src={bonus_foImg} alt="bonus" />
          <h2>Расходные материалы</h2>
          <span>ВХОДЯТ В СОТОИМОСТЬ КУРСА</span>
          <p>
            Расходные материалы, оборудование и косметика на время обучения
            предоставляются нами. Ничего дополнительно платить не нужно!
          </p>
        </div>
        </div>
      </div>
      <div className="gallery-container">
        <div>
          <h2>И САМОЕ ИНТЕРЕСНОЕ</h2>
          <p>
            Все практические занятия проходят в очной форме, в присутствии
            специалиста, где даётся возможность отработать на модели данные на
            курсе методики и техники. <br />
            <br />
            Как это будет:
          </p>
        </div>
        <div className="images-wrapper-top" style={{overflow: 'hidden'}}>
          <div className="images-wrapper-left" ref={refFirst}
          style={{
            marginRight: isInViewFirst ? 20 : 300,
            transition: '1s'
          }}
          >
            <GalleryImage
              children="https://cdn-ru.bitrix24.ru/b11758382/landing/59d/59d80fc5ee4dddad1b3c95acaf5d0577/DSCN1359_1x.jpg"
              styleImg="GalleryImage_md"
            />
            <GalleryImage
              children="https://cdn-ru.bitrix24.ru/b11758382/landing/6e8/6e8e41031f03bb32591488271814f486/lerty.b_7_iz_77_1x.jpg"
              styleImg="GalleryImage_md"
            />
          </div>
          <GalleryImage
            children="https://cdn-ru.bitrix24.ru/b11758382/landing/c87/c87786aeedb38719088a6c2902204342/lerty.b_63_iz_77_1x.jpg"
            styleImg="GalleryImage_lg"
          />
          <div className="images-wrapper-right" ref={refFirst}
          style={{
            marginLeft: isInViewFirst ? 20 : 300,
            transition: '1s ease-in-out'
          }}>
            <GalleryImage
              children="https://cdn-ru.bitrix24.ru/b11758382/landing/547/547a353d2d5db23baa0648d54169cacf/DSC_0008_1x.jpg"
              styleImg="GalleryImage_md"
            />
            <GalleryImage
              children="https://cdn-ru.bitrix24.ru/b11758382/landing/02d/02d44fd4b05c6eca5ef47c5abe12bad8/DSCN0969_1x.jpg"
              styleImg="GalleryImage_md"
            />
          </div>
        </div>
        <div className="images-wrapper-bottom">
          <GalleryImage
            children="https://cdn-ru.bitrix24.ru/b11758382/landing/d9e/d9e6ef90bdcf24ddf421f7da9e80ca48/kNaH4nMnKP0_1x.jpg"
            styleImg="GalleryImage_lg"
          />
          <div className="images-wrapper-left" ref={refSec}
          style={{
            marginLeft: isInViewSec ? 20 : 200,
            transition: '1s ease-in-out'
          }}>
            <GalleryImage
              children="https://cdn-ru.bitrix24.ru/b11758382/landing/2d9/2d957cba18b43e8fcdf9c8078a9c3212/Rc7KAqXjQtY_1x.jpg"
              styleImg="GalleryImage_md"
            />
            <GalleryImage
              children="https://cdn-ru.bitrix24.ru/b11758382/landing/6d2/6d29309da7bee823f80747c6494dbfb9/why-we-1_1x.jpg"
              styleImg="GalleryImage_md"
            />
          </div>
          <div className="images-wrapper-right">
            <GalleryImage
              children="https://cdn-ru.bitrix24.ru/b11758382/landing/60c/60c72ebc47d6a2a3a9b94580149203f1/DSCN0974_1x.jpg"
              styleImg="GalleryImage_md"
            />
            <GalleryImage
              children="https://cdn-ru.bitrix24.ru/b11758382/landing/da9/da937654f773bdca7e7f32c11945c048/3ZB_Q4sJfcs_1x.jpg"
              styleImg="GalleryImage_md"
            />
          </div>
        </div>
      </div>
      <div className="sell-container">
        <div className="title-wrapper">
          <h2>ЗАПИСАТЬСЯ НА КУРС ВЫ МОЖЕТЕ ЗДЕСЬ:</h2>
          <div className="title-underline"></div>
        </div>
        <div className="price-wrapper">
          <span>СТОИМОСТЬ</span>
          <span>5 490 ₽/МЕСЯЦ</span>
          <span>при оформлении беспроцентной рассрочки в банке-партнере</span>
          <span>ПОЛНАЯ СТОИМОСТЬ КУРСА 54 900 ₽</span>
          <div className="price-underline"></div>
          <span>
            Срок обучения - <b>2,5 месяца</b>
          </span>
          <span>
            Группа - <b>14 человек</b>
          </span>
          <span>
            Форма обучения - <b>очная, с применением ДОТ</b>
          </span>
          <Button children="Записаться" style="default_bg" />
        </div>
      </div>
    </div>
  );
};

export default ProgramBlock;
