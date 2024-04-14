import { PCard } from './PoschhTech/Card1/Card1';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Poschh/Card1',
  component: PCard,
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
    header: 'Basic',
    isTag: false,
    tagName: '',
    pricing: '1849',
    priceTime: '8 Months',
    info: 'Best for Small Teams or Individuals',
    list:['Write feature details here','Write feature details here','Write feature details here','Write feature details here'],
    buttonText:'Get Started',
    isSelected: false,
}
};
// export const selectedCard = {
//   args: {
//   isSelected: true,
// }
// };