// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseDNS } from 'cloudflare/resources/intel/dns';
import { Intel } from 'cloudflare/resources/intel/intel';

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
  resources: [BaseDNS],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Intel],
});

const runTests = (client: PartialCloudflare<{ intel: { dns: BaseDNS } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.intel.dns.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.intel.dns.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      ipv4: 'ipv4',
      page: 1,
      per_page: 20,
      start_end_params: { end: '2021-04-30', start: '2021-04-01' },
    });
  });
};
describe('resource dns', () => runTests(client));
describe('resource dns (tree shakable, base)', () => runTests(partialClient));
describe('resource dns (tree shakable, subresource)', () => runTests(parentPartialClient));
