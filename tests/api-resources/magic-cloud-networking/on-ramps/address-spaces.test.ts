// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAddressSpaces } from 'cloudflare/resources/magic-cloud-networking/on-ramps/address-spaces';
import { OnRamps } from 'cloudflare/resources/magic-cloud-networking/on-ramps/on-ramps';

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
  resources: [BaseAddressSpaces],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [OnRamps],
});

const runTests = (
  client: PartialCloudflare<{ magicCloudNetworking: { onRamps: { addressSpaces: BaseAddressSpaces } } }>,
) => {
  test('update: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.onRamps.addressSpaces.update({
      account_id: 'account_id',
      prefixes: ['192.168.0.0/16'],
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
    const response = await client.magicCloudNetworking.onRamps.addressSpaces.update({
      account_id: 'account_id',
      prefixes: ['192.168.0.0/16'],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.onRamps.addressSpaces.list({
      account_id: 'account_id',
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
    const response = await client.magicCloudNetworking.onRamps.addressSpaces.list({
      account_id: 'account_id',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.onRamps.addressSpaces.edit({
      account_id: 'account_id',
      prefixes: ['192.168.0.0/16'],
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
    const response = await client.magicCloudNetworking.onRamps.addressSpaces.edit({
      account_id: 'account_id',
      prefixes: ['192.168.0.0/16'],
    });
  });
};
describe('resource addressSpaces', () => runTests(client));
describe('resource addressSpaces (tree shakable, base)', () => runTests(partialClient));
describe('resource addressSpaces (tree shakable, subresource)', () => runTests(parentPartialClient));
