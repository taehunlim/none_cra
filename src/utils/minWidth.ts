export const minWidth = (deviceSize: string) => {
    return (Number(deviceSize.split('px')[0]) + 1).toString() + 'px'
};