// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dns', () => {
  test('create: only required params', async () => {
    const responsePromise = client.emailRouting.dns.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example.net',
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
    const response = await client.emailRouting.dns.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example.net',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.emailRouting.dns.delete({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.emailRouting.dns.delete({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.emailRouting.dns.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example.net',
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
    const response = await client.emailRouting.dns.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example.net',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.emailRouting.dns.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.emailRouting.dns.get({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      subdomain: 'example.net',
    });
  });
});
