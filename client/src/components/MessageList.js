import React, { Component } from "react";
//import messages from '../data/messages.json'
import HashAvatar from './HashAvatar'
import "../chatBubbles.sass";
import moment from 'moment';

class MessageItem extends Component {
    render() {
        const {message, mine} = this.props;
        let formatedDate = moment.unix(message.timestamp).fromNow();
        return (
            <div className={mine ? 'chat-message chat-message-sender' : 'chat-message chat-message-recipient'}>
                <div className='chat-message-wrapper'>
                    <HashAvatar classes="chat-image chat-image-default" hash={message.origin}/>
                    <div className='chat-message-content'>
                        <p>{message.text}</p>
                    </div>

                    <div className='chat-details'>
                        <span className='chat-message-localization font-size-small'>{message.origin}</span>
                        <span className='chat-message-read-status font-size-small'>- {formatedDate}</span>

                    </div>
                </div>
            </div>
        );
    }
}
class MessageList extends Component {
    render() {
        const messages = this.props.messages || [];
        return (
            <div className="messageList chat-wrapper">
                <div className='chat-message padding'>
                    {messages.map(message => (
                        <MessageItem
                            key={message.timestamp}
                            message={message}
                            mine={this.props.currentAccount===message.origin}
                            web3={this}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default MessageList;