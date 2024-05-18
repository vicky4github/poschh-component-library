import React, { useState } from 'react';
import { curveTypes } from '../ChartUtils';
import PropTypes from 'prop-types';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries
} from 'react-vis';

export const LineChart = ({ width, height, curveType, strokeColor, strokeWidth, markColor, verticalGridColor, horizontalGridColor, chartBackgroundColor, lineFillColor }) => {
  const initialData = [
    { x: 1, y: 10 },
    { x: 2, y: 20 },
    { x: 3, y: 40 }
  ];

  const [data, setData] = useState(initialData);
  const [xValue, setXValue] = useState('');
  const [yValue, setYValue] = useState('');

  const addDataPoint = () => {
    if (xValue && yValue) {
      const newData = [...data, { x: xValue, y: parseFloat(yValue) }];
      setData(newData);
      setXValue('');
      setYValue('');
    }
  };

  const resetDataPoints = () => {
    setData([]);
    setXValue('');
    setYValue('');
  };

  return (
    <div>
      <XYPlot width={width} height={height} style={{ background: chartBackgroundColor }}>
        <VerticalGridLines style={{ stroke: verticalGridColor }} />
        <HorizontalGridLines style={{ stroke: horizontalGridColor }} />
        <XAxis />
        <YAxis />
        <LineMarkSeries
          className="linemark-series-example"
          style={{
            strokeWidth: strokeWidth,
            fill: lineFillColor,
          }}
          curve={curveType}
          lineStyle={{ stroke: strokeColor }}
          markStyle={{ stroke: markColor }}
          data={data}
          
        />
      </XYPlot>
      <div className='mt-8'>
        <input className='border-1 w-[80px]  px-1 mr-4' type="number" placeholder="X Value" value={xValue} onChange={(e) => setXValue(e.target.value)} />
        <input className='border-1 w-[80px]  px-1 mr-4' type="number" placeholder="Y Value" value={yValue} onChange={(e) => setYValue(e.target.value)} />
        <button className='border-black border-1 w-[130px] rounded-md px-1 mr-4' onClick={addDataPoint}>Add Data Point</button>
        <button className='border-black border-1 w-[130px] rounded-md px-1 mr-4' onClick={resetDataPoints}>Reset Data Points</button>
      </div>
    </div>
  );
};

LineChart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  curveType: PropTypes.oneOf(curveTypes),
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  markColor: PropTypes.string,
  verticalGridColor: PropTypes.string,
  horizontalGridColor: PropTypes.string,
  chartBackgroundColor: PropTypes.string,
  lineFillColor: PropTypes.string,
};

LineChart.defaultProps = {
  strokeColor: 'red',
  strokeWidth: 3,
  markColor: 'blue',
  verticalGridColor: 'lightgray',
  horizontalGridColor: 'lightgray',
  chartBackgroundColor: 'transparent',
  lineFillColor: 'none',
};
