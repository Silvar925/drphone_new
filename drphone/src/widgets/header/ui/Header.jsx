import {useState, useEffect} from 'react';
import {HeaderMobile} from "./headerMobile/HeaderMobile.jsx";
import {HeaderDesktop} from "./headerDesktop/HeaderDesktop.jsx";

export const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 430);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        isMobile ? <HeaderMobile/> : <HeaderDesktop/>
    );
};
