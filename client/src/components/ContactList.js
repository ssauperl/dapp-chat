import React, { Component } from "react";
//import contacts from '../data/contacts.json'
import HashAvatar from './HashAvatar'

class ContactItem extends Component {
    render() {
        const {address, name} = this.props;
        return (
            <article>
                <HashAvatar hash={address}/>
                <div className="contact">
                    <strong>@{address}</strong>
                </div>
            </article>
        );
    }
}
class ContactList extends Component {

    render() {
        const contacts = this.props.contacts || [];
        return (
            <ul className="contactList">
                {contacts.map(contact => (
                <li>
                    <ContactItem
                        key={contact}
                        address={contact}
                    />
                </li>
                ))}
            </ul>
        );
    }
}

export default ContactList;