// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAdvertisementStatus } from 'cloudflare/resources/addressing/prefixes/advertisement-status';
import { Prefixes } from 'cloudflare/resources/addressing/prefixes/prefixes';

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
  resources: [BaseAdvertisementStatus],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Prefixes],
});

const runTests = (
  client: PartialCloudflare<{ addressing: { prefixes: { advertisementStatus: BaseAdvertisementStatus } } }>,
) => {
  test('edit: only required params', async () => {
    const responsePromise = client.addressing.prefixes.advertisementStatus.edit(
      '2af39739cc4e3b5910c918468bb89828',
      { account_id: '258def64c72dae45f3e4c8516e2111f2', advertised: true },
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
    const response = await client.addressing.prefixes.advertisementStatus.edit(
      '2af39739cc4e3b5910c918468bb89828',
      { account_id: '258def64c72dae45f3e4c8516e2111f2', advertised: true },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.addressing.prefixes.advertisementStatus.get(
      '2af39739cc4e3b5910c918468bb89828',
      { account_id: '258def64c72dae45f3e4c8516e2111f2' },
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
    const response = await client.addressing.prefixes.advertisementStatus.get(
      '2af39739cc4e3b5910c918468bb89828',
      { account_id: '258def64c72dae45f3e4c8516e2111f2' },
    );
  });
};
describe('resource advertisementStatus', () => runTests(client));
describe('resource advertisementStatus (tree shakable, base)', () => runTests(partialClient));
describe('resource advertisementStatus (tree shakable, subresource)', () => runTests(parentPartialClient));
