// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from 'cloudflare/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.slice(req.headers.authorization.search(' '));
    const value = req.headers.authorization.slice(scheme.length + 1);
    switch (scheme) {
      case 'Bearer':
        return { apiToken: req.headers.authorization.slice('Bearer '.length) };
      default:
        throw new Error(`Unsupported authorization scheme`);
    }
  }

  const apiEmail =
    req.headers['X-Auth-Email'] instanceof Array ?
      req.headers['X-Auth-Email'][0]
    : req.headers['X-Auth-Email'];
  const apiKey =
    req.headers['X-Auth-Key'] instanceof Array ? req.headers['X-Auth-Key'][0] : req.headers['X-Auth-Key'];
  const apiToken =
    req.headers['x-cloudflare-api-token'] instanceof Array ?
      req.headers['x-cloudflare-api-token'][0]
    : req.headers['x-cloudflare-api-token'];
  const userServiceKey =
    req.headers['X-Auth-User-Service-Key'] instanceof Array ?
      req.headers['X-Auth-User-Service-Key'][0]
    : req.headers['X-Auth-User-Service-Key'];
  return { apiEmail, apiKey, apiToken, userServiceKey };
};
