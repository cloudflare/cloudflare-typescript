// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  test('list: only required params', async () => {
    const responsePromise = client.firewall.waf.packages.rules.list('a25a9a7e9c00afc1fb2e0245519d725b', {
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
    const response = await client.firewall.waf.packages.rules.list('a25a9a7e9c00afc1fb2e0245519d725b', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      description: 'SQL injection prevention for SELECT statements',
      direction: 'asc',
      group_id: 'de677e5818985db1285d0e80225f06e5',
      match: 'any',
      mode: 'DIS',
      order: 'priority',
      page: 1,
      per_page: 5,
      priority: 'priority',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.firewall.waf.packages.rules.edit(
      'a25a9a7e9c00afc1fb2e0245519d725b',
      'a25a9a7e9c00afc1fb2e0245519d725b',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.firewall.waf.packages.rules.edit(
      'a25a9a7e9c00afc1fb2e0245519d725b',
      'a25a9a7e9c00afc1fb2e0245519d725b',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353', mode: 'default' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.firewall.waf.packages.rules.get(
      'a25a9a7e9c00afc1fb2e0245519d725b',
      'a25a9a7e9c00afc1fb2e0245519d725b',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.firewall.waf.packages.rules.get(
      'a25a9a7e9c00afc1fb2e0245519d725b',
      'a25a9a7e9c00afc1fb2e0245519d725b',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
