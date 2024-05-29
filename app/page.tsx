"use client";

import BenefitBlock from "@/blocks/benefitBlock/BenefitBlock";
import IntroBlock from "@/blocks/introBlock/IntroBlock";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Header from "@/components/Header/Header";
import ProgramBlock from "@/blocks/programBlock/ProgramBlock";
import WhyUmedBlock from "@/blocks/whyUmedBlock/WhyUmedBlock";
import ContactBlock from "@/blocks/contactBlock/ContactBlock";
import dynamic from 'next/dynamic'
import { YMapLoader } from "./YMapLoader";



export default function Home() {
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  

  return (
    <main
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.3s ",
      }}
    >
      <Header />
      <IntroBlock />
      <BenefitBlock />
      <ProgramBlock />
      <WhyUmedBlock />
      <ContactBlock />
    </main>
  );
}
