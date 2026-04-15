// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCloudflareSource } from 'cloudflare/resources/zero-trust/networks/subnets/cloudflare-source';
import { Subnets } from 'cloudflare/resources/zero-trust/networks/subnets/subnets';

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
  resources: [BaseCloudflareSource],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Subnets],
});

const runTests = (
  client: PartialCloudflare<{
    zeroTrust: { networks: { subnets: { cloudflareSource: BaseCloudflareSource } } };
  }>,
) => {
  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.networks.subnets.cloudflareSource.update('v4', {
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.zeroTrust.networks.subnets.cloudflareSource.update('v4', {
      account_id: '699d98642c564d2e855e9661899b7252',
      comment: 'example comment',
      name: 'IPv4 Cloudflare Source IPs',
      network: '100.64.0.0/12',
    });
  });
};
describe('resource cloudflareSource', () => runTests(client));
describe('resource cloudflareSource (tree shakable, base)', () => runTests(partialClient));
describe('resource cloudflareSource (tree shakable, subresource)', () => runTests(parentPartialClient));
