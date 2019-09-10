import React, { Component } from "react";
//import contacts from '../data/contacts.json'
import HashAvatar from './HashAvatar'

class ContactItem extends Component {
    handleTargetAddressChange = evt => {
        const {value} = evt.target;
        this.props.setTargetAccount(value);
    };
    
    handleCurrentAddressChange = evt => {
        const {value} = evt.target;
        this.props.setCurrentAccount(value);
    };
    render() {
        const {address, currentAccount, targetAccount} = this.props;
        return (
            <article>
                <div className="fromAccount">
                    <input type="radio" name="fromAccount" 
                        checked={address === currentAccount} 
                        value={address}
                        onChange={this.handleCurrentAddressChange}/>
                </div>
                <HashAvatar hash={address}/>
                <div className="contact">
                    <strong>@{address}</strong>
                </div>
                <div className="targetAccont">
                    <input type="radio" name="targetAccont" 
                        checked={address === targetAccount} 
                        value={address}
                        onChange={this.handleTargetAddressChange}/>
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
                        currentAccount={this.props.currentAccount}
                        targetAccount={this.props.targetAccount}
                        setCurrentAccount={this.props.setCurrentAccount}
                        setTargetAccount={this.props.setTargetAccount}
                    />
                </li>
                ))}
            </ul>
        );
    }
}

export default ContactList;