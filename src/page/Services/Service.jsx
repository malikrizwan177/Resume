import { Button } from 'antd';
import { Link } from "react-router-dom";
import 'animate.css';
import './Service.css'

const Service = () => {
    return(
        <div className='serviceMainContainer'>
            <div className='serviceSecContainer'>
                <div className='eachserviceContainer animate__animated animate__fadeIn'>
                    <img className='serviceIcon' src='./icons/atom.png' alt='React Logo'/>
                    <h1>React Web Development</h1>
                    <h3>Develop responsive website using HTML5, CSS3, Javascript, React, React-Bootstrap or AntDesign</h3>
                    <Link to={`/portfolio`}><Button style={{width:'auto'}} ghost size='large'>See Example Project</Button></Link>
                </div>
                <div className='eachserviceContainer animate__animated animate__fadeIn animate__delay-1s'>
                    <img className='serviceIcon' src='./icons/wordpress.png'alt='Wordpress Logo'/>
                    <h1>Wordpress website development</h1>
                    <h3>Develop user friendly and responsive website on Wordpress using Elementor plugin </h3>
                    <Link to={`/portfolio`}><Button style={{width:'auto'}} ghost size='large'>See Example Project</Button></Link>
                </div>
                <div className='eachserviceContainer animate__animated animate__fadeIn animate__delay-2s'>
                    <img className='serviceIcon' src='./icons/atom.png' alt='React-native Logo'/>
                    <h1>Mobile App Development (Beta)</h1>
                    <h3>Develop mobile app(android) using React, React-native or Flutter ,CSS, Javascript. *Currently on halt*</h3>
                    <Link to={`/portfolio`}><Button style={{width:'auto'}} ghost size='large'>See Example Project</Button></Link>
                </div>
                </div>
            <div className='headerButton'>
                <Link key="logo" className='descriptionButton animate__animated animate__fadeInLeft animate__delay-3s' to={`/about`}><Button style={{width:'auto'}} ghost size='large'>Check Resume</Button></Link>
                <Link key="siteInfo" className='descriptionButton animate__animated animate__fadeInRight animate__delay-3s' to={`/siteInfo`}><Button ghost size='large' >Website Info</Button></Link>
            </div> 
        </div>
    )
}
export default Service