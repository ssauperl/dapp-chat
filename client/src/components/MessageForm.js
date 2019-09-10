import React, {Component} from 'react';

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
      }
    handleInputChange = evt => {
        const {value} = evt.target;
        this.setState({text:value});
    };

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.sendAMessage(this.state.text);
        this.setState({text:''});
    };
    render(){
        return (
            <form className="box" onSubmit={this.handleSubmit}>
                <textarea
                className="textarea"
                name="text"
                type="text"
                onChange={this.handleInputChange}
                value={this.state.text}
                />

                <input type="submit" value="Submit" />
            
            </form>
        )
    }
}

export default MessageForm;