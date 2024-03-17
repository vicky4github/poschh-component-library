import React from 'react';
import Marquee from 'react-fast-marquee';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';

export const Scroller = ({ pauseOnHover, pauseOnClick, direction, gradient, gradientColor, speed, delay, loop }) => {
  return (
    <>
      <div className='w-[70vw] h-[50vh] flex justify-center overflow-hidden'>
        <Marquee
          style={{ display: 'flex', justifyContent: 'space-between', width: '100%', }}
          pauseOnHover={pauseOnHover}
          pauseOnClick={pauseOnClick}
          direction={direction}
          gradient={gradient}
          gradientColor={gradientColor}
          speed={speed}
          delay={delay}
          loop={loop}
        >
          {direction === 'right' || direction === 'left' ? (
            <div className='flex justify-around w-[100vw]'>
              <Button
                label="Click 1"
                onClick={() => {}}
                onMouseEnter={() => {}}
                type="primary"
              />
              <Button
                label="Click 2"
                onClick={() => {}}
                onMouseEnter={() => {}}
                type="primary"
              />
              <Button
                label="Click 3"
                onClick={() => {}}
                onMouseEnter={() => {}}
                type="primary"
              />
              <Button
                label="Click 4"
                onClick={() => {}}
                onMouseEnter={() => {}}
                type="primary"
              />
              <Button
                label="Click 5"
                onClick={() => {}}
                onMouseEnter={() => {}}
                type="primary"
              />
              <Button
                label="Click 6"
                onClick={() => {}}
                onMouseEnter={() => {}}
                type="primary"
              />
              <Button
                label="Click 7"
                onClick={() => {}}
                onMouseEnter={() => {}}
                type="primary"
              />
            </div>
          ) : (
          <div className='flex flex-col justify-around w-fit h-[80vw]'>
          <Button
            label="Click 1"
            onClick={() => {}}
            onMouseEnter={() => {}}
            type="primary"
          />
          <Button
            label="Click 2"
            onClick={() => {}}
            onMouseEnter={() => {}}
            type="primary"
          />
          <Button
            label="Click 3"
            onClick={() => {}}
            onMouseEnter={() => {}}
            type="primary"
          />
          <Button
            label="Click 4"
            onClick={() => {}}
            onMouseEnter={() => {}}
            type="primary"
          />
          <Button
            label="Click 5"
            onClick={() => {}}
            onMouseEnter={() => {}}
            type="primary"
          />
          <Button
            label="Click 6"
            onClick={() => {}}
            onMouseEnter={() => {}}
            type="primary"
          />
          <Button
            label="Click 7"
            onClick={() => {}}
            onMouseEnter={() => {}}
            type="primary"
          />
          </div>)}
        </Marquee>
      </div>
    </>
  );
};

Scroller.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  pauseOnHover: PropTypes.bool,
  pauseOnClick: PropTypes.bool,
  direction: PropTypes.oneOf(['left', 'right', 'up', 'down']),
  gradient: PropTypes.bool,
  gradientColor: PropTypes.string,
  speed: PropTypes.number,
  delay: PropTypes.number,
  loop: PropTypes.number,
};

Scroller.defaultProps = {
  items: ['1', '2', '3', '4'],
};
