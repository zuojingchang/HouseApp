import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Flex,InputItem, WingBlank, WhiteSpace,Button,Toast } from 'antd-mobile';
import { login } from '../../apis/apis';
export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            acc : '',
            pwd : '',
            errorText : 'none'
        }
    }
    render() {
        let logo = {marginTop:'150px'}
        return (
            <div>
                
                <Flex justify="center">
                    <img style={logo} src={require('../../assets/imgs/logo.jpg')} alt=''></img>
                </Flex>
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WingBlank size="lg">
                    <InputItem
                        placeholder="请输入用户名"
                        clear
                        value={this.state.acc}
                        onChange={(val)=>{ this.setState({acc : val})} }
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/imgs/yonghuming.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="md" />
                    <InputItem
                        placeholder="请输入密码"
                        type='pwd'
                        clear
                        value={this.state.pwd}
                        onChange={(val)=>{ this.setState({pwd : val})} }
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/imgs/mima.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>

                    <WhiteSpace size="sm" />
                    <p style={{display: this.state.errorText }}>用户名或密码错误</p>
                    <Button onClick={this.clickLogin.bind(this)} style={{backgroundColor:'#00BC5B',color:'#fff'}}>登录</Button>

                    <WhiteSpace size="md" />
                    <Flex justify="between">
                        <Link style={{color: '#00BC5B',cursor:'pointer'}} to='/Register'>手机快速注册</Link>
                        <Link style={{color: '#00BC5B',cursor:'pointer'}} to='/Forget'>忘记密码</Link>
                    </Flex>
                </WingBlank>
                <Flex justify="center">
                    <p style={{position:'fixed',bottom:'3%',color:'#DADEE3'}}>登录/注册即代表同意《贝壳房产用户协议》</p>
                </Flex>
            </div>
        )
    }

    async clickLogin(){
        let res = await login(this.state.acc,this.state.pwd)
        if(res.data === 'ok'){
            
            //登录成功
            Toast.success('欢迎您，登录成功！！！', 2,() => {
                window.location.href = '#/'
                localStorage.setItem('acc',this.state.acc)
            });     
        } else {
            Toast.offline('亲，您的账号或者密码输入有误 ！！！', 2);
        }
    }
}
