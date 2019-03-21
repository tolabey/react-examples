import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ContactsWrapper from "./ContactsWrapper";
import Scroll from "./Scroll.js";
import Menu from './Menu.js';
import Todo from './TODO/Todo.js';


class Router extends React.Component {

    render() {
        console.log("store", this.props)
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Menu}/>
                    <Route path="/contacts" component={ContactsWrapper} />
                    <Route path="/scroll-position" component={Scroll}/>
                    <Route path="/todo" component={Todo}/>
                    <Redirect from="/" to="/404" />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;