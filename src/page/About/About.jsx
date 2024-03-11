import { Button } from 'antd';
import { Link } from "react-router-dom";
import React from 'react';
import Typed from 'typed.js';
import { LinkedinOutlined } from '@ant-design/icons';
import "./About.css"

const About = () => {

    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['I am <i>Muhammad Rizwan Malik</i>', 'I am <i>a Frontend Web Developer</i>'],
        typeSpeed: 100,
        backSpeed: 50,
        startDelay:500,
        showCursor: false,
        loop: true,
        smartBackspace: true
      });
  
      return () => {
        typed.destroy();
      };
    }, []);

    return(
        <div className="aboutMainContainer">
            <div className="aboutHeadContainer animate__animated animate__fadeIn">
                <div className="aboutMainHeading">
                    <div className='textRepeater'>
                    <h1>Hi,&nbsp;</h1>
                    <h1 ref={el}>Hello</h1>
                    </div>
                    <h2>An enthusiastic web developer striving to learn and develop user friendly and responsive websites</h2>
                    <div className='aboutHeaderButton'>
                        <Link className='descriptionButton' to={`/portfolio`}><Button style={{width:'100%'}} ghost size='large'>Check Portfolio</Button></Link>
                        <Link className='descriptionButton' to={`/service`}><Button style={{width:'100%'}} ghost size='large' >Services I provide</Button></Link>
                        <a target='_blank' className='descriptionButton' href='http://www.linkedin.com/in/rizwan-malik-281888283/'><Button style={{width:'100%'}} icon={<LinkedinOutlined />} ghost size='large'>Linkdin Profile</Button></a>
                    </div> 
                </div>
                <img className="aboutImage" src="./images/b057d2ed-b1a0-4f71-bf8d-c610cc494a2d.jpg" alt="Profile Pic"></img>
            </div>
            <div className='about2ndContainer'>
                <div className='skills animate__animated animate__fadeIn animate__delay-1s'>
                    <h1>Skills</h1>
                    <hr className='aboutHr'/>
                    <div className='skillContainer'>
                    <img className='skillLogo' src='./icons/html.png' alt='HTML Logo'></img>
                    <img className='skillLogo' src='./icons/social.png' alt='CSS Logo'></img>
                    <img className='skillLogo' src='./icons/js.png' alt='JS Logo'></img>
                    <img className='skillLogo' src='./icons/atom.png' alt='React Logo'></img>
                    <img className='skillLogo' src='./icons/bootstrap.png' alt='Bootstrap Logo'></img>
                    <img className='skillLogo' src='./icons/antd_logo.jpeg' alt='AntDesign Logo'></img>
                    <img className='skillLogo' src='./icons/python.png' alt='Python Logo'></img>
                    <img className='skillLogo' src='./icons/mysql.png' alt='MySql Logo'></img>
                    </div>
                </div>
                <div className='experience animate__animated animate__fadeIn animate__delay-2s'>
                    <h1>Experience</h1>
                    <hr className='aboutHr'/>
                    <div>
                        <h2>Frontend Developer Intern - Poises Technologies</h2>
                        <h4>Use of HTML5, Custom CSS, React, React-Bootstrap, npm packages, Github, Figma for the development</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About