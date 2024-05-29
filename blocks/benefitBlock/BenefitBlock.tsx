"use client";

import React, { useRef } from "react";
import {
  BenefitImg,
  answers_firstImg,
  answers_secImg,
  answers_thirdImg,
  answers_fourImg,
} from "../../img/index";
import "./BenefitBlock.scss";
import Image from "next/image";
import { useInView } from "framer-motion";
import Button from "@/components/button/Button";
import { program_data } from "@/data/Data";

const BenefitBlock = () => {
  const refFirst = useRef(null);
  const isInViewFirst = useInView(refFirst, { once: true });
  const refSec = useRef(null);
  const isInViewSec = useInView(refSec, { once: true });
  const refThird = useRef(null);
  const isInViewThird = useInView(refThird, { once: true });
  const refFourth = useRef(null);
  const isInViewFourth = useInView(refFourth, { once: true });
  const refFifth = useRef(null);
  const isInViewFifth = useInView(refFifth, { once: true });
  const data = program_data;

  return (
    <div className="BenefitBlock">
      <div className="questions-container">
        <Image src={BenefitImg} alt="girl" width={440} className="girl-img" />
        <ul
          className="BenefitBlock-questions-list"
          ref={refFirst}
          style={{
            opacity: isInViewFirst ? 1 : 0,
            transition: "all 1.5s ",
          }}
        >
          <li>УСТАЛИ ОТ НОЧНЫХ ДЕЖУРСТВ И НАПРЯЖЕННЫХ СИТУАЦИЙ НА РАБОТЕ?</li>
          <li>ВСЕГДА ХОТЕЛ РАБОТАТЬ В БЬЮТИ-ИНДУСТРИИ?</li>
          <li>ХОЧЕШЬ РЕАЛИЗОВАТЬ СЕБЯ И СМЕНИТЬ СФЕРУ ДЕЯТЕЛЬНОСТИ?</li>
          <li>
            ХОТИТЕ НАЧАТЬ РАБОТАТЬ НА СЕБЯ И САМОСТОЯТЕЛЬНО ПЛАНИРОВАТЬ СВОЙ
            ГРАФИК?
          </li>
        </ul>
      </div>
      <div className="answers-container">
        <div className="answers-container__background">
          <h2>ВАМ НУЖЕН НАШ КУРС И ВОТ ПОЧЕМУ:</h2>
          <div
            className="BenefitBlock-answers-list"
            ref={refSec}
            style={{
              marginTop: isInViewSec ? 30 : 350,
              transition: "all 1.5s ",
            }}
          >
            <div>
              <Image src={answers_firstImg} alt="answers_firstImg" width={42} />
              <p className="answers__txt">
                ВЫ ОСВОИТЕ ВСЕ НЕОБХОДИМЫЕ НАВЫКИ В КОСМЕТОЛОГИИ И ОТРАБОТАЕТЕ
                ИХ НА ПРАКТИКЕ, ЧТОБЫ ПОСЛЕ КУРСА СРАЗУ ПРИСТУПИТЬ К РАБОТЕ
              </p>
            </div>
            <div>
              <Image src={answers_secImg} alt="answers_firstImg" width={44} />
              <p className="answers__txt">
                ВЫ СМОЖЕТЕ ПРОВОДИТЬ ВОСТРЕБОВАННЫЕ ПРОЦЕДУРЫ ТАКИЕ КАК
                МЕЗОТЕРАПИЯ И БИОРЕВИТАЛИЗАЦИЯ
              </p>
            </div>
            <div>
              <Image src={answers_thirdImg} alt="answers_firstImg" width={42} />
              <p className="answers__txt">
                ВЫ ПОЗНАКОМИТЕСЬ С КЛЮЧЕВЫМИ ПОНЯТИЯМИ КОСМЕТОЛОГИИ И
                ОРГАНИЗАЦИЕЙ КОСМЕТОЛОГИЧЕСКОЙ СЛУЖБЫ
              </p>
            </div>
            <div>
              <Image src={answers_fourImg} alt="answers_firstImg" width={42} />
              <p className="answers__txt">
                ПОСЛЕ КУРСА ВЫ ПОЛУЧИТЕ ДИПЛОМ УСТАНОВЛЕННОГО ОБРАЗЦА И СМОЖЕТЕ
                РАБОТАТЬ В САЛОНАХ, КЛИНИКАХ КОСМЕТОЛОГИИ ИЛИ ОТКРЫТЬ СВОЕ ДЕЛО
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="registration-container">
        <div className="registration-txt-wrapper">
          <span>
            ВАШ ГЛАВНЫЙ РЕЗУЛЬТАТ, <br />
            КОТОРОГО ВЫ ДОБЬЁТЕСЬ -
          </span>
          <p>
            СМОЖЕТЕ ОСВОИТЬ ВОСТРЕБОВАННУЮ ПРОФЕССИЮ В СФЕРЕ КРАСОТЫ И СТАТЬ
            ХОРОШО ОПЛАЧИВАЕМЫМ СПЕЦИАЛИСТОМ
          </p>
          <Button children="Записаться" style="primary" />
        </div>
        <img
          ref={refThird}
          src="https://cdn-ru.bitrix24.ru/b11758382/landing/c84/c849287354a5ece0f859126c331b7601/13294719_1920_1_1x.png"
          alt="Косметолог"
          width={540}
          style={{
            marginLeft: isInViewThird ? 0 : 1000,
            transition: "all 1.5s ",
          }}
        />
      </div>
      <div className="program-container">
        <h2>ЗА ВРЕМЯ ОБУЧЕНИЯ ВЫ НАУЧИТЕСЬ:</h2>

        <div className="program-list" ref={refFourth}>
          {data.map((program) => {
            return (
              <div
                style={{
                  marginTop: isInViewFourth ? 0 : 550,
                  transition: "all 1.5s ",
                }}
              >
                <img src={program.image} alt="img" />
                <p>{program.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="compatibility-container" ref={refFifth}>
        <img
          src="https://cdn-ru.bitrix24.ru/b11758382/landing/b3e/b3eeb843a03bb9a9b15698ef9079d730/Group_3_1x.jpg"
          alt="img"
          width={540}
          style={{
            marginRight: isInViewFifth ? 0 : 1000,
            transition: "all 1.5s ",
          }}
        />
        <div
          style={{
            marginLeft: isInViewFifth ? 0 : 1000,
            transition: "all 1.5s ",
          }}
        >
          <h2>КУРС ИДЕАЛЬНО ПОДОЙДЁТ, ЕСЛИ ВЫ:</h2>
          <p>
            Медицинский работник, имеющие среднее профессиональное образование
            по одной из специальностей «Лечебное дело», «Акушерское дело»,
            «Сестринское дело».
          </p>
          <p>
            Хотите получить востребованную профессию в сфере красоты и начать
            работать в бьюти-индустрии.
          </p>
          <p>
            По итогу курса вы получите диплом о профессиональной переподготовке
            установленного образца и сертификат специалиста по программе
            «Сестринское дело в косметологии».
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitBlock;
