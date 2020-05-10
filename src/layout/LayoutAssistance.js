import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Routing from '../routes/Routing';
import SIDEBAR from '../constant/SIDEBAR';

const {  Content, Footer, Sider } = Layout;

const LayoutAssistance = () => {
    return(
        <Layout style={{minHeight:'100vh'}}>
            <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
            >
                <div className="logo" />
            <Menu theme="dark" mode="inline">
                {
                    SIDEBAR.map(item=>(
                        <Menu.Item key={item.key}>   
                            <Link to={item.path}>{item.name}</Link>
                        </Menu.Item>
                    ))
                }
            </Menu>
            </Sider>
            <Layout>
            <Content style={{ margin: '24px 24px 0px 24px' }}>
                <div className="site-layout-background container-main" style={{ padding: 24, minHeight: 360 }}>
                    <Routing/>
                </div>
            </Content>
             <Footer style={{ textAlign: 'center' }}>Jesús Ponce ©{new Date().getFullYear()}</Footer>
            </Layout>
        </Layout>
    )
}

export default LayoutAssistance;