
const deviceSize = {
    laptop: "1024px",
    tablet: "767px",
    mobile: "479px",
};

const device = {
    laptop: `@media (max-width: ${deviceSize.laptop})`,
    tablet: `@media (max-width: ${deviceSize.tablet})`,
    mobile: `@media (max-width: ${deviceSize.mobile})`
};

const bg = {
    green: "background-color: green"
}


const theme = {
    deviceSize,
    device,
    bg
};

export default theme;