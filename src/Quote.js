import React, { Component } from 'react';
import axios from 'axios';
import { QuoteText } from './QuoteText';
import { Button } from './Button';
import { Social } from './Social';

const randomColor = () => `#${Math.random().toString(16).substr(-6)}`;
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

  componentDidMount() {
    this.getQuote();

    this.timerChangeBackground = setInterval(
      () => this.getQuote(),
      timer
    );
  }

  changeBackgroundColor = () => {
    this.setState({ backgroundColor: randomColor() })
  }

  getQuote = () => {
    axios
      .get('https://talaikis.com/api/quotes/random/')
      .then(response => {
        this.setState({
          quote: response.data.quote,
          author: response.data.author
        });

        this.changeBackgroundColor();
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { quote, author, backgroundColor } = this.state;

    return (
      <div style={ { backgroundColor } } className="container">
        <div className="wrapper">
          <QuoteText
            quote={quote}
            author={author}
          />
          <Button onClick={this.getQuote} />
          <Social />
        </div>
      </div>
    );
  }
}
