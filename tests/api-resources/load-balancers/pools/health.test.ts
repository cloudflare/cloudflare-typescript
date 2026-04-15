// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseHealth } from 'cloudflare/resources/load-balancers/pools/health';
import { Pools } from 'cloudflare/resources/load-balancers/pools/pools';

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
  resources: [BaseHealth],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Pools],
});

const runTests = (client: PartialCloudflare<{ loadBalancers: { pools: { health: BaseHealth } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.loadBalancers.pools.health.create('17b5962d775c646f3f9725cbc7a53df4', {
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

  test('create: required and optional params', async () => {
    const response = await client.loadBalancers.pools.health.create('17b5962d775c646f3f9725cbc7a53df4', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      allow_insecure: true,
      consecutive_down: 0,
      consecutive_up: 0,
      description: 'Login page monitor',
      expected_body: 'alive',
      expected_codes: '2xx',
      follow_redirects: true,
      header: { Host: ['example.com'], 'X-App-ID': ['abc123'] },
      interval: 0,
      method: 'GET',
      path: '/health',
      port: 0,
      probe_zone: 'example.com',
      retries: 0,
      timeout: 0,
      type: 'https',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.loadBalancers.pools.health.get('17b5962d775c646f3f9725cbc7a53df4', {
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
    const response = await client.loadBalancers.pools.health.get('17b5962d775c646f3f9725cbc7a53df4', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource health', () => runTests(client));
describe('resource health (tree shakable, base)', () => runTests(partialClient));
describe('resource health (tree shakable, subresource)', () => runTests(parentPartialClient));
