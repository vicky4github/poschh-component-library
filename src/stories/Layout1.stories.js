import { Layout1 } from './Layout1/Layout1';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Layouts/Layout1',
  component: Layout1,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick : ()=>{console.log('default')},
    onMouseEnter : ()=>{console.log('default hover')},

    
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    type: 'primary',
    label: 'Button text',
    onMouseEnter:()=>{console.log('hello')},
    onClick : ()=>{console.log('clicked')},
    isCircular: false,
  },
};

export const Secondary = {
  args: {
    type: 'secondary',
    label: 'Button text',
    onMouseEnter:()=>{console.log('hello')},
    onClick : ()=>{console.log('clicked')},
    isCircular: false,
  },
};


export const Circular = {
  args: {
    type: 'default',
    label: 'Circular button text',
    onMouseEnter:()=>{console.log('hello')},
    onClick : ()=>{console.log('clicked')},
    isCircular: true,
  },
};