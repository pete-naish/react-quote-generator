import React, { Component } from 'react';

export class Button extends Component {
    render() {
        return (
            <button 
                type="button"
                className="btn btn-info"
                onClick={this.props.onClick}>
                Get my quote
            </button>
        );
    }
}