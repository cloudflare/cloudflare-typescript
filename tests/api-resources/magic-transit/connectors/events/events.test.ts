// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource events', () => {
  test('list: only required params', async () => {
    const responsePromise = client.magicTransit.connectors.events.list('connector_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      from: 0,
      to: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.magicTransit.connectors.events.list('connector_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      from: 0,
      to: 0,
      cursor: 'cursor',
      k: 'k',
      limit: 0,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.magicTransit.connectors.events.get('connector_id', 0, 0, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.magicTransit.connectors.events.get('connector_id', 0, 0, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
