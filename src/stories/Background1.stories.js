import { Background1 } from "./Background1/Background1";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Backgrounds/Background1',
  component: Background1,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: { control: 'color' },
    backgroundColor: {control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    color: 'red',
    backgroundColor: 'green'
  },
};