// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseApps } from 'cloudflare/resources/realtime-kit/apps';
import { RealtimeKit } from 'cloudflare/resources/realtime-kit/realtime-kit';

import Cloudflare from 'cloudflare';
import { createClient, type PartialCloudflare } from 'cloudflare/tree-shakable';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseApps],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [RealtimeKit],
});

const runTests = (client: PartialCloudflare<{ realtimeKit: { apps: BaseApps } }>) => {
  // TODO: HTTP 401 from prism, support api tokens
  test.skip('get: only required params', async () => {
    const responsePromise = client.realtimeKit.apps.get({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('get: required and optional params', async () => {
    const response = await client.realtimeKit.apps.get({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page_no: 1,
      per_page: 1,
      search: 'search',
      sort_order: 'ASC',
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('post: only required params', async () => {
    const responsePromise = client.realtimeKit.apps.post({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('post: required and optional params', async () => {
    const response = await client.realtimeKit.apps.post({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'x',
    });
  });
};
describe('resource apps', () => runTests(client));
describe('resource apps (tree shakable, base)', () => runTests(partialClient));
describe('resource apps (tree shakable, subresource)', () => runTests(parentPartialClient));
