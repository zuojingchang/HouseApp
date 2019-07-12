import React, { Component } from 'react'
import { connect } from 'react-redux'
import HouseInfo from '../../../components/HouseInfo/HouseInfo'
import './Main.css'
import { Carousel, WingBlank, WhiteSpace,Grid, } from 'antd-mobile';
import { reqMain } from '../../../apis/apis';


const data = [
    {icon:'icon_newhouse',text:'新房'},
    {icon:'icon_tallage',text:'优惠'},
    {icon:'icon_office',text:'办公楼'},
    {icon:'icon_renting',text:'二手房'},
    {icon:'icon_overseas',text:'海外房产'},
    {icon:'icon_questions',text:'资讯'},
    {icon:'icon_message',text:'售房信息'},
    {icon:'icon_computer',text:'计算房价'}].map( _val => ({
    icon: [`${require('../../../assets/imgs/'+ _val.icon +'.png')}`],
    text: _val.text,
  }));

  //房产权百科数据
  const data1 =[
    {icon:'qiandai',text:'我要贷款'},
    {icon:'jisuanqi',text:'房贷计算'},
    {icon:'zhishi',text:'知识'},
    {icon:'saoyisao',text:'扫一扫'}].map( _val => ({
    icon: [`${require('../../../assets/imgs/'+ _val.icon +'.png')}`],
    text: _val.text,
  }));
class Main extends Component {
    constructor(){
        super()
        this.state = {
            data: ['1', '2', '3'],
            city : '定位中',
            //主页参数
            list : []

        }
    }   
    render() {
        return (
            <div>
                {/* 顶部搜索 */}
                <div className='top_div'>
                    <label style={{color:'#fff'}} onClick={this.clickCity} >{this.state.city}▼</label>
                    <div className='search_div'>
                        <img src={require('../../../assets/imgs/top_search.png')} alt='' />
                        <label onClick={this.clickSearch} style={{color:'#707070'}}>挑好房，上贝壳房产App</label>
                    </div>
                    <img onClick={this.clickMap} className='mymap' src={require('../../../assets/imgs/top_map.png')} alt='' />
                </div>

                {/* 轮播 */}
              
                    <Carousel
                    autoplay
                    infinite
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href='#/active'
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={require(`../../../assets/imgs/banner${val}.jpg`)}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                        />
                        </a>
                    ))}
                    </Carousel>
                <WingBlank>
                    <WhiteSpace size='md' />
                    {/* 宫格 */}
                    <Grid data={data} hasLine={false}/>
                    
                    {/* 房产全百科 */}
                    <WhiteSpace size="lg" />
                    <div className="sub-title">
                        <label className='equity_lable'>房产权百科</label>&emsp;专业买房攻略    
                    </div>
                    <Grid data={data1}  hasLine={false} columnNum={4} />
                    

                    {/* 猜你喜欢 */}
                    <WhiteSpace size="xs" />
                    <div className="youLike">
                        <p>猜你喜欢</p>
                        {
                            this.state.list.map(obj => <div key={obj.id} onClick={this.clickHouse.bind(this,obj)}>
                                <HouseInfo obj={obj}></HouseInfo>
                            </div> )
                        }
                    </div>
                </WingBlank>
            </div>
        )
    }

    //点击将首页内容发至足迹页面
    clickHouse(obj){
        // console.log(obj);
        this.props.dispatch({
            type : 'addHouse',
            obj
        })
        
    }
    //点击切换城市页面
    clickCity(){
        window.location.href = '#/selectcity'
    }
    //点击切换搜索页面
    clickSearch(){
        window.location.href = '#/search'
    }
    //点击切换地图页面
    clickMap(){
        window.location.href = '#/map'
    }
    async componentDidMount(){
        var _this = this
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        await citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    // var citybounds = result.bounds;
                    // document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                    _this.setState({
                        city : cityinfo
                    })
                    // //地图显示当前城市
                    // map.setBounds(citybounds);
                }
            } else {
                // document.getElementById('info').innerHTML = result.info;
                console.log(result.info);
            }
        });
        //主页参数请求
        let res = await reqMain()        
        this.setState({
            list : res.data
        });
    }
}

export default connect()(Main)
