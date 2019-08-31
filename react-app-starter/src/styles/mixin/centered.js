export const centered = () => {
  return `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `
}

export const centeredFixed = () => {
  return `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `
}

export const centeredX = () => {
  return `
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `
}

export const centeredY = () => {
  return `
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  `
}

export const centeredXFloat = () => {
  return `
    position: relative;
    right: 50%;
    float: right;
    transform: translateX(50%);
  `
}
