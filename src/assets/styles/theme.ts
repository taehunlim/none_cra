import { minWidth } from '../../utils/minWidth';

const deviceSize = {
    desktop: '1280px',
    laptop: '1024px',
    tablet: '767px',
    mobile: '479px',
};

const device = {
    desktop: `@media (min-width: ${minWidth(deviceSize.laptop)}) and (max-width: ${deviceSize.desktop})`,
    laptop: `@media (min-width: ${minWidth(deviceSize.tablet)}) and (max-width: ${deviceSize.laptop})`,
    tablet: `@media (min-width: ${minWidth(deviceSize.mobile)}) and (max-width: ${deviceSize.tablet})`,
    mobile: `@media (max-width: ${deviceSize.mobile})`
};

const bgColor = {
    light: '',
    dark: '#232323'
};

const fontColor = {
    light: '',
    dark: 'dfdfdf'
};

const theme = {
    deviceSize,
    device,
    bgColor,
    fontColor
};

export default theme;