// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource managedHeaders', () => {
  test('list: only required params', async () => {
    const responsePromise = client.managedHeaders.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.managedHeaders.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.managedHeaders.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      managed_request_headers: [{}, {}, {}],
      managed_response_headers: [{}, {}, {}],
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
    const response = await client.managedHeaders.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      managed_request_headers: [
        { id: 'add_cf-bot-score_header', enabled: true },
        { id: 'add_cf-bot-score_header', enabled: true },
        { id: 'add_cf-bot-score_header', enabled: true },
      ],
      managed_response_headers: [
        { id: 'add_cf-bot-score_header', enabled: true },
        { id: 'add_cf-bot-score_header', enabled: true },
        { id: 'add_cf-bot-score_header', enabled: true },
      ],
    });
  });
});
