// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource overrides', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.firewall.waf.overrides.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      urls: ['shop.example.com/*', 'shop.example.com/*', 'shop.example.com/*'],
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
    const response = await client.firewall.waf.overrides.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      urls: ['shop.example.com/*', 'shop.example.com/*', 'shop.example.com/*'],
    });
  });

  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.firewall.waf.overrides.update('de677e5818985db1285d0e80225f06e5', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      id: '023e105f4ecef8ad9ca31a8372d0c353',
      rewrite_action: {},
      rules: { '100015': 'challenge' },
      urls: ['shop.example.com/*', 'shop.example.com/*', 'shop.example.com/*'],
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
  test.skip('update: required and optional params', async () => {
    const response = await client.firewall.waf.overrides.update('de677e5818985db1285d0e80225f06e5', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      id: '023e105f4ecef8ad9ca31a8372d0c353',
      rewrite_action: {
        block: 'challenge',
        challenge: 'challenge',
        default: 'challenge',
        disable: 'challenge',
        simulate: 'challenge',
      },
      rules: { '100015': 'challenge' },
      urls: ['shop.example.com/*', 'shop.example.com/*', 'shop.example.com/*'],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.firewall.waf.overrides.list({
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

  test('list: required and optional params', async () => {
    const response = await client.firewall.waf.overrides.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 1,
      per_page: 5,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.firewall.waf.overrides.delete('de677e5818985db1285d0e80225f06e5', {
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
    const response = await client.firewall.waf.overrides.delete('de677e5818985db1285d0e80225f06e5', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.firewall.waf.overrides.get('de677e5818985db1285d0e80225f06e5', {
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
    const response = await client.firewall.waf.overrides.get('de677e5818985db1285d0e80225f06e5', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
