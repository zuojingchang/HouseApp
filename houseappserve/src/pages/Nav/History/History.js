import React, { Component } from 'react'

import { WingBlank, WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux'

import HouseInfo from '../../../components/HouseInfo/HouseInfo'

class History extends Component {
    render() {
        let { historylist } = this.props
        return (
            <div>
                <WingBlank>
                <WhiteSpace size='md' />
                <h4 style={{display : historylist.length === 0 ? 'block' : 'none'}}>您还没有足迹哦~亲</h4>
                <h4 style={{display : historylist.length > 0 ? 'block' : 'none'}}>您最近看过▼</h4>
                <WhiteSpace size='md' />
                    {
                        this.props.historylist.map(obj => <HouseInfo key={ obj.id } obj={obj} />)
                    }
                </WingBlank>
            </div>
        )
    }  
}


export default connect((state) => {
    return {
        historylist : state.historylist
    }
})(History)