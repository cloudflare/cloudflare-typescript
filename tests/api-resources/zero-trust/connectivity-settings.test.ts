// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseConnectivitySettings } from 'cloudflare/resources/zero-trust/connectivity-settings';
import { ZeroTrust } from 'cloudflare/resources/zero-trust/zero-trust';

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
  resources: [BaseConnectivitySettings],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ZeroTrust],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { connectivitySettings: BaseConnectivitySettings } }>,
) => {
  test('edit: only required params', async () => {
    const responsePromise = client.zeroTrust.connectivitySettings.edit({
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

  test('edit: required and optional params', async () => {
    const response = await client.zeroTrust.connectivitySettings.edit({
      account_id: '699d98642c564d2e855e9661899b7252',
      icmp_proxy_enabled: true,
      offramp_warp_enabled: true,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.connectivitySettings.get({
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
    const response = await client.zeroTrust.connectivitySettings.get({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });
};
describe('resource connectivitySettings', () => runTests(client));
describe('resource connectivitySettings (tree shakable, base)', () => runTests(partialClient));
describe('resource connectivitySettings (tree shakable, subresource)', () => runTests(parentPartialClient));
