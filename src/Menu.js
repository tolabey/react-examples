import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (
            <div className="routers">
                <Link to="/contacts"><button>{"Route the contacts"}</button></Link>
                <Link to="/scroll-position"><button>{"Route the scroll-posititon"}</button></Link>
                <Link to="/docs"><button>{"docs"}</button></Link>
            </div>
        )
    }
}

export default Menu;