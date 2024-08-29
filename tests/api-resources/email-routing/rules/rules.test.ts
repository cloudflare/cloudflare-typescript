// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  test('create: only required params', async () => {
    const responsePromise = client.emailRouting.rules.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      actions: [
        {
          type: 'drop',
          value: [
            'destinationaddress@example.net',
            'destinationaddress@example.net',
            'destinationaddress@example.net',
          ],
        },
        {
          type: 'drop',
          value: [
            'destinationaddress@example.net',
            'destinationaddress@example.net',
            'destinationaddress@example.net',
          ],
        },
        {
          type: 'drop',
          value: [
            'destinationaddress@example.net',
            'destinationaddress@example.net',
            'destinationaddress@example.net',
          ],
        },
      ],
      matchers: [
        { field: 'to', type: 'literal', value: 'test@example.com' },
        { field: 'to', type: 'literal', value: 'test@example.com' },
        { field: 'to', type: 'literal', value: 'test@example.com' },
      ],
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
    const response = await client.emailRouting.rules.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      actions: [
        {
          type: 'drop',
          value: [
            'destinationaddress@example.net',
            'destinationaddress@example.net',
            'destinationaddress@example.net',
          ],
        },
        {
          type: 'drop',
          value: [
            'destinationaddress@example.net',
            'destinationaddress@example.net',
            'destinationaddress@example.net',
          ],
        },
        {
          type: 'drop',
          value: [
            'destinationaddress@example.net',
            'destinationaddress@example.net',
            'destinationaddress@example.net',
          ],
        },
      ],
      matchers: [
        { field: 'to', type: 'literal', value: 'test@example.com' },
        { field: 'to', type: 'literal', value: 'test@example.com' },
        { field: 'to', type: 'literal', value: 'test@example.com' },
      ],
      enabled: true,
      name: 'Send to user@example.net rule.',
      priority: 0,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.emailRouting.rules.update('a7e6fb77503c41d8a7f3113c6918f10c', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      actions: [
        {
          type: 'drop',
          value: [
            'destinationaddress@example.net',
            'destinationaddress@example.net',
            'destinationaddress@example.net',
          ],
        },
        {
          type: 'drop',
          value: [
            'destinationaddress@example.net',
            'destinationaddress@example.net',
            'destinationaddress@example.net',
          ],
        },
        {
          type: 'drop',
          value: [
            'destinationaddress@example.net',
            'destinationaddress@example.net',
            'destinationaddress@example.net',
          ],
        },
      ],
      matchers: [
        { field: 'to', type: 'literal', value: 'test@example.com' },
        { field: 'to', type: 'literal', value: 'test@example.com' },
        { field: 'to', type: 'literal', value: 'test@example.com' },
      ],
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
    const response = await client.emailRouting.rules.update('a7e6fb77503c41d8a7f3113c6918f10c', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      actions: [
        {
          type: 'drop',
          value: [
            'destinationaddress@example.net',
            'destinationaddress@example.net',
            'destinationaddress@example.net',
          ],
        },
        {
          type: 'drop',
          value: [
            'destinationaddress@example.net',
            'destinationaddress@example.net',
            'destinationaddress@example.net',
          ],
        },
        {
          type: 'drop',
          value: [
            'destinationaddress@example.net',
            'destinationaddress@example.net',
            'destinationaddress@example.net',
          ],
        },
      ],
      matchers: [
        { field: 'to', type: 'literal', value: 'test@example.com' },
        { field: 'to', type: 'literal', value: 'test@example.com' },
        { field: 'to', type: 'literal', value: 'test@example.com' },
      ],
      enabled: true,
      name: 'Send to user@example.net rule.',
      priority: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.emailRouting.rules.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.emailRouting.rules.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      enabled: true,
      page: 1,
      per_page: 5,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.emailRouting.rules.delete('a7e6fb77503c41d8a7f3113c6918f10c', {
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
    const response = await client.emailRouting.rules.delete('a7e6fb77503c41d8a7f3113c6918f10c', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.emailRouting.rules.get('a7e6fb77503c41d8a7f3113c6918f10c', {
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
    const response = await client.emailRouting.rules.get('a7e6fb77503c41d8a7f3113c6918f10c', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
