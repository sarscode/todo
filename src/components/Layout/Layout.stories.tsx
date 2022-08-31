import { ComponentMeta } from '@storybook/react';
import Layout from './Layout';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Layout/Layout',
  component: Layout,
  decorators: [withRouter],
} as ComponentMeta<typeof Layout>;

export const DashboardLayout = () => (
  <Layout main={<h2>This is the main content area</h2>} />
);
