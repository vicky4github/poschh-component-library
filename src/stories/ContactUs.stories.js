import { ContactUs } from './PoschhTech/ContactUs/ContactUs';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Poschh/ContactUs',
  component: ContactUs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Contact = {
};