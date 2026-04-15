// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Addressing } from 'cloudflare/resources/addressing/addressing';
import { BaseAddressMaps } from 'cloudflare/resources/addressing/address-maps/address-maps';

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
  resources: [BaseAddressMaps],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Addressing],
});

const runTests = (client: PartialCloudflare<{ addressing: { addressMaps: BaseAddressMaps } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.addressing.addressMaps.create({
      account_id: '258def64c72dae45f3e4c8516e2111f2',
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
    const response = await client.addressing.addressMaps.create({
      account_id: '258def64c72dae45f3e4c8516e2111f2',
      description: 'My Ecommerce zones',
      enabled: true,
      ips: ['192.0.2.1'],
      memberships: [{ identifier: '023e105f4ecef8ad9ca31a8372d0c353', kind: 'zone' }],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.addressing.addressMaps.list({
      account_id: '258def64c72dae45f3e4c8516e2111f2',
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
    const response = await client.addressing.addressMaps.list({
      account_id: '258def64c72dae45f3e4c8516e2111f2',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.addressing.addressMaps.delete('055817b111884e0227e1be16a0be6ee0', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.addressing.addressMaps.delete('055817b111884e0227e1be16a0be6ee0', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.addressing.addressMaps.edit('055817b111884e0227e1be16a0be6ee0', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
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
    const response = await client.addressing.addressMaps.edit('055817b111884e0227e1be16a0be6ee0', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
      default_sni: '*.example.com',
      description: 'My Ecommerce zones',
      enabled: true,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.addressing.addressMaps.get('055817b111884e0227e1be16a0be6ee0', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
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
    const response = await client.addressing.addressMaps.get('055817b111884e0227e1be16a0be6ee0', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
    });
  });
};
describe('resource addressMaps', () => runTests(client));
describe('resource addressMaps (tree shakable, base)', () => runTests(partialClient));
describe('resource addressMaps (tree shakable, subresource)', () => runTests(parentPartialClient));
