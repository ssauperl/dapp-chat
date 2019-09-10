import React, {Component} from 'react';

class MessageFetchButton extends Component {
    handleSubmit = evt => {
        evt.preventDefault();
        this.props.getMessages();
    };

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <button type>Load chat</button>
            </form>
        )
    }
}

export default MessageFetchButton;