import useScroll from "../hooks/useScroll"; 
import "bootstrap/dist/css/bootstrap.min.css";
import NormalScroll from '../components/NormalScroll'
const InfiniteScrollApp = () => {

  const { loading, hasMore, loader , posts} = useScroll();

  return (
    
    <NormalScroll 
    loader={loader}
    loading={loading}
    hasMore={hasMore}
    posts={posts}
    />
  );

};

export default InfiniteScrollApp;
