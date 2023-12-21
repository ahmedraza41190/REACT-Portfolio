import React, { useEffect } from 'react'
import './about.css'
import MyPic from '../../images/mypic.jpg';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';


function About() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='about' id='about'>
            <div className='aboutSecond'>
                <div className='aboutHeadDiv'>
                    <h1 className='aboutHead'
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">About Me</h1>
                    <div className='aboutHeadUnderlineMianDiv'>
                        <div className='aboutHeadUnderline'
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="0"
                            data-aos-duration="800"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top"></div>
                        <div className='aboutHeadUnderlineCircle'
                            data-aos="fade-down"
                            data-aos-offset="200"
                            data-aos-delay="0"
                            data-aos-duration="500"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top"></div>
                        <div className='aboutHeadUnderline2'
                            data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="0"
                            data-aos-duration="800"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top" ></div>
                    </div>
                </div>
                <div className='aboutBlock'>
                    <div className='myPicMainDiv'
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">

                        <div className='myPicDiv'>
                            <div className='myPicExtraDiv'></div>
                            <img src={MyPic} alt="" />
                        </div>
                    </div>
                    <div className='aboutTextDiv'
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">
                        {/* <h1>Hey There! I'm Okasha Aijaz</h1> */}
                        <FaQuoteLeft className='invertedCommas' />
                        <p className='aboutText'>
                        Hi, I am a Full-Stack Web Developer born and raised in Karachi, Pakistan. Currently, I am a student of BSCS in "Orasoft Institute". I am learning web and mobile app development course in "SMIT". Also I am learning web 3.0 and Metaverse in "PIAIC".

                        </p>
                        <FaQuoteRight className='invertedCommas' />
                    </div>
                </div>
                <div className='personalInfo'
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top">
                    <div className='qualificationDiv'>
                        <h1>Education :</h1>
                        <div className='qualificationExtraDiv'></div>

                        <ul>
                            <li className='matriculation'>
                                <p style={{ padding: 0, margin: 0, lineHeight: '20px' }}>Mar 2020 - June 2022</p>
                                <p style={{ fontSize: '25px', fontFamily: 'sans-serif', fontWeight: '800', padding: 0, margin: 0 }}>Intermediate, Pre-engineering</p>
                                <p style={{ padding: 0, margin: 0, lineHeight: '20px' }}>GOVT.JAUHAR DEGREE BOYS SCIENCE AND COMMERCE COLLEGE</p>
                            </li>
                            <li className='matriculation' style={{marginTop:'20px'}}>
                                <p style={{ padding: 0, margin: 0, lineHeight: '20px' }}>Nov 2022 - Nov 2023</p>
                                <p style={{ fontSize: '25px', fontFamily: 'sans-serif', fontWeight: '800', padding: 0, margin: 0 }}>MERN Stack, Web Development</p>
                                <p style={{ padding: 0, margin: 0, lineHeight: '20px' }}>Saylani Mass IT Training</p>
                            </li>
                            <li className='matriculation' style={{marginTop:'20px'}}>
                                <p style={{ padding: 0, margin: 0, lineHeight: '20px' }}>Dec 2022 - Present</p>
                                <p style={{ fontSize: '25px', fontFamily: 'sans-serif', fontWeight: '800', padding: 0, margin: 0 }}>Web 3, AI, & Metaverse</p>
                                <p style={{ padding: 0, margin: 0, lineHeight: '20px' }}>Presidential Initiative for Artificial Intelligence & Computing</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About