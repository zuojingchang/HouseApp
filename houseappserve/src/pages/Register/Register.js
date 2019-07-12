import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../../apis/apis'
import { Flex,InputItem, WingBlank, WhiteSpace,Button,Toast,Checkbox } from 'antd-mobile';
const AgreeItem = Checkbox.AgreeItem;
export default class Register extends Component {
    constructor(){
        super()
        this.state = {
            acc : '',
            pwd : '',
        }
    }
    render() {
        return (
            <div>
                <WingBlank>
                    <div style={{lineHeight:'50px',textAlign:'center',fontSize:'16px',color:'#394043' }}>快速注册</div>
                    <InputItem
                        placeholder="请输入账号"
                        clear
                        value={this.state.acc}
                        onChange={val => this.setState({ acc : val })}
                    />
                    <WhiteSpace size="sm" />
                    <InputItem
                        placeholder="请输入密码"
                        clear
                        value={this.state.pwd}
                        onChange={val => this.setState({pwd : val })}
                    />
                    <WhiteSpace size="sm" />
                    
                    <InputItem
                        extra='获取验证码'
                        placeholder="请输入验证码"
                        clear
                    />
                    
                    <Flex>
                        <Flex.Item>
                            <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                                <label style={{color:'#BCCADD'}}>我已同意</label><label style={{color:'#00BC5B'}}>《用户服务协议》及《隐私权政策》</label>
                            </AgreeItem>
                        </Flex.Item>
                    </Flex>


                    <WhiteSpace size="xl" />
                    <Button onClick={this.clickReg.bind(this)} style={{backgroundColor:'#00BC5B',color:'#fff'}}>注册</Button>

                    <WhiteSpace size="xl" />
                    <Link style={{color: '#00BC5B',cursor:'pointer'}} to='/Login'>已有账号</Link>
                </WingBlank>
            </div>
        )
    }

    async clickReg(){
        let res = await register(this.state.acc,this.state.pwd)
        if(res.data === 'ok'){
            Toast.success('注册成功，请登录！！！', 2,()=>{
                window.location.href = '#/login'
            });
           
        }
    }
}
