import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import githubLogo from './image/github.png';
import terminalLogo from './image/terminal.png';
import Particle from "./components/particles";
import AnimatedCursor from "react-animated-cursor"
import expressJSImage from "./image/ExpressJS-logo-removebg-preview.png"
import css3Imge from "./image/CSS3-logo-removebg-preview.png"
import html5Image from "./image/HTML5-logo.png"
import firebaseImage from "./image/firebase-logo.png"
import tailwindcssImage from "./image/tailwind-css-logo-.png"
import { TbBrandLinkedin } from 'react-icons/tb';

function Hi() {
  return (
    <div>
      <AnimatedCursor
        innerSize={20}
        outerSize={80}
        color='1000, 1000, 1000'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      {/* <Particle /> */}
      <div id="top"></div>
      <section className="parallax">
        <h1 className="welcomeAhmed" data-speed="2">Ahmed Raza</h1>
      </section>

      <div className="animation_div">
        <img className="animation_img"
          src="https://readme-typing-svg.herokuapp.com?size=22&duration=3000&color=31F711&center=true&vCenter=true&height=100&lines=%E2%9D%A4%EF%B8%8F%E2%80%8D%F0%9F%94%A5Passionate+Web+Developer%F0%9F%92%BB;Experience+Seeker%F0%9F%92%AF;Dedicated+to+Work%F0%9F%92%AA%F0%9F%8F%BB;Always+Learning%F0%9F%92%A1;from+Karachi%2C+Pakistan%F0%9F%87%B5%F0%9F%87%B0"
          alt="Typing SVG" />
      </div>
      <div className="myPhotoDiv">
        <img className="myPhoto" src="https://avatars.githubusercontent.com/u/99830227?v=4" alt="My Photo" title="AHMED" />
      </div>

      <div className="navBarDiv">
        <nav className="nav-bar">
          <ul className="nav-ul">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="https://github.com/ahmedraza41190" target="_blank">PROJECTS</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
      <main>
        <div className="center">
          <blockquote>وَأَن لَّيْسَ لِلْإِنسَـٰنِ إِلَّا مَا سَعَىٰ
            <br />
            Man gets whatever he strives for.💚
          </blockquote>
        </div>
        <hr />
        <h2 id="about">ABOUT</h2>
        <p className="about_para">
          {/* Hi, I am a Full-Stack Web Developer born and raised in <a href="https://en.wikipedia.org/wiki/Karachi">Karachi, Pakistan</a>. And currently, I am a student of BSCS in "Orasoft Institute".
          And I am learning web and mobile app development course in "SMIT" and also I am learning web 3.0 and Metaverse in "PIAIC". */}
          • Hi, I am a Full-Stack Web Developer born and raised in <a href="https://en.wikipedia.org/wiki/Karachi">Karachi, Pakistan</a>. <br />
          • Currently, I am a student of BSCS in "Orasoft Institute". <br />
          • I am learning web and mobile app development course in "SMIT" <br />
          • Also I am learning web 3.0 and Metaverse in "PIAIC".
        </p><br /><br /><br /><br />
        <hr />
        <h2 id="skills">SKILLS</h2>
        <ul className="skills_ul">
          <li>
            NEXT JS
            <img src="https://raw.githubusercontent.com/ahmedraza41190/Next-JS-Portfolio/0d0ef93cccc9dfa749d55a2bada44aa209dad5b8/portfolio/public/assets/nextjs-icon.svg" alt="git" title="Git" width="40"
              height="40" />
          </li>
          <li>
            Tailwind CSS
            <img src={tailwindcssImage} alt="git" title="Git" width="40"
              height="40" style={{ paddingRight: '5px' }} />
          </li>
          <li>
            <div className='hoverdiv'></div>
            NodeJS
            <img src="https://github.com/ahmedraza41190/Next-JS-Portfolio/blob/main/portfolio/public/assets/nodejs-logo.png?raw=true" alt="git" title="Git" width="40"
              height="40" />
          </li>
          <li>
            <div className='hoverdiv'></div>
            TypeScript
            <img src="https://github.com/ahmedraza41190/Next-JS-Portfolio/blob/main/portfolio/public/assets/Typescript-logo.png?raw=true" alt="git" title="Git" width="40"
              height="40" />
          </li>
          <li>
            <div className='hoverdiv'></div>
            MongoDB Database
            <img src="https://github.com/ahmedraza41190/Next-JS-Portfolio/blob/main/portfolio/public/assets/MongoDB-logo.png?raw=true" alt="git" title="Git" width="40"
              height="40" style={{ paddingRight: '20px' }} />
          </li>
          <li>
            <div className='hoverdiv'></div>
            ExpressJS
            <img src={expressJSImage} alt="git" title="Git" width="40"
              height="40" />
          </li>
          <li>
            <div className='hoverdiv'></div>
            Cyclic
            <img src="https://github.com/ahmedraza41190/Next-JS-Portfolio/blob/main/portfolio/public/assets/cyclic-sh-icon.png?raw=true" alt="git" title="Git" width="40"
              height="40" style={{ paddingLeft: '10px' }} />
          </li>
          <li>
            <div className='hoverdiv'></div>
            Postman
            <img src="https://raw.githubusercontent.com/ahmedraza41190/Next-JS-Portfolio/0d0ef93cccc9dfa749d55a2bada44aa209dad5b8/portfolio/public/assets/postman-icon.svg" alt="git" title="Git" width="40"
              height="40" />
          </li>
          <li>
            <div className='hoverdiv'></div>
            Vercel
            <img src="https://raw.githubusercontent.com/ahmedraza41190/Next-JS-Portfolio/0d0ef93cccc9dfa749d55a2bada44aa209dad5b8/portfolio/public/assets/Vercel_favicon.svg" alt="git" title="Git" width="40"
              height="40" />
          </li>
          <li>
            <div className='hoverdiv'></div>
            Git
            <img src="https://github.com/ahmedraza41190/Next-JS-Portfolio/blob/main/portfolio/public/assets/Git-Icon-1788C.png?raw=true" alt="git" title="Git" width="40"
              height="40" />
          </li>
          <li>
            <div className="hoverdiv"></div>
            GitHub
            <img alt="@ahmedraza41190" title="GitHub" width="40" height="40" src={githubLogo} />

          </li>
          <li>
            <div className='hoverdiv'></div>
            VS Code<img alt="VS Code" title="VS Code Making life Easy" width="40" height="40"
              src="https://github.com/ahmedraza41190/Next-JS-Portfolio/blob/main/portfolio/public/assets/Visual_Studio_Code_1.35_icon.svg.png?raw=true"
              style={{ paddingRight: '10px' }} />

          </li>
          <li>
            <div className='hoverdiv'></div>
            Command Line
            <img alt="Terminal" title="Command Line" width="40" height="40" src={terminalLogo} style={{ paddingRight: '10px' }} />

          </li>
          <li>
            <div className='hoverdiv'></div>
            HTML 5
            <img src={html5Image}
              alt="html5" title="HTML5" width="40" height="40" />
          </li>
          <li>
            <div className='hoverdiv'></div>
            CSS 3 <img
              src={css3Imge}
              alt="css3" width="40" height="40" />
          </li>
          <li>
            <div className='hoverdiv'></div>
            Bootstrap<img
              src="https://github.com/ahmedraza41190/Next-JS-Portfolio/blob/main/portfolio/public/assets/Bootstrap_logo.svg.png?raw=true"
              alt="bootstrap" width="40" height="40" />
          </li>
          <li>
            <div className='hoverdiv'></div>
            JavaScript
            <img src="https://github.com/ahmedraza41190/Next-JS-Portfolio/blob/main/portfolio/public/assets/JavaScript-logo.png?raw=true"
              title="Advance JavaScript with ES13" alt="javascript" width="40" height="40" />
          </li>
          <li>
            <div className='hoverdiv'></div>
            Firebase<img src={firebaseImage} alt="firebase"
              width="40" height="40" title="Firebase" />
          </li>
          <li>
            <div className="hoverdiv"></div>
            C
            <img src="https://github.com/ahmedraza41190/Next-JS-Portfolio/blob/main/portfolio/public/assets/C-Logo.png?raw=true"
              title="from Orasoft Institute" alt="C" width="40" height="40" />
          </li>
          <li>React
            <img src="https://github.com/ahmedraza41190/Next-JS-Portfolio/blob/main/portfolio/public/assets/React-logo.png?raw=true"
              alt="react" width="40" height="40" />
          </li>
        </ul>
        <hr />
        <h2 id="contact">LET'S CONNECT</h2>
        <ul className="contact_ul">
          <li>
            <div className='hoverdiv'></div>
            <a
              href="https://github.com/ahmedraza41190"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              {/* ... */}
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
            </a></li>

            <li>
            <div className='hoverdiv'></div>
            <a href="https://www.facebook.com/profile.php?id=100009195927085" target="_blank">FaceBook<i><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg></i></a></li>
       

          <li>
            <div className='hoverdiv'></div>
            <a href="https://www.instagram.com/ahmed_raza41190/?hl=en" target="_blank">Instagram<i><svg
              className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg></i></a></li>
          <li>
            <div className='hoverdiv'></div>
            <a href="https://www.linkedin.com/in/ahmed-raza-fullstack-developer/" target="_blank">Linkedin<svg className="icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg></a></li>
          <li>
            <div className='hoverdiv'></div>
            <a href="https://youtu.be/OuFIF_gCuBA" target="_blank">YouTube<i><svg
              className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
            </svg></i></a></li>

        </ul>
      </main>
      <div className="footer">
        <p className="footer-p">Build by : Ahmed Raza</p>
      </div>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));

