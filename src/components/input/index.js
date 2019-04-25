import React from 'react';
import './style.css';

class Input extends React.Component {
  render() {
    return (
    <input onChange={(e) => this.props.updateUser(e.target.value)} />
    );
  }
}

export default Input;
