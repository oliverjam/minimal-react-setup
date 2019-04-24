import React from 'react';
import './style.css';

class Statistics extends React.Component {
  render() {
    return (
      <div id="table">
        <table>
          <tr>
            <td>Projects count</td>
            <td></td>
          </tr>
          <tr>
            <td>Lines of code</td>
            <td></td>
          </tr>
          <tr>
            <td>Languages</td>
            <td></td>
          </tr>
          <tr>
            <td>Followers</td>
            <td></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Statistics;
