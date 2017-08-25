import React, { Component } from 'react';
import { QuoteText } from './QuoteText';
import { Button } from './Button';
import { Social } from './Social';
import axios from 'axios';

const randomColor = () => '#' + Math.random().toString(16).substr(-6);
const timer = 5000;

export class Quote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quote: '',
            author: '',
            backgroundColor: randomColor()
        };
    }
    
    // Get first quote on page load
    componentDidMount() {
        this.getQuote();
        // Add timer which automatically changes background color and quotes
        this.timerChangeBackground = setInterval(
            () =>  {
                this.changeBackgroundColor();
                this.getQuote()
            },
            timer
        );
    }

    // Set backgroundColor state
    randomizeColor = () => this.setState({ backgroundColor: randomColor()});

    // Change background color
    changeBackgroundColor = () => {
        // Generate new color
        this.randomizeColor();
        // Set the body bg
        document.body.style.backgroundColor = this.state.backgroundColor;
    }

    // Get quote json
    getQuote = () => {
        axios.get(`https://talaikis.com/api/quotes/random//`)
        .then(response => {
            this.setState({
                quote: response.data.quote,
                author: response.data.author
            })
        })
        .catch(function(error) {
            // Display errors if have
            console.log(error);
        });
        
        // Change background when getting quote
        this.changeBackgroundColor();
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-6 wrapper">
                        <QuoteText 
                            quote={this.state.quote}
                            author={this.state.author}
                        />
                        <Button onClick={this.getQuote.bind(this)} />
                        <Social />
                    </div>
                </div>
            </div>
        );
    }
}