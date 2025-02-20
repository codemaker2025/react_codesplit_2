import { useState, useEffect, useRef } from "react";
import { JSONPLACEHOLDERURL } from '../api/JSONPLACEHOLDER.JS';

const useScroll = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async (page) => {
    const response = await fetch(
        `${JSONPLACEHOLDERURL}?_page=${page}&_limit=12`
    );
    const data = await response.json();
    if (data.length > 0) {
      setPosts((prev) => [...prev, ...data]);
    }
    return data;
  };
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const data = await fetchData(page);  // Fetch data via passed fetch function
      if (data.length > 0) {
        setHasMore(true);
      } else {
        setHasMore(false); // No more data
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (hasMore) {
      fetchPosts();
    }
  }, [page, hasMore]);

  // Observer logic to detect when to load more data
  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  // Setting up the IntersectionObserver
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
    
    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [hasMore]);

  return { page, loading, hasMore, loader , posts};
};

export default useScroll;
