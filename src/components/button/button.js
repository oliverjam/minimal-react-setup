import React from 'react';
import './button.css';

class Button extends React.Component {
  state = {
    toggled: false,
  };
  render() {
    return (
      <button
        onClick={() =>
          this.setState(prevState => ({ toggled: !prevState.toggled }))
        }
      >
        {this.state.toggled ? 'Toggled' : this.props.children}
      </button>
    );
  }
}

export default Button;
