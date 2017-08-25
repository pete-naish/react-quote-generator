import React, { Component } from 'react';

export class QuoteText extends Component {
    render() {
        return (
            <div>
                <p className="text-justify">{this.props.quote}</p>
                <p className="font-weight-bold text-right">By: {this.props.author}</p>
            </div>
        );
    }
}