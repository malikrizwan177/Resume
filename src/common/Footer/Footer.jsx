import { Layout } from 'antd';

const { Footer } = Layout

const End = () => {
    return(
        <>
        <Footer style={{
            color:'white',
            marginTop:'auto',
            bottom:'0',
            textAlign:'center', 
            position:'relative',
            background:'transparent'
            }}> 
            Ant Design ©2024 | Created by Muhammad Rizwan Malik
        </Footer>
        </>
    )
}

export default End;