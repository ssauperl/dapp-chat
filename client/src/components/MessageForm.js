import React, {Component} from 'react';

class MessageForm extends Component {
    render(){
        return (
            <form className="box">
            <textarea
              className="textarea"
              name="text"
              type="text"
            />

            <input type="submit" value="Submit" />
            
        </form>
        )
    }
}

export default MessageForm;