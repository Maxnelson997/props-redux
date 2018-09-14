import React, { Component } from 'react';

class Card extends Component { 
    render() {
        const { children, title } = this.props;
        return (
            <div className='card'>
                <h1 className='card__title'>{title}</h1>
                {children}
            </div>
        )
    }
}

export default Card;