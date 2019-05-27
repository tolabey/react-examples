import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactsWrapper from "./ContactsWrapper";
import Scroll from "./Scroll.js";
import Menu from './Menu.js';
import Todo from './TODO/Todo.js';
import Docs from './Docs.js';
import ReactRouter from './ReactRouter/ReactRouter';
import DortyuzDort from './DortyuzDort';
import TableWrapper from './TableWrapper';
import StarbucksAndNero from './StarbucksAndNero';
import Hoisting from "./Hoisting/Hoisting";

class Router extends React.Component {

    render() {

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Menu}/>
                    <Route path="/contacts" component={ContactsWrapper} />
                    <Route path="/scroll-position" component={Scroll}/>
                    <Route path="/docs" component={Docs}/>
                    <Route path="/todo" component={Todo}/>
                    <Route path="/reactRouter" component={ReactRouter}/>
                    <Route path="/hoisting" component={Hoisting}/>
                    <Route path="/StarbucksAndNero" component={StarbucksAndNero}/>
                    <Route path="/TableWrapper" component={TableWrapper}/>
                    <Route from="/" to="/404" component={DortyuzDort}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;