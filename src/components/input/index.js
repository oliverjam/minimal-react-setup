import React from 'react';
import './style.css';

class Input extends React.Component {
  render() {
    return (
   <p/>,<input onChange={(e) => this.props.updateUserOne(e.target.value)} />
    );
  }
}

export default Input;
