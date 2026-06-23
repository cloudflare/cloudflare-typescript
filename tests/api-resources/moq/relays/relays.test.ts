// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource relays', () => {
  test('create: only required params', async () => {
    const responsePromise = client.moq.relays.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'Production Live Stream',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.moq.relays.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'Production Live Stream',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.moq.relays.update('a1b2c3d4e5f67890a1b2c3d4e5f67890', {
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

  test('update: required and optional params', async () => {
    const response = await client.moq.relays.update('a1b2c3d4e5f67890a1b2c3d4e5f67890', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      config: {
        lingering_subscribe: { enabled: true, max_timeout_ms: 0 },
        origin_fallback: { enabled: true, origins: [{ url: 'url' }] },
      },
      name: 'name',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.moq.relays.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.moq.relays.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      asc: true,
      created_after: '2026-03-27T15:00:00Z',
      created_before: '2026-03-27T15:00:00Z',
      per_page: 50,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.moq.relays.delete('a1b2c3d4e5f67890a1b2c3d4e5f67890', {
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

  test('delete: required and optional params', async () => {
    const response = await client.moq.relays.delete('a1b2c3d4e5f67890a1b2c3d4e5f67890', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.moq.relays.get('a1b2c3d4e5f67890a1b2c3d4e5f67890', {
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
    const response = await client.moq.relays.get('a1b2c3d4e5f67890a1b2c3d4e5f67890', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
