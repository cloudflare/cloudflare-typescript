// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from 'cloudflare/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.split(' ')[0]!;
    const value = req.headers.authorization.slice(scheme.length + 1);
    switch (scheme) {
      case 'Bearer':
        return { apiToken: req.headers.authorization.slice('Bearer '.length) };
      default:
        throw new Error(`Unsupported authorization scheme`);
    }
  }

  const apiEmail =
    req.headers['x-auth-email'] instanceof Array ?
      req.headers['x-auth-email'][0]
    : req.headers['x-auth-email'];
  const apiKey =
    req.headers['x-auth-key'] instanceof Array ? req.headers['x-auth-key'][0] : req.headers['x-auth-key'];
  const apiToken =
    req.headers['x-cloudflare-api-token'] instanceof Array ?
      req.headers['x-cloudflare-api-token'][0]
    : req.headers['x-cloudflare-api-token'];
  const userServiceKey =
    req.headers['x-auth-user-service-key'] instanceof Array ?
      req.headers['x-auth-user-service-key'][0]
    : req.headers['x-auth-user-service-key'];
  return { apiEmail, apiKey, apiToken, userServiceKey };
};
