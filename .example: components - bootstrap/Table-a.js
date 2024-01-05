import React from 'react';

class Weather extends React.Component {
  render() {
    return (
      <>
        <tr key={this.props.index}>
          <td>{this.props.element.date}</td>
          <td>{this.props.element.description}</td>
        </tr>
      </>
    );
  }
}

export default Weather;
