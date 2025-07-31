// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource matches', () => {
  // TODO: investigate broken test, 401 Unauthorized
  test.skip('download: only required params', async () => {
    const responsePromise = client.brandProtection.matches.download({ account_id: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test, 401 Unauthorized
  test.skip('download: required and optional params', async () => {
    const response = await client.brandProtection.matches.download({
      account_id: 'x',
      id: 'id',
      include_domain_id: true,
      limit: 0,
      offset: 0,
    });
  });

  // TODO: investigate broken test, 401 Unauthorized
  test.skip('get: only required params', async () => {
    const responsePromise = client.brandProtection.matches.get({ account_id: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test, 401 Unauthorized
  test.skip('get: required and optional params', async () => {
    const response = await client.brandProtection.matches.get({
      account_id: 'x',
      id: 'id',
      include_domain_id: true,
      limit: 0,
      offset: 0,
    });
  });
});
