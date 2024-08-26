// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource verification', () => {
  test('edit: only required params', async () => {
    const responsePromise = client.ssl.verification.edit('a77f8bd7-3b47-46b4-a6f1-75cf98109948', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      validation_method: 'http',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.ssl.verification.edit('a77f8bd7-3b47-46b4-a6f1-75cf98109948', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      validation_method: 'http',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.ssl.verification.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.ssl.verification.get({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      retry: true,
    });
  });
});
