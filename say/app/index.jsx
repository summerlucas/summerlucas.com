import React from 'react';
import {render} from 'react-dom';
import { ButtonToolbar, Button } from 'react-bootstrap';

require('../stylesheets/index.scss');

class Say extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.say = this.say.bind(this);
    this.change = this.change.bind(this);
  }

  change(event) {
    this.setState({ value: event.target.value });
  }

  say() {       
    var msg = new SpeechSynthesisUtterance(this.state.value);
    window.speechSynthesis.speak(msg);
    this.setState({ value: '' });
  }

  render () {
    return (
      <form action='#' onSubmit={this.say}>
        <input type="input" value={this.state.value} onChange={this.change} placeholder="type & hit enter" />
      </form>
    )   
  }

}

render(<Say />, document.getElementById('say'));