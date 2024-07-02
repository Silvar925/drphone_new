import {useState, useEffect} from 'react';

export const useIsMobile = (breakpoint = 430) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= breakpoint);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isMobile;
};
