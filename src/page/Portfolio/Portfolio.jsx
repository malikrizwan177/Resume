import { Button } from 'antd';
import { Link } from "react-router-dom";
import 'animate.css';
import './Portfolio.css';

const Portfolio = () => {
    return(
        <div className='portMainContainer'>
            <div className='portSecContainer'>
                <div className='eachportContainer animate__animated animate__fadeIn'>
                    <img className='portIcon' src='./icons/atom.png' alt='React Logo'/>
                    <h1>Project-1</h1>
                    <h3>A Non-Responsive basic React app made with HTML5, CSS3, Javascript and Bootstrap</h3>
                    <a href='https://project-2-five-gamma.vercel.app/'><Button ghost size='large'>Check Website</Button></a>
                </div>
                <div className='eachportContainer animate__animated animate__fadeIn animate__delay-1s'>
                    <img className='portIcon' src='./icons/atom.png'alt='Wordpress Logo'/>
                    <h1>Project-2</h1>
                    <h3>A Non-Responsive basic React app made wth HTML5, CSS3, Javascript Bootstrap and React-Bootstrap</h3>
                    <a href='https://project-3-rouge.vercel.app/'><Button ghost size='large'>Check Website</Button></a>
                </div>
                <div className='eachportContainer animate__animated animate__fadeIn animate__delay-2s'>
                    <img className='portIcon' src='./icons/wordpress.png' alt='React-native Logo'/>
                    <h1>Project-3</h1>
                    <h3>A Collabrative project to develop a responsive and working website for the "Hotel Haveli One".
                        From buying domain name to developing the website using Elementor plugin along with SEO optimization was done
                        and delivered.
                    </h3>
                    <a href='https://hotelhavelione.com/'><Button ghost size='large'>Check Website</Button></a>
                </div>
                </div>
            <p className='animate__animated animate__fadeIn animate__delay-3s'>**And Of course this resume project too**</p>
            <div className='headerButton'>
                <Link key="logo" className='descriptionButton animate__animated animate__fadeInLeft animate__delay-3s' to={`/about`}><Button style={{width:'auto'}} ghost size='large'>Check Resume</Button></Link>
                <Link key="siteInfo" className='descriptionButton animate__animated animate__fadeInRight animate__delay-3s' to={`/siteInfo`}><Button ghost size='large' >Website Info</Button></Link>
            </div>
        </div>
    )
}
export default Portfolio;