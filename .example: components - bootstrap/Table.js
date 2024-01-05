import React from 'react';
import Table from 'react-bootstrap/Table';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
  render() {
    return (
      <>
        <Table bordered hover size='sm' style={{ display: this.props.weatherData.show }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Forecast</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weatherData.forecast.map((element, index) => {
              return (
                <WeatherDay
                  key={index}
                  index={index}
                  element={element}
                />
              )
            })}
          </tbody>
        </Table>
      </>
    );
  }
}

export default Weather;
