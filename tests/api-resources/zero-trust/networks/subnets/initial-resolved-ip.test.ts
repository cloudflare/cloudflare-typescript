// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseInitialResolvedIP } from 'cloudflare/resources/zero-trust/networks/subnets/initial-resolved-ip';
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
  resources: [BaseInitialResolvedIP],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Subnets],
});

const runTests = (
  client: PartialCloudflare<{
    zeroTrust: { networks: { subnets: { initialResolvedIP: BaseInitialResolvedIP } } };
  }>,
) => {
  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.networks.subnets.initialResolvedIP.update('v4', {
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
    const response = await client.zeroTrust.networks.subnets.initialResolvedIP.update('v4', {
      account_id: '699d98642c564d2e855e9661899b7252',
      comment: 'example comment',
      name: 'IPv4 Cloudflare Source IPs',
      network: '100.64.0.0/12',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.networks.subnets.initialResolvedIP.get('v4', {
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

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.networks.subnets.initialResolvedIP.get('v4', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });
};
describe('resource initialResolvedIP', () => runTests(client));
describe('resource initialResolvedIP (tree shakable, base)', () => runTests(partialClient));
describe('resource initialResolvedIP (tree shakable, subresource)', () => runTests(parentPartialClient));
