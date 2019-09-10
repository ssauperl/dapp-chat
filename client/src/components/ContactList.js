import React, { Component } from "react";
//import contacts from '../data/contacts.json'
import HashAvatar from './HashAvatar'

class ContactItem extends Component {
    handleTargetAddressChange = evt => {
        const { value } = evt.target;
        this.props.setTargetAccount(value);
    };

    handleCurrentAddressChange = evt => {
        const { value } = evt.target;
        this.props.setCurrentAccount(value);
    };
    render() {
        const { address, currentAccount, targetAccount } = this.props;
        return (
            <article className="media">
                <HashAvatar hash={address} classes="media-left" />
                <div class="media-content">
                    <div class="content">
                        <strong>@{address}</strong>
                    </div>
                    <div className="level">
                        <div className="fromAccount level-left">

                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="fromAccount"
                                        checked={address === currentAccount}
                                        value={address}
                                        onChange={this.handleCurrentAddressChange} />
                                    set as current account
                                </label>
                            </div>
                        </div>
                        <div className="targetAccont level-right">
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="targetAccont"
                                        checked={address === targetAccount}
                                        value={address}
                                        onChange={this.handleTargetAddressChange} />
                                    set as recieving account
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}
class ContactList extends Component {

    render() {
        const contacts = this.props.contacts || [];
        return (
            <div className="container">
                <div class="box">
                    {contacts.map(contact => (
                        <ContactItem
                            key={contact}
                            address={contact}
                            currentAccount={this.props.currentAccount}
                            targetAccount={this.props.targetAccount}
                            setCurrentAccount={this.props.setCurrentAccount}
                            setTargetAccount={this.props.setTargetAccount}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default ContactList;