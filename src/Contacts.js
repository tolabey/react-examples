import React from "react";
import './contacts.scss';
import loaderHOC from './HOC/loaderHOC.js';

class Contacts extends React.Component {

    userList() {
        return this.props.contacts.map(oneUser => {
            return <div className="one-user" key={oneUser.id.value}>
                <img src={oneUser.picture.thumbnail} alt=""/>
                <div className="name">{oneUser.name.first}</div>
                <div className="lastname">{oneUser.name.last}</div>
                <div className="email">{oneUser.email}</div>
            </div>
        })
    }

    render() {
        return (
            <div className="users">
                {this.userList()}
            </div>
        )
    }
}

export default loaderHOC(Contacts);