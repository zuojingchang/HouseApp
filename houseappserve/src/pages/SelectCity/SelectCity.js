import React, { Component } from 'react'
import { selectCity } from '../../apis/apis'
import BScorll from 'better-scroll'

import { List } from 'antd-mobile';

const Item = List.Item;
export default class SelectCity extends Component {
   
    constructor(){
        super()
        this.state = {
            city : [],
            hotcity:[],
            currentCity:'定位中'
        }
    }
    render() {
        return (<div style={{backgroundColor:'#fff'}}>
                <p style={{height:'30px',lineHeight:'30px',fontSize:'16px', marginLeft: 12}}>当前定位{this.state.currentCity}</p>

                 {/* 右边定位 */}
                <div onTouchMove={this.touchMove.bind(this)} style={{position:'fixed', zIndex:'50',right:0,top:'30%',width:'14px'}}>
                    { 
                        this.state.city.map((obj,index) => <div className='s_city_cls' onClick={this.clickTitle.bind(this,obj.title)} key={ index }>
                            {obj.title}
                        </div>)
                    }
                </div>
                {/* 左边盒子 */}
                <div id='box_left' style={{width:'95%',position:'fixed',height:'100%',overflow:'auto'}}>
                    <ul className="content">
                        {/* 热门城市 */}
                        <p style={{fontSize:'20px',paddingLeft:'5px',color:'#ff0000',marginLeft: 12}}>热门城市
                        </p>
                        <div style={{display:'flex',flexWrap:'wrap',alignContent:'center',textAlign:'center',backgroundColor : '#fff'}}>
                            
                                {
                                this.state.hotcity.map((obj,index) =><div key={index} style={{width:'27%',padding:'10px'}}>
                                    {obj}
                                </div>)
                            }
                        </div>
                        <List>
                            {
                                this.state.city.map((obj,index) =>  <Item  id={obj.title}  key={ index }>
                                    {obj.title}
                                    <div>
                                        {   
                                            /* 城市列表 */
                                            obj.lists.map((obj,index) =>  <Item key={index}  activeStyle={{backgroundColor : '#3E73EC'}} platform='android' onClick={()=>{}}>
                                                <div style={{fontSize:'16px'}}> { obj }</div>
                                               
                                            </Item> )
                                        }
                                    </div>
                                </Item> )
                            }
                        </List>
                    </ul>    
                </div>   
            </div>
        )
    }

    touchMove(e){
        let curElt = document.elementFromPoint(e.touches[0].clientX,e.touches[0].clientY)
        if(curElt && curElt.className === 's_city_cls'){     
            this.leftScorll.scrollToElement(document.getElementById(curElt.innerHTML),300)
        }
    }
    clickTitle(title){
        this.leftScorll.scrollToElement(document.getElementById(title),300)   
    }
    async componentDidMount(){
        this.leftScorll = new BScorll('#box_left')

        var _this = this
        //接收JSON请求的文件
        let res = await selectCity()
        let {city,hotcity}  = res.data
            this.setState({
                city : city,
                hotcity:hotcity
            })  

        // 当期定位城市
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        await citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                   
                    // document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                    _this.setState({
                        currentCity : cityinfo
                    })
                    // //地图显示当前城市
                    // map.setBounds(citybounds);
                }
            } else {
                // document.getElementById('info').innerHTML = result.info;
                console.log(result.info);
            }
        });          
    }
}
