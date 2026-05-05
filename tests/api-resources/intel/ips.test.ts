// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Intel } from 'cloudflare/resources/intel/intel';
import { BaseIPs } from 'cloudflare/resources/intel/ips';

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
  resources: [BaseIPs],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Intel],
});

const runTests = (client: PartialCloudflare<{ intel: { ips: BaseIPs } }>) => {
  test('get: only required params', async () => {
    const responsePromise = client.intel.ips.get({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.intel.ips.get({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      ipv4: 'ipv4',
      ipv6: 'ipv6',
    });
  });
};
describe('resource ips', () => runTests(client));
describe('resource ips (tree shakable, base)', () => runTests(partialClient));
describe('resource ips (tree shakable, subresource)', () => runTests(parentPartialClient));
