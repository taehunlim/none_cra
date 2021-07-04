import {useLayoutEffect} from 'react';

export function useScrollRock(): void {
    useLayoutEffect(() : () => void => {
        const originalStyle: string = window.getComputedStyle(document.body).overflow;

        document.body.style.overflow = 'hidden';

        return () => (document.body.style.overflow = originalStyle);
    }, []);
};