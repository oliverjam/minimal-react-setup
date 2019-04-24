import React from 'react';
import './style.css';

class Image extends React.Component {
  render() {
    return (
      <img src={this.props.source}/>
    );
  }
}

export default Image;
