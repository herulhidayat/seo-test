export const flipHelper = ({ type, block, newScale }: IFlipHelper) => {
  let nextScale = newScale
  switch (type) {
    case 'horizontal':
      nextScale = !block?.style?.scale
        ? newScale
        : block?.style?.scale === 'scale(-1, -1)'
        ? 'scale(1, -1)'
        : block?.style?.scale === 'scale(1, -1)'
        ? 'scale(-1, 1)'
        : ''
      break
    case 'vertical':
      nextScale = !block?.style?.scale
        ? newScale
        : block?.style?.scale === 'scale(-1, 1)'
        ? 'scale(-1, -1)'
        : block?.style?.scale === 'scale(-1, -1)'
        ? 'scale(-1, 1)'
        : ''
      break
  }

  return nextScale
}

interface IFlipHelper {
  type: any
  block: any
  newScale: any
}
