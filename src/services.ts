import { ErrorService, SUPPORTED_SERVICES } from './types';

/**
 * Type guard to ensure a string is a supported Supabase service.
 */
export function isSupportedService(service: string): service is ErrorService {
  return (SUPPORTED_SERVICES as readonly string[]).includes(service);
}
