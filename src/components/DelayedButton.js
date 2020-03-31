// Code DelayedButton Component Here
import React from "react";

export default class DelayedButton extends React.Component {
  delayFunction = event => {
    event.persist();
    setTimeout(() => {
      return this.props.onDelayedClick(event);
    }, this.props.delay);
  };
  render() {
    return <button onClick={this.delayFunction}>DelayedButton</button>;
  }
}
