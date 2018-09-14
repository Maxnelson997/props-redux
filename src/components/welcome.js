import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        const { name } = this.props;
        return (
            <div className='welcome'>
                <p className='welcome__message'>Hi welcome to the app {name}!</p>
            </div>
        )
    }
}

export default Welcome;