export const baseFontSizeValue = 16
export const baseFontSizeUnit = 'px'
export const baseLineHeight = 1.6
export const baseFontSize = `${baseFontSizeValue}${baseFontSizeUnit}`

export const rhythm = (unit: number) => {
  return `${baseFontSizeValue * baseLineHeight * unit}${baseFontSizeUnit}`
}
