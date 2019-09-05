import React, { Component } from "react";
import messages from '../data/messages.json'
import HashAvatar from './HashAvatar'
import "../chatBubbles.sass";

class MessageItem extends Component {
    render() {
        const {message} = this.props;
        return (
            <div className={message.mine ? 'chat-message chat-message-sender' : 'chat-message chat-message-recipient'}>
                <div class='chat-message-wrapper'>
                    <HashAvatar classes="chat-image chat-image-default" hash={message.address}/>
                    <div class='chat-message-content'>
                        <p>{message.message}</p>
                    </div>

                    <div class='chat-details'>
                        <span class='chat-message-localization font-size-small'>{message.address}</span>
                        <span class='chat-message-read-status font-size-small'>- {message.timestamp}</span>

                    </div>
                </div>
            </div>
        );
    }
}
class MessageList extends Component {
    render() {
        return (
            <div className="messageList chat-wrapper">
                <div class='chat-message padding'>
                    {messages.map(message => (
                        <MessageItem
                            key={message.timestamp}
                            message={message}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default MessageList;