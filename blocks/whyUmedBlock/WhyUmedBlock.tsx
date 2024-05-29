"use client";

import React, { useRef } from "react";
import "./WhyUmedBlock.scss";
import Button from "@/components/button/Button";
import GalleryImage from "@/components/galleryImage/GalleryImage";
import Image from "next/image";
import { VK_logo } from "@/img";
import { useInView } from "framer-motion";

const WhyUmedBlock = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const refFirst = useRef(null);
  const isInViewFirst = useInView(refFirst, { once: true });
  const refSec = useRef(null);
  const isInViewSec = useInView(refSec, { once: true });

  return (
    <div className="whyUmedBlock">
      <div className="faq-container">
        <h2>ВСЁ ПРОСТО СУПЕР, НО:</h2>
        <ul className="faq-list">
          <li ref={ref}>
            <h3
            style={{
              marginTop: isInView ? 0 : 100,
              transition: '1s ease-in-out'
            }}
            >
              Я ТОЛЬКО ЗАКОНЧИЛ ОБУЧЕНИЕ НА МЕДИЦИНСКОГО РАБОТНИКА, ЗАЧЕМ МНЕ
              НУЖЕН ЭТОТ КУРС
            </h3>
            <p>
              Вы сможете увеличить свой заработок с минимальными затратами,
              работать в крупных салонах или на себя.
            </p>
          </li>
          <li>
            <h3>У МЕНЯ НЕТ СЕЙЧАС ДЕНЕГ</h3>
            <p>Ничего страшного, у нас есть возможность оформить рассрочку.</p>
          </li>
          <li>
            <h3>А ЕСЛИ МНЕ НЕ ХВАТИТ ПРАКТИКИ?</h3>
            <p>
              Это невозможно, потому что у нас 150 часов отданы практическим
              занятиям.
            </p>
          </li>
          <li>
            <h3>
              А ЧТО, ЕСЛИ Я НЕ СМОГУ ПРИЙТИ НА ЗАНЯТИЕ ПО УВАЖИТЕЛЬНОЙ ПРИЧИНЕ?
            </h3>
            <p>
              У нас есть видео лекции, к которым у вас есть доступ 24/7, вы
              сможете изучить пропущенный материал дома.
            </p>
          </li>
        </ul>
      </div>
      <div className="teachers-container" ref={refFirst}>
        <h2>ПРЕПОДАВАТЕЛИ КУРСА</h2>
        <p>
          ВСЕ НАШИ ПРЕПОДАВАТЕЛЬ ИМЕЮТ МЕДИЦИНСКОЕ ОБРАЗОВАНИЕ И ЯВЛЯЮТСЯ
          ПРАКТИКУЮЩИМИ СПЕЦИАЛИСТАМИ.
        </p>
        <div className="cards-wrapper"
        style={{
          marginTop: isInViewFirst ? 40 : 400,
          transition: '1s ease-in-out'
        }}
        >
          <div className="teacher-card">
            <img
              src="https://cdn-ru.bitrix24.ru/b11758382/landing/756/756538957e36752e2fe88b972cae3139/10kandakova_2x.webp"
              alt="Анна"
            />
            <div className="card-txt-wrapper">
              <h3>КАНДАКОВА АННА ИВАНОВНА</h3>
              <span>(теория+практика)</span>
              <p>специальность «Лечебное дело», действующий косметолог</p>
            </div>
          </div>
          <div className="teacher-card">
            <img
              src="https://cdn-ru.bitrix24.ru/b11758382/landing/79e/79e34dbccbf4b4881d8116c5e1a2bb39/9skorik_2x.webp"
              alt="Мария"
            />
            <div className="card-txt-wrapper">
              <h3>СКОРИК МАРИЯ ДМИТРИЕВНА</h3>
              <span>(теория)</span>
              <p>врач специальность «Лечебное дело», действующий косметолог</p>
            </div>
          </div>
        </div>
      </div>
      <div className="whyUmed-container">
        <h2>
          ПОЧЕМУ ВЫБИРАЮТ <span className="whyUmed-title-primary">UMED?</span>
        </h2>
        <p>
          Уральский медицинский колледж UMED - первый негосударственный
          медицинский колледж в Челябинской области.
          <br />
          <br />
          Мы помогаем осваивать медицинские профессии с 2018 года.Обучаем людей,
          которые хотят получить новое образование или переучиться на более
          востребованную профессию по специальностям «Фармация», «Лечебное
          дело», «Сестринское дело», «Медицинская оптика», «Стоматология
          профилактическая»
        </p>
        <div className="btn-wrapper">
          <Button
            children="САЙТ"
            style="default_md"
            href="https://umedcollege.ru/"
          />
          <Button
            children="ВКОНТАКТЕ"
            style="default_vk"
            href="https://vk.com/umedcollege"
          />
        </div>
      </div>
      <div className="whyUmed-gallery-container" ref={refSec}>
        <GalleryImage
          children="https://cdn-ru.bitrix24.ru/b11758382/landing/60c/60cda6800628528dbe0d5d94e8ae97cd/lerty_31_1x.png"
          styleImg="GalleryImage_lg"
        />
        <div className="gallery-container-right"
        style={{
          marginLeft: isInViewSec ? 20 : 50,
          transition: '2s ease-in-out'
        }}
        >
          <GalleryImage
            children="https://cdn-ru.bitrix24.ru/b11758382/landing/7b8/7b8fb95c62fc0abc75a4b802749cf7c7/lerty_32_1x.png"
            styleImg="GalleryImage_md"
          />
          <GalleryImage
            children="https://cdn-ru.bitrix24.ru/b11758382/landing/919/919e8fcdebf09505d4ae35f4ec0c98c0/lerty_33_1x.jpg"
            styleImg="GalleryImage_md"
          />
          <GalleryImage
            children="https://cdn-ru.bitrix24.ru/b11758382/landing/ba3/ba32a32d8fa29eeb2db7f2c99b6f4d02/Lechebnoe_delo_4_1_1x.png"
            styleImg="GalleryImage_md"
          />
          <GalleryImage
            children="https://cdn-ru.bitrix24.ru/b11758382/landing/61e/61efd8a8adf7f0aa557454ce92c9c1b8/sd4_3_1x.jpg"
            styleImg="GalleryImage_md"
          />
        </div>
      </div>
      <div className="docs-container">
        <div>
        <h2 className="docs-container-title">Наши документы</h2>
        <p>
          Уральский медицинский колледж осуществляет образовательную
          деятельность на основании государственной Лицензии, выданной
          Министерством образования и науки Челябинской области. Также у
          колледжа есть свидетельство о государственной аккредитации.
          <br /> <br />
          <a href="https://umedcollege.ru/upload/docs/Vypiska_iz_reestra_licenziy_no_L035-01235-74_00188322_Yaroslavskaya__1.pdf">
            Выписка из реестра лицензий
          </a>
          <br />
          <a href="https://umedcollege.ru/upload/docs/Akkreditaciya_s_prilozheniem.pdf">
            Свидетельство о государственной аккредитации АННПОО "Уральский
            медицинский колледж"
          </a>
        </p>
        <p className="docs-title-primary">
          ВСЕ, КТО ПРОСЛУШАЛ КУРС, <br />
          ПОЛУЧАТ ДИПЛОМ О ПРОФЕССИОНАЛЬНОЙ ПЕРЕПОДГОТОВКЕ УСТАНОВЛЕННОГО
          ОБРАЗЦА ПО ПРОГРАММЕ «СЕСТРИНСКОЕ ДЕЛО В КОСМЕТОЛОГИИ»
        </p>
        <p className="docs-paragraf">
          Данный диплом принимается работодателями как в государственных, так и
          в частных учреждениях.
          <br /> <br />
          <span>Диплом</span> о профессиональной переподготовке профессии <span>вносится в
          федеральный реестр (ФИС ФРДО)</span>
          <br /> <br />
          <span>Аккредитация</span> проходит на базе Уральского медицинского колледжа <span>UMED</span>
        </p>
        </div>
        <img src="https://cdn-ru.bitrix24.ru/b11758382/landing/006/006622b93da740751bddcc6ba572d80f/diplom_2x.webp" alt="diplom" />
      </div>
      <div className="sell-container">
        <div className="price-wrapper">
          <span>СТОИМОСТЬ</span>
          <span>5 490 ₽/МЕСЯЦ</span>
          <span>при оформлении беспроцентной рассрочки в банке-партнере</span>
          <span>ПОЛНАЯ СТОИМОСТЬ КУРСА 54 900 ₽</span>
          <div className="price-underline"></div>
          <span>Срок обучения - <b>2,5 месяца</b></span>
          <span>Группа - <b>14 человек</b></span>
          <span>Форма обучения - <b>очная, с применением ДОТ</b></span>
          <p>
            Рассрочка — это форма кредита (займа), при которой переплаты по
            кредиту (займу) не возникает за счет скидки на товар,
            предоставляемой продавцом. Процентная ставка по продукту «Рассрочка»
            — от 6,709% до 70% годовых. Минимальная сумма — 3000 р.,
            максимальная сумма — 500 000 р. Срок предоставления — от 3 до 36
            месяцев. Ваш тариф и размер ежемесячного платежа будет определен по
            результатам рассмотрения заявки. Подробнее на сайте www.tinkoff.ru.
            АО «Тинькофф Банк», ООО «Микрофинансовая компания „Т‑Финанс».
          </p>
        <Button children="Записаться" style="default_bg" />
        </div>
      </div>
      <div className="vk-container">
        <div className="vk-txt-wrapper">
          <h2>
            ЕСЛИ ОСТАЛИСЬ ВОПРОСЫ, ПИШИТЕ В МЕССЕНДЖЕР!
          </h2>
          <div className="vk-btn-wrapper">
            <Image src={VK_logo} alt="vk" className="vk-logo" />
            <Button children="НАПИСАТЬ" style="primary_vk" href="https://vk.com/al_im.php?media=&sel=-130300428" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUmedBlock;
