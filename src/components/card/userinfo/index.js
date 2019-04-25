import React from 'react';
import './style.css';

class GInfo extends React.Component {
  render() {
    return (
      <div className="gInfo">
      <img id="profile" src={this.props.url_pic}/>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default GInfo;
