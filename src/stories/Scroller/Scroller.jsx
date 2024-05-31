import React from 'react';
import Marquee from 'react-fast-marquee';
import PropTypes from 'prop-types';

export const Scroller = ({ items, pauseOnHover, pauseOnClick, direction, gradient, gradientColor, speed, delay, loop }) => {
  return (
    <div className='w-[100%] flex justify-around m-0  overflow-hidden'>
      <Marquee
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
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
          <div className='flex  justify-around w-[100%]'>
            {items.map((item, index) => (
              <img key={index} src={item} alt={`Image ${index + 1}`} style={{ width: '200px', height: '100px', margin:'50px', objectFit:'contain'}} />
            ))}
          </div>
        ) : (
          <div className='flex flex-col bg-red-500 justify-around h-[80vh]'>
            {items.map((item, index) => (
              <img key={index} src={item} alt={`Image ${index + 1}`} style={{ width: '100%', height: '100%' }} />
            ))}
          </div>
        )}
      </Marquee>
    </div>
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
  items: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg', 'https://example.com/image3.jpg', 'https://example.com/image4.jpg'],
};
