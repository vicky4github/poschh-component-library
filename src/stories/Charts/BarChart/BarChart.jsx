import React, { useState } from 'react';
import { curveTypes } from '../ChartUtils';
import PropTypes from 'prop-types';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries
} from 'react-vis';

export const BarChart = ({ width, height, barWidth, barColor, strokeColor, fillColor, verticalGridColor, horizontalGridColor, chartBackgroundColor }) => {
  const initialData = [{x: 'A', y: 10}, {x: 'B', y: 5}, {x: 'C', y: 15}];

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
    setData(initialData);
    setXValue('');
    setYValue('');
  };

  return (
    <div>
       <XYPlot xType="ordinal" width={width} height={height} xDistance={100} style={{ background: chartBackgroundColor }} >
       <VerticalGridLines style={{ stroke: verticalGridColor }} />
        <HorizontalGridLines style={{ stroke: horizontalGridColor }} />
          <XAxis />
          <YAxis />
          <VerticalBarSeries  data={data} color={barColor} stroke={strokeColor} fill={fillColor} barWidth={barWidth}  />
          
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

BarChart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  barWidth: PropTypes.number,
  barColor: PropTypes.string,
  strokeColor: PropTypes.string,
  fillColor: PropTypes.string,
  verticalGridColor: PropTypes.string,
  horizontalGridColor: PropTypes.string,
  chartBackgroundColor: PropTypes.string,
};

BarChart.defaultProps = {
  strokeColor: 'red',
  barColor: 'blue',
  verticalGridColor: 'lightgray',
  horizontalGridColor: 'lightgray',
  chartBackgroundColor: 'transparent',
};
