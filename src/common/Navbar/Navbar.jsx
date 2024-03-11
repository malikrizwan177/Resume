import { Menu, Button, ConfigProvider } from 'antd';
import { UserOutlined, EyeOutlined, CodeOutlined, InfoCircleOutlined, MenuOutlined, AntDesignOutlined } from '@ant-design/icons';
import { Outlet, Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

    return(
    <>
    <ConfigProvider
      theme={{
        components:{
            Menu:{
              colorPrimary:'none'
          }
        }
    }}
    >
    <img className='backgroundImage' src='./images/header_background.jpg' alt='header_background_image'/>
    <div >
    <Menu mode="horizontal" theme='dark' overflowedIndicator={<MenuOutlined />} className='menu'>
      <Menu.Item key="logo" icon={<AntDesignOutlined />} className='logo'>
        <Link to={`/`}>Resume</Link>
      </Menu.Item>
      <Menu.Item key="about" icon={<UserOutlined />} style={{margin:'auto 0% auto auto'}} >
        <Link to={`/about`}>About</Link>
      </Menu.Item>
      <Menu.Item key="service" icon={<EyeOutlined />} style={{margin:'auto 0%'}}>
        <Link to={`/service`}>Services</Link>
      </Menu.Item>
      <Menu.Item key="Portfolio" icon={<CodeOutlined />} style={{margin:'auto 0%'}}>
        <Link to={`/portfolio`}>Portfolio</Link>
      </Menu.Item>
      <Menu.Item key="siteInfo" icon={<InfoCircleOutlined />} style={{margin:'auto auto auto 0%'}}>
        <Link to={`/siteInfo`}>Site Info</Link>
      </Menu.Item>
      <Menu.Item key="resumeDownload" disabled={true} style={{margin:'auto 0%'}}>
        <a download href='./resume/CV_main.pdf'><Button ghost size='large'>Download Resume</Button></a>
      </Menu.Item>
    </Menu>
    </div>
    <div id='content'>
      <Outlet/>
    </div>
    </ConfigProvider>
    </>
    )
}

export default Navbar;