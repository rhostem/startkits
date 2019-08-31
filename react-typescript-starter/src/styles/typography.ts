export const baseFontSize = '16px';
export const baseLineHeight = 1.6;

export const rhythm = (unit: number) => {
  return `${parseInt(baseFontSize, 10) * baseLineHeight * unit}px`;
};

export default {
  baseFontSize,
  baseLineHeight,
  rhythm,
};
