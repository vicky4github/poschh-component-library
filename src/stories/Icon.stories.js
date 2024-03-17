import { Icon } from './Icon/Icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'Example/Icon',
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes : {
    iconname: {
      control: {
        type: 'select',
      },
    }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Icons = {
  args: {
    iconname: 'FaCar',
    height: 16,
    width: 16,
    bgColor: 'white',
    color: 'gray',
  },
};