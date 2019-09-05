import React, { Component } from "react";
import contacts from '../data/contacts.json'

class ContactItem extends Component {
    render() {
        const {address, name} = this.props;
        return (
            <article>
                <div className="contact">
                    {address}
                    <strong>@{name}</strong>
                </div>
            </article>
        );
    }
}
class ContactList extends Component {
    render() {
        return (
            <ul className="contactList">
                {contacts.map(contact => (
                <li>
                    <ContactItem
                        key={contact.address}
                        name={contact.name}
                        address={contact.address}
                    />
                </li>
                ))}
            </ul>
        );
    }
}

export default ContactList;