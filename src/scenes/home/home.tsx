import { SelectedPage } from '@/shared/types';
import React from 'react';
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function Home({setSelectedPage}: Props) {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px")


  return <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
    {/* IMAGE AND MAIN HEADER */}
    <div className="">
        {/* MAIN HEADER */}
        <div>
            {/* HEADINGS */}
            <div>
                <div>
                    <img src={HomePageText} alt="home-page-text" />
                </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>

        </div>

        {/* IMAGE */}
        <div></div>
    </div>

  </section>
}

export default Home