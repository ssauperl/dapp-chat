import React, { Component } from "react";
//import messages from '../data/messages.json'
import HashAvatar from './HashAvatar'
import "../chatBubbles.sass";

class MessageItem extends Component {
    render() {
        const {message, mine} = this.props;
        return (
            <div className={mine ? 'chat-message chat-message-sender' : 'chat-message chat-message-recipient'}>
                <div class='chat-message-wrapper'>
                    <HashAvatar classes="chat-image chat-image-default" hash={message.origin}/>
                    <div class='chat-message-content'>
                        <p>{message.text}</p>
                    </div>

                    <div class='chat-details'>
                        <span class='chat-message-localization font-size-small'>{message.origin}</span>
                        <span class='chat-message-read-status font-size-small'>- {message.timestamp}</span>

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
                <div class='chat-message padding'>
                    {messages.map(message => (
                        <MessageItem
                            key={message.timestamp}
                            message={message}
                            mine={this.props.currentAccount===message.origin}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default MessageList;