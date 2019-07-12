import React, { Component } from 'react'
import {HashRouter,Switch,Route} from 'react-router-dom'

//---------------  react-router  -----------------
import Nav from './pages/Nav/Nav'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import SelectCity from './pages/SelectCity/SelectCity' 
import Forgetpwd from './pages/Forgetpwd/Forgetpwd'
import Map from './pages/Map/Map'  //引入地图组件
import Search from './pages/Search/Search'
import Active from './pages/Active/Active'
import Error from './pages/Error/Error'

//---------------  react-redux  -----------------
import store from './store'
import { Provider } from 'react-redux'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={ Nav }></Route>
                        <Route  path='/login' component={ Login }></Route>
                        <Route  path='/register' component={ Register }></Route> 
                        <Route  path='/selectcity' component={ SelectCity }></Route>
                        <Route  path='/forget' component={ Forgetpwd }></Route>
                        <Route  path='/map' component={ Map }></Route>
                        <Route  path='/search' component={ Search }></Route>
                        <Route  path='/active' component={ Active }></Route>

                        <Route  component={ Error }></Route>
                    </Switch>
                </HashRouter>
            </Provider>
        )
    }
}
