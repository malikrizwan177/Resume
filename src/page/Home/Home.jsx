import { Button } from 'antd';
import { Link } from "react-router-dom";
import 'animate.css';
import './Home.css'

const Home = () => {

  return (
    <div className='topContainer'>
    <div className='mainContainer animate__animated animate__fadeInUp'>
    <h1 className='mainHeading'>Welcome to my Portfolio website</h1>
    <h2 className='subHeading'>It's a basic React website with the AntDesign library used in it for an active Resume Portfolio. It's part of the post-internship projects aimed to 
    possess an active responsive website and to enhance the creativity for more Frontend Web projects.
    </h2>
    </div>
    <div className='headerButton'>
      <Link key="logo" className='descriptionButton animate__animated animate__fadeInLeft animate__delay-1s' to={`/about`}><Button style={{width:'100%'}} ghost size='large'>Explore More</Button></Link>
      <Link key="siteInfo" className='descriptionButton animate__animated animate__fadeInRight animate__delay-1s' to={`/siteInfo`}><Button style={{width:'100%'}} ghost size='large' >Website Info</Button></Link>
    </div> 
    </div>
  );
};

export default Home;
