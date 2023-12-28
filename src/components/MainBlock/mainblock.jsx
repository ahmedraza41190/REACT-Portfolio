import React, { useEffect } from 'react'
import './mainblock.css'                
import Avatar from '../../images/avatar.png'
import useWebAnimations from '@wellyshen/use-web-animations'
import { MdWavingHand } from 'react-icons/md'
import { GrFacebookOption, GrLinkedinOption } from 'react-icons/gr'
import { RiInstagramFill } from 'react-icons/ri'
import { VscGithubInverted } from 'react-icons/vsc'
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyAvatar from "../../images/my-avatar.png"
import Capture from "../../images/Capture__1_-removebg-preview.png"



function MianBlock() {
    const GithubAnimation = useWebAnimations({
        keyframes: [
            { boxShadow: '0 0 10px yellow' },
            { boxShadow: '0 0 10px #0f93ff' },
            { boxShadow: '0 0 10px #02cf24' },
            { boxShadow: '0 0 10px pink' },
            { boxShadow: '0 0 10px yellow' },
        ],
        animationOptions: {
            duration: 5000,
            iterations: Infinity
        }
    })
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>

            <div className='socialLinks'
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-delay="2500"
                data-aos-duration="700"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
            >
                <div>
                    <a href="https://www.facebook.com/profile.php?id=100009195927085" rel="noreferrer" target='_blank'>
                        <GrFacebookOption className='fbIcon' />
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/ahmed_raza41190/?hl=en" rel="noreferrer" target='_blank'>
                        <RiInstagramFill className='instaIcon' />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/ahmed-raza-fullstack-developer/" rel="noreferrer" target='_blank'>
                        <GrLinkedinOption className='linkIcon' />
                    </a>
                </div>
            </div>
            <div className='mainBlock'>
                <div className='IntroDiv'
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="1000"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top">
                    <img className="Helloh1" src="https://readme-typing-svg.herokuapp.com?size=22&amp;duration=3000&amp;color=31F711&amp;center=true&amp;vCenter=true&amp;height=100&amp;lines=%E2%9D%A4%EF%B8%8F%E2%80%8D%F0%9F%94%A5Passionate+Web+Developer%F0%9F%92%BB;Experience+Seeker%F0%9F%92%AF;Dedicated+to+Work%F0%9F%92%AA%F0%9F%8F%BB;Always+Learning%F0%9F%92%A1;from+Karachi%2C+Pakistan%F0%9F%87%B5%F0%9F%87%B0" alt="Typing SVG"/>
                    <p className='namePara'>Ahmed Raza</p>
                    <div className='expDiv'>
                        <p className='expPara'>Full Stack Developer</p>
                    </div>
                    <a  href="https://github.com/ahmedraza41190" style={{ textDecoration: 'none' }} rel="noreferrer" target='_blank'>
                        <div className='githubDiv' ref={GithubAnimation.ref}
                            data-aos="flip-left"
                            data-aos-offset="0"
                            data-aos-delay="2000"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true"
                            data-aos-anchor-placement="top" >
                            Github Account
                            <VscGithubInverted size={35} className='githubIcon' />
                        </div>
                    </a>
                </div>
                <div className='avatarDiv'>
                    <img src={Capture} width='170px' alt="" />
                </div>
            </div>

        </div>
    )
}

export default MianBlock



