import React, { Component } from "react";
import jdenticon from "jdenticon"

class HashAvatar extends Component {
    render() {
        const {classes, hash} = this.props;
        const avatar = jdenticon.toSvg(hash, 30);
        return (
            <div className={classes} dangerouslySetInnerHTML={{__html:avatar}} />
        );
    }
}

export default HashAvatar;