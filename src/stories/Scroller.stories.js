import { bool } from 'prop-types';
import { Scroller } from './Scroller/Scroller';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Scroller',
  component: Scroller,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    gradientColor: { control: 'color' },
    
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Scrolling = {
  args: {
    items: ['1','2','3', '4'],
    pauseOnHover: false,
    pauseOnClick: false,
    direction: 'left',
    gradient: true,
    gradientColor: '',
    speed: 30,
    delay: 0,
    loop:0,

  },
};