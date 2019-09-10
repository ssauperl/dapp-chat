import React, {Component} from 'react';

class MessageForm extends Component {
    handleInputChange = evt => {
        const {value} = evt.target;
        this.setState({text:value});
    };

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.sendAMessage(this.state.text);
    };
    render(){
        return (
            <form className="box" onSubmit={this.handleSubmit}>
                <textarea
                className="textarea"
                name="text"
                type="text"
                onChange={this.handleInputChange}
                />

                <input type="submit" value="Submit" />
            
            </form>
        )
    }
}

export default MessageForm;