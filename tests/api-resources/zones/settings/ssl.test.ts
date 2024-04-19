// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ssl', () => {
  test('edit: only required params', async () => {
    const responsePromise = cloudflare.zones.settings.ssl.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      value: 'off',
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
    const response = await cloudflare.zones.settings.ssl.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      value: 'off',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = cloudflare.zones.settings.ssl.get({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await cloudflare.zones.settings.ssl.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
