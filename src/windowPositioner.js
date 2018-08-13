import { BrowserWindow, screen } from 'electron';

const getXPositionInPixels = (xPosition, screenSize, windowSize) => {
  if (xPosition === 'left') return screenSize.x;
  if (xPosition === 'center') return screenSize.x + Math.floor((screenSize.width - windowSize.width) / 2);
  if (xPosition === 'right') return screenSize.x + screenSize.width - windowSize.width;
  return screenSize.x + xPosition;
};

const getYPositionInPixels = (yPosition, screenSize, windowSize) => {
  if (yPosition === 'top') return screenSize.y;
  if (yPosition === 'center') return screenSize.y + Math.floor((screenSize.height - windowSize.height) / 2);
  if (yPosition === 'bottom') return screenSize.y + screenSize.height - windowSize.height;
  return screenSize.y + yPosition;
};

export const calculateWindowPosition = (window, { x = 'center', y = 'center', offsetX = 0, offsetY = 0 } = {}) => {
  const screenSize = screen.getDisplayNearestPoint(screen.getCursorScreenPoint()).workArea;
  const windowSizeAsArray = window instanceof BrowserWindow ? window.getSize() : [window.width, window.height];
  const windowSize = {
    width: windowSizeAsArray[0],
    height: windowSizeAsArray[1],
  };
  return {
    x: getXPositionInPixels(x, screenSize, windowSize) + offsetX,
    y: getYPositionInPixels(y, screenSize, windowSize) + offsetY,
  };
};

export const setWindowPosition = (window, position, animate) => {
  const { x, y } = calculateWindowPosition(window, position);
  window.setPosition(x, y, animate);
};
