import React, { Component } from 'react'
import { WingBlank, WhiteSpace, Button } from 'antd-mobile';


export default class Map extends Component {
    constructor(){
        super()
        this.state = {
            city : '定位中'
        }
    }
    render() {
        return (
            <div>
                <WingBlank size="sm">
               
                    <h1 style={{textAlign:'center',fontSize: '30px'}}>{this.state.city}地图</h1>
                    <WhiteSpace size="xl" />
                    <div id='map' style={{width:'100%',height:'300px'}}></div>

                    <WhiteSpace size="xl" />

                    <Button onClick={this.clickBackMain} type="primary" inline size="small" style={{ marginRight: '4px' }}>返回主页</Button>
                </WingBlank>
            </div>
        )
        
    }

    componentDidMount(){
        let _this = this
        var map = new window.AMap.Map("map", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });

          //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
          //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    //   document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                    _this.setState({
                        city : cityinfo
                    })
                    //   //地图显示当前城市
                    map.setBounds(citybounds);
                  }
            } else {
                // document.getElementById('info').innerHTML = result.info;
            }
        });
    }
    //点击返回首页
    clickBackMain(){
        window.location.href = '#/'
    }
}
