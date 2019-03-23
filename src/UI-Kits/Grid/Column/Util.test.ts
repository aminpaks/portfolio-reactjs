import { getSizeValue } from './Util';

const c = Object.values({ s: 'check', m: 22 });

describe('Grid Column Util', () => {
  describe('getSizeValue()', () => {
    const size = {
      size: null,
      xs: null,
      sm: null,
      md: null,
      lg: null,
      xl: null,
      xxl: null,
    };

    it('should return explicit size', () => {
      const result = getSizeValue('xs')({ size: { ...size, xs: 12 }, allColumnSizes: { xs: [null, 6] } });

      expect(result).toBe('100%');
    });

    it('should return equally divided size', () => {
      const result = getSizeValue('xs')({ size, allColumnSizes: { xs: [null, 6] } });

      expect(result).toBe('50%');
    });

    it('should return respectively rest of available size', () => {
      const result = getSizeValue('xs')({ size, allColumnSizes: { xs: [null, 3] } });

      expect(result).toBe('75%');
    });

    it('should return the default param if no size available', () => {
      const result = getSizeValue('xs')({ size: { ...size, size: 4 }, allColumnSizes: { xs: [null, 4, 2, 2] } });

      expect(result).toBe('33.33%');
    });

    it('should return the closes size if explicit size not available', () => {
      const result = getSizeValue('lg')({
        size: { ...size, xs: 12, md: 4, lg: 3 },
        allColumnSizes: { lg: [null, 5, 4] },
      });

      expect(result).toBe('25%');
    });

    it('should return the closes size if explicit size not available', () => {
      const result = getSizeValue('lg')({ size: { ...size, md: 4, xxl: 2 }, allColumnSizes: { lg: [null, 3, 3] } });

      expect(result).toBe('33.33%');
    });

    it('should return the closes size if not all sizes available', () => {
      const result = getSizeValue('lg')({ size: { ...size, md: 6 }, allColumnSizes: { lg: [null, 3, 3] } });

      expect(result).toBe('50%');
    });

    it('should return the minimum value from the largest breakpoint', () => {
      const result = getSizeValue('xxl')({ size: { ...size, xs: 12, lg: 4 }, allColumnSizes: { xxl: [null, 8] } });

      expect(result).toBe('33.33%');
    });

    it('should return the largest size if default is smaller', () => {
      const result = getSizeValue('lg')({
        size: { ...size, xs: 6 },
        allColumnSizes: { lg: [null, 6, 6] },
      });

      expect(result).toBe('50%');
    });
  });
});
