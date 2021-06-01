import React, { Component } from 'react';

export default class DelayedButton extends Component {
  // a function
  this.props.onDelayedClick
  // a number

  handleClick = (event) => {
    event.persist()
    setTimeout(() = this.props.delay
    )

  }
  
  render() {
    return (
      <button onClick={this.handleClick} />
    )
  }
  
}