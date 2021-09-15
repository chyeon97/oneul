const deviceSize = {
  mobile: "768px",
  desktop: "769px",
};

const device = {
  mobile: `screen and (max-width:${deviceSize.mobile})`,
  desktop: `screen and (min-width:${deviceSize.desktop})`,
};

const devices = { device };
export default devices;
