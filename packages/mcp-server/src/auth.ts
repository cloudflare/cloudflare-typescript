// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from 'cloudflare';
import { McpOptions } from './options';

export const parseClientAuthHeaders = (req: IncomingMessage, required?: boolean): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.split(' ')[0]!;
    const value = req.headers.authorization.slice(scheme.length + 1);
    switch (scheme) {
      case 'Bearer':
        return { apiToken: req.headers.authorization.slice('Bearer '.length) };
      default:
        throw new Error(
          'Unsupported authorization scheme. Expected the "Authorization" header to be a supported scheme (Bearer).',
        );
    }
  } else if (required) {
    throw new Error('Missing required Authorization header; see WWW-Authenticate header for details.');
  }

  const apiEmail =
    Array.isArray(req.headers['x-auth-email']) ? req.headers['x-auth-email'][0] : req.headers['x-auth-email'];
  const apiKey =
    Array.isArray(req.headers['x-auth-key']) ? req.headers['x-auth-key'][0] : req.headers['x-auth-key'];
  const apiToken =
    Array.isArray(req.headers['x-cloudflare-api-token']) ?
      req.headers['x-cloudflare-api-token'][0]
    : req.headers['x-cloudflare-api-token'];
  const userServiceKey =
    Array.isArray(req.headers['x-auth-user-service-key']) ?
      req.headers['x-auth-user-service-key'][0]
    : req.headers['x-auth-user-service-key'];
  return { apiEmail, apiKey, apiToken, userServiceKey };
};

export const getStainlessApiKey = (req: IncomingMessage, mcpOptions: McpOptions): string | undefined => {
  // Try to get the key from the x-stainless-api-key header
  const headerKey =
    Array.isArray(req.headers['x-stainless-api-key']) ?
      req.headers['x-stainless-api-key'][0]
    : req.headers['x-stainless-api-key'];
  if (headerKey && typeof headerKey === 'string') {
    return headerKey;
  }

  // Fall back to value set in the mcpOptions (e.g. from environment variable), if provided
  return mcpOptions.stainlessApiKey;
};
