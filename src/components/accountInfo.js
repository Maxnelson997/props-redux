import React, { Component } from 'react';

class AccountInfo extends Component {
    render() {
        const { name, about } = this.props;
        return (
            <div className='account-info'>
                <label className='account-info__name'>NAME: {name}</label>
                <label className='account-info__about'>ABOUT: {about}</label>
            </div>
        )
    }
}

export default AccountInfo;