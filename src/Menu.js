import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (
            <div className="routers">
                <Link to="/contacts"><button>{"Route the contacts"}</button></Link>
                <Link to="/scroll-position"><button>{"Route the scroll-posititon"}</button></Link>
                <Link to="/docs"><button>{"docs"}</button></Link>
                <Link to="/todo"><button>{"todo"}</button></Link>
                <Link to="/hoisting"><button>{"Hoisting"}</button></Link>
                <Link to="/StarbucksAndNero"><button>{"StarbucksAndNero"}</button></Link>
                <Link to="/reactRouter"><button>{"ReactRouter"}</button></Link>
            </div>
        )
    }
}

function mapProps(store) {
    return {
        is: store.get('is', 'not'),
    }
}

export default connect(mapProps)(Menu);