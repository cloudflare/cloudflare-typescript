// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Default } from 'cloudflare/resources/zero-trust/devices/policies/default/default';
import { BaseExcludes } from 'cloudflare/resources/zero-trust/devices/policies/default/excludes';

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
  resources: [BaseExcludes],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Default],
});

const runTests = (
  client: PartialCloudflare<{
    zeroTrust: { devices: { policies: { default: { excludes: BaseExcludes } } } };
  }>,
) => {
  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.policies.default.excludes.update({
      account_id: '699d98642c564d2e855e9661899b7252',
      body: [{ address: '192.0.2.0/24' }],
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
    const response = await client.zeroTrust.devices.policies.default.excludes.update({
      account_id: '699d98642c564d2e855e9661899b7252',
      body: [{ address: '192.0.2.0/24', description: 'Exclude testing domains from the tunnel' }],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.policies.default.excludes.get({
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
    const response = await client.zeroTrust.devices.policies.default.excludes.get({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });
};
describe('resource excludes', () => runTests(client));
describe('resource excludes (tree shakable, base)', () => runTests(partialClient));
describe('resource excludes (tree shakable, subresource)', () => runTests(parentPartialClient));
