import { isSupportedService } from '../src/services';
import { SUPPORTED_SERVICES } from '../src/types';

describe('services.ts', () => {
  test('isSupportedService true for supported services', () => {
    SUPPORTED_SERVICES.forEach((service) => {
      expect(isSupportedService(service)).toBe(true);
    });
  });

  test('isSupportedService false for unsupported services', () => {
    expect(isSupportedService('unsupported')).toBe(false);
  });
});
