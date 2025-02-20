import { useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import { JSONPLACEHOLDERURL } from '../api/JSONPLACEHOLDER.JS';
import useSWR from 'swr';

const fetcher = url => axiosInstance.get(url).then(r => r.data);
const MIN_PAGE = 1

export default function useStepper({ pageSize }) {
    const MAX_PAGE = pageSize

    const [page, setPage] = useState(MIN_PAGE);

    const getKey = () =>
        `${JSONPLACEHOLDERURL}?_page=${page}&_limit=${pageSize}`;

    const { data, isValidating, isLoading } = useSWR(getKey(), fetcher);

    const handleNext = () => {
        if (page < MAX_PAGE) {
            setPage(prev => prev + 1);
        } else {
            setPage(MIN_PAGE);
        }
    }

    const handlePrevious = () => {
        if (page > MIN_PAGE) {
            setPage(prev => prev - 1);
        } else {
            setPage(MAX_PAGE);
        }
    }

    const handlePageChange = (pageNumber) => setPage(pageNumber);


    return {
        data,
        isLoading,
        isValidating,
        handleNext,
        handlePrevious,
        handlePageChange,
        MAX_PAGE,
    };
}
