import React, { Component } from 'react'
import { List, Badge, WhiteSpace } from 'antd-mobile';

import './my.css'
export default class My extends Component {
    constructor(){
        super()
        this.state = {
            acc : '',
            list: [{id:'1', icon : 'my_icon_jifen',text : '我的积分'},
                { id:'2',icon : 'my_icon_dingyue',text : '我的订阅'},
                { id:'3',icon : 'my_icon_lianxiren',text : '微聊联系人'},
                { id:'10'},
                { id:'4',icon : 'my_icon_jisuanqi',text : '房贷计算器'},
                { id:'5',icon : 'my_icon_fangzi',text : '我的房子'},
                { id:'11'},
                { id:'6',icon : 'my_icon_jilu',text : '我的看房记录'},
                { id:'7',icon : 'my_icon_wenda',text : '我的问答'},
                { id:'12'},
                { id:'8',icon : 'my_icon_shezhi',text : '我的设置'},
                { id:'9',icon : 'my_icon_yijian',text : '意见反馈'}]  
        }
    }
    render() {
        return (
            <div className='my'>
                <div className='my_top_div'>
                    {/* 顶部上 */}
                    <div className='my_top'>
                        <div className='myImg'>
                            <img src={require('../../../assets/imgs/touxiang.jpg')} alt=""/>
                        </div>
                        <div className='myLoginReg_div'>
                            <div>
                                <p className='myLoginReg' style={{display : this.state.acc === '' ? 'block' : 'none'}}>
                                    <label onClick={this.clickLogin}>登录</label>/<label onClick={this.clickRegister}>注册</label>
                                </p>
                                <p style={{display : this.state.acc === '' ? 'none' : 'block', fontSize: '18px'}}>{this.state.acc}</p>
                                <p onClick={this.clickChat.bind(this)}>可以与经纪人发起聊天</p>
                            </div> 
                            <div className='myIconSet'>
                                <img src={require('../../../assets/imgs/shezhi.png')} alt='' />
                            </div> 
                        </div>
                    </div>

                    {/* 顶部下 */}
                    <div className='my_top_bottom'>
                        <div>
                            <img src={require('../../../assets/imgs/qianbaoqiandaiyue.png')} alt=""/>
                            <label>钱包</label>
                        </div>
                        <div>
                            <img src={require('../../../assets/imgs/coupon.png')} alt=""/>
                            <label>优惠</label>
                        </div>
                        <div className='my_top_bottom_three'>
                            <img src={require('../../../assets/imgs/jifen.png')} alt=""/>
                            <label>积分</label>
                        </div>
                    </div>
                </div>
                <WhiteSpace size="lg" />
                <List>
                    {
                        this.state.list.map(obj => {
                            if(obj.icon){
                                return <List.Item key={ obj.id } activeStyle={{backgroundColor : '#3E73EC'}} platform='android' onClick={this.clickIcon.bind(this,obj.text)} extra arrow="horizontal">
                                    <Badge>
                                        <span style={{ width: '26px', height: '26px'}}><img src={require('../../../assets/imgs/' + obj.icon + '.png')} alt='' /> </span>
                                    </Badge>
                                    <span style={{ marginLeft: 12,fontSize:'14px' }}>{ obj.text }</span>
                                </List.Item>
                            }else{
                                return <div style={{height: '10px', backgroundColor: '#F4F4F4'}} key={ obj.id }></div>
                            }
                        })
                    }
                </List>
               
            </div>

        )
    }
    clickIcon(text){
        console.log(text);
    }

    clickLogin(){
        window.location.href = '#/login'
    }

    clickRegister(){
        window.location.href = '#/register'
    }

    clickChat(){
        this.props.toChat()
    }

    componentDidMount(){
        if( localStorage.getItem('acc')){
            this.setState({
                acc : localStorage.getItem('acc')
            })
        }
        
    }

}
