import React from 'react';
import Layout from 'Layouts';
import withAuth from '@hocs/withAuth';

const Home = () => {
  return <Layout title="Dashboard" />;
};
export default withAuth(Home);
