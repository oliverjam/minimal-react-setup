import React from 'react';
import './style.css';

class Statistics extends React.Component {

  render() {
    return (
      // <div id="table">
        <table>
          <tr>
            <td>Projects count</td>
            <td>{this.props.reposCount}</td>
          </tr>
          <tr>
            <td>Lines of code</td>
            <td>{this.props.lines}</td>
          </tr>
          <tr>
            <td>Languages</td>
            <td>{this.props.langs}</td>
          </tr>
          <tr>
            <td>Followers</td>
            <td>{this.props.followers}</td>
          </tr>
        </table>
      // </div>
    );
  }
}

export default Statistics;
