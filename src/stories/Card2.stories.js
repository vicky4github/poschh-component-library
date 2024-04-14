import { BCard } from './PoschhTech/Card2/Card2';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Poschh/Card2',
  component: BCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic = {
  args: {
    width: 300,
    height: 300,
    header: 'Streamline Your Workflow',
    body: 'Unify data management and empower data-driven decisions. Automate data collection, generate custom reports (reduce reporting time by 40%), and boost productivity by 20%. All while ensuring unparalleled security and scalability.',
}
};
