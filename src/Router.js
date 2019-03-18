import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ContactsWrapper from "./ContactsWrapper";
import ScrollPosition from "./FACC/ScrollPosition.js";
import Menu from './Menu.js';


class Router extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Menu}/>
                    <Route path="/contacts" component={ContactsWrapper} />
                    <Route path="/scroll-position" component={ScrollPosition}/>
                    <Redirect from="/" to="/404" />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;