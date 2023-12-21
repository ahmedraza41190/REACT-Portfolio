import React, { useEffect } from "react";
import './work.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ChatBot from '../../images/ChatBot.png'
import TicTacToeGame from '../../images/TicTacToeGame.png'
import CrudApp from '../../images/Crud-App.png'
import SnakeGame from '../../images/SnakeGame.png'                 
import WeatherApp from '../../images/Weather-App.png'
import SnakeGame2 from '../../images/SnakeGame2.png'
import Threads from '../../images/Threads.png'
import OLX from '../../images/olx.png'
import SaylaniWebsite from '../../images/SaylaniWebsite.png'
import NewsApp from '../../images/newsapp (1).png'
import BloggingApp from '../../images/Blog-App.png'
import Expertizo from '../../images/expertizo (1).png'
import QuizApp from '../../images/Quiz-App.png'
import MemoryCardGame from '../../images/MemoryCardGame (1).png'                            
import { FaGlobe } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Work() {
    useEffect(() => {
        AOS.init();
    }, [])
    const cards = [
        {
            image: BloggingApp,
            site: 'https://mini-hackathon-ahmedraza41190.vercel.app',
            github: 'https://github.com/ahmedraza41190/Personal-Blog-App',
            heading: 'Personal Blog App'
        },
        {
            image: Expertizo,
            site: 'https://html-assignment-6-h2khjej4x-ahmedraza41190.vercel.app',
            github: 'https://github.com/ahmedraza41190/HTML.Assignment.6',
            heading: 'Expertizo Website'
        },
        {
            image: NewsApp,
            site: 'https://news-hdzbcakpb-ahmedraza41190.vercel.app/',
            github: 'https://github.com/ahmedraza41190/News-app',
            heading: 'News App'
        },
        {
            image: QuizApp,
            site: 'https://ahmedraza41190.github.io/Quiz-App/',
            github: 'https://github.com/ahmedraza41190/Quiz-App',
            heading: 'Quiz App'
        },
        {
            image: MemoryCardGame,
            site: 'https://memory-card-game-fj3kylqid-ahmedraza41190.vercel.app/',
            github: 'https://github.com/ahmedraza41190/Memory-Card-Game',
            heading: 'Memory Card Game'
        },
        {
            image: CrudApp,
            site: 'https://odd-cuff-links-lamb.cyclic.cloud',
            github: 'https://github.com/ahmedraza41190/CRUD-APP',
            heading: 'CRUD APP'
        },
        {
            image: ChatBot,
            site: 'https://chat-qakm7r2dg-ahmedraza41190.vercel.app',
            github: 'https://github.com/ahmedraza41190/ChatBot',
            heading: 'ChatBot'
        },
        {
            image: TicTacToeGame,
            site: 'https://tic-tac-toe-game-qtxy7k7hi-ahmedraza41190.vercel.app/',
            github: 'https://github.com/ahmedraza41190/Tic-Tac-Toe-Game',           
            heading: 'Tic-Tac-Toe Game'
        },
        {
            image: SnakeGame,
            site: 'https://snake-game-9gs0vnncl-ahmedraza41190.vercel.app',
            github: 'https://github.com/ahmedraza41190/Snake-Game',
            heading: 'Snake Game (Only for desktop)'
        },
        {
            image: SnakeGame2,
            site: 'https://snake-game-2-ht5chrr3h-ahmedraza41190.vercel.app/',
            github: 'https://github.com/ahmedraza41190/Snake-Game-2',
            heading: 'Snake Game 2'
        },
        {
            image: WeatherApp,
            site: 'https://ahmedraza41190.github.io/Weather-app/',
            github: 'https://github.com/ahmedraza41190/Weather-app',             
            heading: 'Weather App'
        },
        {
            image: Threads,
            site: 'https://ahmedraza41190.github.io/Threads/app.html',
            github: 'https://github.com/ahmedraza41190/Threads',
            heading: 'Threads App'
        },
        {
            image: OLX,
            site: 'https://ahmedraza41190.github.io/OLX-Website/',
            github: 'https://github.com/ahmedraza41190/OLX-Website',
            heading: 'OLX Website'
        },
        {
            image: SaylaniWebsite,
            site: 'https://ahmedraza41190.github.io/HTML.Assignment.5/',
            github: 'https://github.com/ahmedraza41190/HTML.Assignment.5',
            heading: 'Saylani Website'
        }
    ]
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div className='workMainDiv' id='work'>
            <div className='workSecondDiv'>
                <div className='workHeadDiv'>
                    <h1 className='workHead'
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">Work</h1>
                    <div className='workHeadUnderlineMianDiv'>
                        <div className='workHeadUnderline'
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="0"
                            data-aos-duration="800"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top"></div>
                        <div className='workHeadUnderlineCircle'
                            data-aos="fade-down"
                            data-aos-offset="200"
                            data-aos-delay="0"
                            data-aos-duration="500"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top"></div>
                        <div className='workHeadUnderline2'
                            data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="0"
                            data-aos-duration="800"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top"></div>
                    </div>
                </div>
                <div className='workBlock'>
                    <Box>
                        <Grid container spacing={5}>
                            {
                                cards.map((val, index) => {
                                    return (
                                        <Grid item xs={12} lg={6} sm={12} className='mainGrid' key={index}>
                                            <Item
                                                className='workItems'

                                                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                                                data-aos-offset="200"
                                                data-aos-delay="100"
                                                data-aos-duration="1000"
                                                data-aos-mirror="true"
                                                data-aos-once="false"
                                                data-aos-anchor-placement="top">
                                                <img src={val.image} alt="" className='workImages' />
                                                <div className='workItemsExtraDiv'></div>
                                                <div className='cardHeading'>{val.heading}</div>
                                                <div className='visitingDiv'>
                                                    <a href={val.site} style={{ textDecoration: 'none' }} rel="noreferrer" target="_blank"><button>Visit Site <FaGlobe className='websiteIcon' /></button></a><br />
                                                    <a href={val.github} style={{ textDecoration: 'none' }} rel="noreferrer" target="_blank"><button>View On Github <VscGithub className='websiteIcon' /></button></a>
                                                </div>
                                            </Item>
                                        </Grid>

                                    )
                                })
                            }
                        </Grid>
                    </Box>

                </div>
            </div>
        </div>
    )
}
export default Work