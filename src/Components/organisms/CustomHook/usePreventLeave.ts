
export function usePreventLeave() {
    const listener = (e: any) => {
        e.preventDefault();
        e.returnValue = "";
    };

    const enablePrevent = () => window.addEventListener('beforeunload', listener);
    const disablePrevent = () => window.removeEventListener('beforeunload', listener);

    return {enablePrevent, disablePrevent};
};
