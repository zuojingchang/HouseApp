import React, { Component } from 'react'
import { Button } from 'antd-mobile';
import './chat.css'
export default class Chat extends Component {
    render() {
        return (
            <div className='chat'>
                <div className='chat_div'>
                    <div className='chat_head'>
                        <img src={require('../../../assets/imgs/touxiang.jpg')} alt=""/>
                    </div>
                    <div className='chat_title'>
                        <p>专业顾问：<label>张小妹</label></p>
                        <p>专业服务诚信做人诚信做事</p>
                    </div>
                    {/* <WhiteSpace size="lg" /> */}
                    <Button  size="small" style={{ marginRight: '4px', backgroundColor : '#1AAD00' , color : '#fff' }}>我要聊天</Button>
                </div>
            </div>
        )
    }
}
