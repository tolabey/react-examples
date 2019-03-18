import React from "react";
import Contacts from './Contacts';

class ContactsWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = { contacts: []}
    }

    componentDidMount() {
        fetch('https://api.randomuser.me/?nat=us,gb&results=20')
            .then(res => res.json())
            .then(res => {
                this.setState({ contacts: res.results })
            })
    }

    render() {
        return (
            <Contacts contacts={this.state.contacts}/>
        )
    }
}

export default ContactsWrapper;