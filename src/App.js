import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UnorderedListOutlined, HomeOutlined, FileAddOutlined ,LoginOutlined} from '@ant-design/icons';
import { Route, Link } from "react-router-dom";
import './App.css'

const { Content, Footer, Sider , Header} = Layout;
function App(props) {
  let routerMatchPath = props.location.pathname;
  const [collapsed, setCollapsed] = useState(false)

  //折叠面板
  function onCollapse(collapsed) {
    setCollapsed(collapsed);
  }

  //面包屑导航
  const breadcrumbNameMap = {
    '/admin': '主页',
    '/admin/list': '文章列表',
    '/admin/add': '添加文章'
  }

  //退出
  const loginOut = ()=>{
    console.log('loginOut')
  }
  return (
    <Layout style={{ minHeight: '100vh' }} id="components-layout-demo-side">
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          zIndex:101
        }}
        collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo">Nocte</div>
        <Menu theme="dark" defaultSelectedKeys={[routerMatchPath]} mode="inline">
          <Menu.Item key="/admin" icon={<HomeOutlined />}>
            <Link to="/admin">主页</Link>
          </Menu.Item>
          <Menu.Item key="/admin/list" icon={<UnorderedListOutlined />}>
            <Link to="/admin/list">文章列表</Link>
          </Menu.Item>
          <Menu.Item key="/admin/add" icon={<FileAddOutlined />}>
            <Link to="/admin/add">添加文章</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: collapsed ? 80 : 200 }}>
        <Header className="site-layout-sub-header-background">
          <span style={{marginRight:'16px',cursor:'pointer'}} onClick={loginOut}>
            <LoginOutlined /> 退出
          </span>
        </Header>
        <Content style={{ margin: '70px 16px 0' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{breadcrumbNameMap[routerMatchPath]}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 650 }}>
            {
              props.routes.map((item,index)=>{
                return <Route key={index} path={item.path} exact component={item.component}/>
              })
            }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by LN</Footer>
      </Layout>
    </Layout>
  )
}

export default App;
