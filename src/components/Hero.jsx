import React, {useState} from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import { useDarkMode } from './DarkModeContext';
import CallToAction from './Hero-components/CallToAction';
import HealthhubContainer from './Hero-components/HealthhubContainer';
import HealthToolsContainer from './Hero-components/HealthToolsContainer';
import HeroTopicsContainer from './Hero-components/HeroTopicsContainer';
import Testimonials from './Hero-components/Testimonials';
import StepsWrapper from './Hero-components/StepsWrapper';
import MainHero from './Hero-components/MainHero';


function Hero({ onOpenAuth }) {
    const { darkMode: isDarkMode } = useDarkMode();
        return (
            <div className={`hero-container ${isDarkMode ? 'dark' : ''}`}>
                <MainHero onOpenAuth={onOpenAuth}/>
                <div className="h">
                <HeroTopicsContainer/>
                <HealthhubContainer/>
                <HealthToolsContainer/>
                <Testimonials/>
                <StepsWrapper/>
                <CallToAction onOpenAuth={onOpenAuth}/>
                </div>
                <div>
                </div>
            </div>
        );
    }

export default Hero;
