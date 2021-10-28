import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import withAuth from '@hocs/withAuth';

function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push('/extra-components/accordion');
  }),
    [];
  return <div />;
}

export default withAuth(Index);
