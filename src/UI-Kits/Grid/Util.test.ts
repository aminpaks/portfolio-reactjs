import { getSizes, getSizesAsArray } from './Util';

describe('Grid Util', () => {
  describe('getSizes', () => {
    it('should return one column all responsive sizes', () => {
      const result = getSizes({ xs: 6, sm: 6, md: 2, lg: 3, xl: 3, xxl: 1, size: 12 });

      expect(result).toEqual({ xs: 6, sm: 6, md: 2, lg: 3, xl: 3, xxl: 1, size: 12 });
    });

    it('should return one column with all responsive sizes and fill empty ones with null', () => {
      const result = getSizes({ xs: 6, md: 2 });

      expect(result).toEqual({ xs: 6, sm: null, md: 2, lg: null, xl: null, xxl: null, size: null });
    });
  });

  describe('getSizesAsArray()', () => {
    it('should return an array of all column sizes based on breakpoints', () => {
      const result = getSizesAsArray(3, [getSizes({ xs: 1 }), getSizes({ sm: 2 }), getSizes({ size: 4 })]);

      expect(result).toEqual({
        xs: [1, null, null],
        sm: [null, 2, null],
        md: [null, null, null],
        lg: [null, null, null],
        xl: [null, null, null],
        xxl: [null, null, null],
        size: [null, null, 4],
      });
    });
  });
});
