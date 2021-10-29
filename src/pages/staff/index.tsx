import React from 'react';
import Layout from 'Layouts';
import withAuth from '@hocs/withAuth';

function index() {
  return <Layout title={'Staff'}>staff page</Layout>;
}

export default withAuth(index);
