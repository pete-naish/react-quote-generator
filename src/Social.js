import React, { Component } from 'react';
import { Twitter, Facebook } from 'react-feather';

export class Social extends Component {
    render() {
        return (
            <div className="social">
                <a 
                    target="_blank"
                    className="twitter-share-button"
                    href="https://twitter.com/intent/tweet">
                    <Twitter />
                </a>
                <a 
                    href="./index.html">
                    <Facebook />
                </a>
            </div>
            
        )
    }
}