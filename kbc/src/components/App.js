import React, { Component } from 'react';
import {Router,Route,browserHistory,Redirect,IndexRoute} from "react-router";
import Container from "../container/container"
import Home from "./Home";
import Game from "./Game";
import Result from "./Result";
import {Provider} from "react-redux";
import store from "../store";

class App extends Component {
    render () {
        return (
            <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={Container}>
                    <IndexRoute component={Home}/>
                    <Route path="/game" component={Game}/>                    
                    <Route path="/result" component={Result}/>
                    <Redirect from="*" to="/"/>
                </Route>                                                        
            </Router>
            </Provider>
        )
    }
}

export default App