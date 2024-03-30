import { SearchBar } from './SearchBar';

export default {
  title: 'Example/SearchBar',
  component: SearchBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
  },
  argTypes: {
    color: { control: 'color' },
  },
};

export const Icons = {
  args: {
    isRequired: false,
    isLoading: false,
    label: 'Search', 
  },
};