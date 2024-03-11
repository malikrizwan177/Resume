import { Button } from 'antd';
import { Link } from "react-router-dom";
import 'animate.css';
import './SiteInfo.css';

const SiteInfo = () => {
    return(
        <div className='siteMainContainer animate__animated animate__fadeIn'>
            <h1>This website has been made with the following Framework and Libraries.<br/> **<i>It is fully compatible and responsive with almost all the devices</i>**</h1>
            <div className='siteSecContainer'>
                <div className='animate__animated animate__fadeIn animate__delay-1s'>
                    <img className='siteLogo' src='./icons/html.png' alt='HTML Logo'></img>
                    <h3>HTML5</h3>
                </div>
                <div className='animate__animated animate__fadeIn animate__delay-1s'>
                    <img className='siteLogo' src='./icons/social.png' alt='CSS Logo'></img>
                    <h3>CSS3</h3>
                </div>
                <div className='animate__animated animate__fadeIn animate__delay-1s'>
                    <img className='siteLogo' src='./icons/js.png' alt='JS Logo'></img>
                    <h3>Javascript</h3>
                </div>
                <div className='animate__animated animate__fadeIn animate__delay-1s'>
                    <img className='siteLogo' src='./icons/atom.png' alt='React Logo'></img>
                    <h3>React</h3>
                </div>
                <div className='animate__animated animate__fadeIn animate__delay-1s'>
                    <img className='siteLogo' src='./icons/antd_logo.jpeg' alt='AntDesign Logo'></img>
                    <h3>AntDesign</h3>
                </div>
                <div className='animate__animated animate__fadeIn animate__delay-2s'>
                    <img style={{height:'30px'}} src='./icons/react-router-color.png' alt='React-Router Logo'></img>
                </div>
                <div className='animate__animated animate__fadeIn animate__delay-2s'>
                    <img style={{height:'50px'}} src='./icons/typedjs.png' alt='Typed.js Logo'></img>
                </div>
                <div className='animate__animated animate__fadeIn animate__delay-2s'>
                    <h1 style={{color:'blue'}}>Animate.css</h1>
                </div>
            </div>
            <div className='headerButton'>
                <Link key="logo" className='descriptionButton animate__animated animate__fadeInLeft animate__delay-3s' to={`/about`}><Button style={{width:'auto'}} ghost size='large'>Check Resume</Button></Link>
                <Link key="siteInfo" className='descriptionButton animate__animated animate__fadeInRight animate__delay-3s' to={`/portfolio`}><Button ghost size='large' >Check Portfolio</Button></Link>
            </div> 
        </div>
    )
}

export default SiteInfo