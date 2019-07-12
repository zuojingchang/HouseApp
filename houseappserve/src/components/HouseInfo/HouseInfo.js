import React, { Component } from 'react'

export default class HouseInfo extends Component {
    //公共组件设置默认值
    static defaultProps = {
        obj : {
            src : '图片',
            name : '名字',
            area : '面积',
            type : '类型',
            price : '价格',
            range : '区域',
            point : '多少平'
        }
    }
    render() {
        //公共组件参数
        let obj = this.props.obj
        return (<div className='likeItem'>
                    <div className='likeImg'>
                        <img src={ obj.src } alt='' ></img>
                    </div>         
                    <div className='likeTitle'>
                        <div>
                            <h4>{ obj.name }</h4>
                            <p>{ obj.area }&ensp;{ obj.range }</p>
                            <p>{ obj.type }&ensp;{ obj.point }平</p>
                        </div>
                        <h5>{ obj.price }/平</h5>
                    </div>
                </div>
        )
    }
}
