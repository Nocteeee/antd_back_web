import React, { useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Button, Input, Checkbox, Form } from 'antd';
import './login.css'
import { login } from '../api/interface'
const { Content } = Layout;
const FormItem = Form.Item;

function Login(props) {
    const [loading, setLoading] = useState(false);
    const handleSubmit = values => {
        setLoading(true);
        login({ username: values.username, password: values.password }).then(res => {
            console.log(res)
            localStorage['token'] = res.data.token;
            props.history.push('/admin')
        }).finally(()=>{
            // setLoading(false);
        })
    };

    return (
        <Layout className="full-layout login-page">
            <Content>
                <Form onFinish={ handleSubmit } className="login-form" initialValues={{ username: 'admin', password: '123qwe', remember: true }}>
                    <div className="user-img"> <b>NOCTE</b> <span>Admin</span> </div>
                    <FormItem name="username" rules={[{ required: true, message: '请输入您的用户名' }]}>
                        <Input size="large" prefix={<UserOutlined />} placeholder="用户名" />
                    </FormItem>
                    <FormItem name="password" rules={[{ required: true, message: '请输入您的密码' }]}>
                        <Input size="large" prefix={<LockOutlined />} type="password" placeholder="密码" />
                    </FormItem>
                    <FormItem name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                    </FormItem>
                    <Button size="large" type="primary" htmlType="submit" className="login-form-button" loading={loading}> 登录 </Button>
                </Form>
            </Content>
        </Layout>
    );
}

export default Login;