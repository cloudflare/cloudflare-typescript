// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rateLimits', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.rateLimits.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      action: {},
      match: {},
      period: 900,
      threshold: 60,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('create: required and optional params', async () => {
    const response = await client.rateLimits.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      action: {
        mode: 'simulate',
        response: { body: '<error>This request has been rate-limited.</error>', content_type: 'text/xml' },
        timeout: 86400,
      },
      match: {
        headers: [
          { name: 'Cf-Cache-Status', op: 'eq', value: 'HIT' },
          { name: 'Cf-Cache-Status', op: 'eq', value: 'HIT' },
          { name: 'Cf-Cache-Status', op: 'eq', value: 'HIT' },
        ],
        request: { methods: ['GET', 'POST'], schemes: ['HTTP', 'HTTPS'], url: '*.example.org/path*' },
        response: { origin_traffic: true },
      },
      period: 900,
      threshold: 60,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.rateLimits.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.rateLimits.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 1,
      per_page: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.rateLimits.delete('372e67954025e0ba6aaa6d586b9e0b59', {
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

  test('delete: required and optional params', async () => {
    const response = await client.rateLimits.delete('372e67954025e0ba6aaa6d586b9e0b59', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: investigate broken test
  test.skip('edit: only required params', async () => {
    const responsePromise = client.rateLimits.edit('372e67954025e0ba6aaa6d586b9e0b59', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      action: {},
      match: {},
      period: 900,
      threshold: 60,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('edit: required and optional params', async () => {
    const response = await client.rateLimits.edit('372e67954025e0ba6aaa6d586b9e0b59', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      action: {
        mode: 'simulate',
        response: { body: '<error>This request has been rate-limited.</error>', content_type: 'text/xml' },
        timeout: 86400,
      },
      match: {
        headers: [
          { name: 'Cf-Cache-Status', op: 'eq', value: 'HIT' },
          { name: 'Cf-Cache-Status', op: 'eq', value: 'HIT' },
          { name: 'Cf-Cache-Status', op: 'eq', value: 'HIT' },
        ],
        request: { methods: ['GET', 'POST'], schemes: ['HTTP', 'HTTPS'], url: '*.example.org/path*' },
        response: { origin_traffic: true },
      },
      period: 900,
      threshold: 60,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.rateLimits.get('372e67954025e0ba6aaa6d586b9e0b59', {
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
    const response = await client.rateLimits.get('372e67954025e0ba6aaa6d586b9e0b59', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
