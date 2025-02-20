import { useCallback } from "react";
import useSWRInfinite from "swr/infinite";
import { useInView } from "react-intersection-observer";
import { JSONPLACEHOLDERURL } from '../api/JSONPLACEHOLDER.JS';

const fetcher = (url) => fetch(url).then((res) => res.json());
const PAGE_SIZE = 10;

export default function useSwrInf() {
    const { data,  setSize, isValidating  } = useSWRInfinite(
        (pageIndex) =>
            `${JSONPLACEHOLDERURL}?_page=${pageIndex + 1}&_limit=${PAGE_SIZE}`,
        fetcher,
        { revalidateFirstPage: false, dedupingInterval: 1000 }
    );
    

    const posts = data ? [].concat(...data) : [];
    const isLoadingMore = isValidating;
    const isReachingEnd = data && data[data.length - 1]?.length < PAGE_SIZE;

    const { ref: lastPostRef } = useInView({
        threshold: 0.5,
        onChange: useCallback(
            (inView) => {
                if (inView && !isLoadingMore && !isReachingEnd) {
                    setSize((prev) => prev + 1);
                }
            },
            [isLoadingMore, isReachingEnd, setSize]
        ),
    });

    
    
    return { posts,  isLoadingMore, isReachingEnd, lastPostRef };
}
