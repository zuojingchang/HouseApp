import React, { Component } from 'react'

import { InputItem, WingBlank, WhiteSpace,Button } from 'antd-mobile';
export default class Forgetpwd extends Component {
    render() {
        return (
            <div>
                <WingBlank>
                    <div style={{position:'relative'}}>
                        <span onClick={this.clickLogin} style={{position:'absolute',left:'5px',top:'18px'}}><img style={{width:'20px'}} src={require('../../assets/imgs/pwd_icon_back.png')} alt=""/></span>
                        <div style={{lineHeight:'50px',textAlign:'center',fontSize:'16px',color:'#394043' }}>找回密码</div>
                    </div>
                    <WhiteSpace size="sm" />
                    <InputItem
                        placeholder="请输手机号"
                        extra='获取验证码'
                        clear
                    />
                    <WhiteSpace size="sm" />
                    <InputItem
                        placeholder="请输入验证码"
                        clear
                    />
                    <WhiteSpace size="sm" />
                    
                    <InputItem
                        placeholder="请输入新密码"
                        clear
                    />
                    
                    <WhiteSpace size="xl" />
                    <Button style={{backgroundColor:'#00BC5B',color:'#fff'}}>提交</Button>
                </WingBlank>
            </div>
        )
    }

    clickLogin(){
        window.location.href = '#/login'
    }
}
