import React,{ useEffect, useState } from "react";

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    const onWidthChange = (e) => setIsMobile(e.matches);

    useEffect(() => {
        const matchMedia = window.matchMedia("(max-width: 480px)");
        setIsMobile(matchMedia.matches);
        matchMedia.addEventListener("change", onWidthChange);
        return () => {
            matchMedia.removeEventListener("change", onWidthChange);
        };
    }, []);
    return isMobile;
}
