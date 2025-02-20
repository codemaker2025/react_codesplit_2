import  { Fragment } from 'react';
import SwrInfinite from '../components/SwrInfinite';
import useSwrInf from '../hooks/useSwrInf';

export default function SwrInf() {
  const { posts,  isLoadingMore, isReachingEnd, lastPostRef } = useSwrInf();

  return (
    <Fragment>
      <SwrInfinite
        posts={posts}
        isLoadingMore={isLoadingMore}
        isReachingEnd={isReachingEnd}
        lastPostRef={lastPostRef}
      />
    </Fragment>
  );
}
