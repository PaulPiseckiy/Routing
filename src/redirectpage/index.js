import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './index.css'

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 5
    }
    
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  
  tick() {
    const { time } = this.state;

    this.setState({ time: time - 1})
  }

  render() {
    const { time } = this.state;
    return (
      <div className="notif">
        You will be redirected in <b className="timer">{this.state.time}</b> seconds.
        {time === -1
          ? <Redirect to="/" />
          : null
        }
      </div>
    )
  }
}

export { Notification };