import { HeaderMobile } from "./headerMobile/HeaderMobile.jsx";
import { HeaderDesktop } from "./headerDesktop/HeaderDesktop.jsx";
import { useIsMobile } from "../../../shared/hooks/useIsMobile.jsx";


export const Header = () => {
    const isMobile = useIsMobile();
    return (
        isMobile ? <HeaderMobile /> : <HeaderDesktop />
    );
};
