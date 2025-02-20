import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap'

export default function useIntersectionObserver() {
    // console.log();
    
    const [isVisible, setIsVisible] = useState(false)
    const targetRef = useRef(null)

    const callbackFunction = (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }   
    
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction)
        if (targetRef.current) observer.observe(targetRef.current)
        return () => {
            if (targetRef.current) observer.unobserve(targetRef.current)
        }
    }, [targetRef])
    return {
        isVisible,
        targetRef
    }
}
