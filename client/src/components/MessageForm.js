import React, { Component } from 'react';

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    handleInputChange = evt => {
        const { value } = evt.target;
        this.setState({ text: value });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.sendAMessage(this.state.text);
        this.setState({ text: '' });
    };
    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit}>

                <div class="field">
                    <p class="control">
                        <textarea
                            className="textarea"
                            placeholder="message"
                            name="text"
                            type="text"
                            onChange={this.handleInputChange}
                            value={this.state.text}
                        />
                    </p>
                </div>
                <div className="level-left">
                    <div class="level-item">
                        <input type="submit" className="button is-primary" value="Submit" />
                    </div>
                </div>

            </form>
        )
    }
}

export default MessageForm;