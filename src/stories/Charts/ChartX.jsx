
import React from 'react';
// import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries,XAxis,YAxis,ArcSeries} from 'react-vis';

const PI = Math.PI;

function updateData() {
    const divider = Math.floor(Math.random() * 8 + 3);
    const newData = [...new Array(5)].map((row, index) => {
      return {
        color: index,
        radius0: Math.random() > 0.8 ? Math.random() + 1 : 0,
        radius: Math.random() * 3 + 1,
        angle: ((index + 1) * PI) / divider,
        angle0: (index * PI) / divider
      };
    });
    return newData.concat([
      {angle0: 0, angle: PI * 2 * Math.random(), radius: 1.1, radius0: 0.8}
    ]);
  }
  
  function updateLittleData() {
    const portion = Math.random();
    return [
      {
        angle0: 0,
        angle: portion * PI * 2,
        radius0: 0,
        radius: 10,
        color: '#43ad11'
      },
      {
        angle0: portion * PI * 2,
        angle: 2 * PI,
        radius0: 0,
        radius: 10,
        color: '#4343fc'
      }
    ];
  }
  
 export class ChartX extends React.Component {
    state = {
      data: updateData(),
      littleData: updateLittleData(),
      value: false
    };
    render() {
      return (
        <div>
          <button
            onClick={() =>
              this.setState({
                data: updateData(),
                littleData: updateLittleData()
              })
            }
            // buttonContent={'UPDATE'}
          >
            Update
            </button>
          <XYPlot xDomain={[-5, 5]} yDomain={[-5, 5]} width={300} height={300}>
            <XAxis />
            <YAxis />
            <ArcSeries
              animation
              radiusDomain={[0, 4]}
              data={this.state.data.map(row => {
                if (this.state.value && this.state.value.color === row.color) {
                  return {...row, style: {stroke: 'black', strokeWidth: '5px'}};
                }
                return row;
              })}
              colorRange='red'            onValueMouseOver={row => this.setState({value: row})}
              onSeriesMouseOut={() => this.setState({value: false})}
              colorType={'category'}
            />
            <ArcSeries
              animation
              radiusType={'literal'}
              center={{x: -2, y: 2}}
              data={this.state.littleData}
              colorType={'literal'}
            />
          </XYPlot>
        </div>
      );
    }
  }