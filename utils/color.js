export const decToHex = (x) =>
  parseInt(x, 10).toString(16).padStart(2, '0');

export const hexToDec = (x) =>
  parseInt(x, 16);

export const hexColorToParts = (x) => {
  const hex = x.substr(1);
  return [
    hex.substring(0, 2),
    hex.substring(2, 4),
    hex.substring(4),
  ];
};

export const hexPartsToColor = (r, g, b) => (
  `#${r}${g}${b}`
);

export function RGB2CMY (r, g, b) {
  return {
    c: 1 - (r / 255),
    m: 1 - (g / 255),
    y: 1 - (b / 255),
  };
}

export function CMY2RGB (c, m, y) {
  return {
    r: (1 - c) * 255,
    g: (1 - m) * 255,
    b: (1 - y) * 255,
  };
}
