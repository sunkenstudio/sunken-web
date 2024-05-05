import { TextEncoder, TextDecoder } from 'util';

Object.assign(global, { TextDecoder, TextEncoder });

const matchMediaPolyfill = (mediaQuery: string): MediaQueryList => {
  return {
    media: mediaQuery,
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  } as unknown as MediaQueryList;
};

window.matchMedia = window.matchMedia || matchMediaPolyfill;
