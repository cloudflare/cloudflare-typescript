// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseBGPPrefixes } from 'cloudflare/resources/addressing/prefixes/bgp-prefixes';
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
  resources: [BaseBGPPrefixes],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Prefixes],
});

const runTests = (
  client: PartialCloudflare<{ addressing: { prefixes: { bgpPrefixes: BaseBGPPrefixes } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.addressing.prefixes.bgpPrefixes.create(
      '2af39739cc4e3b5910c918468bb89828',
      { account_id: '258def64c72dae45f3e4c8516e2111f2', cidr: '192.0.2.0/24' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.addressing.prefixes.bgpPrefixes.create('2af39739cc4e3b5910c918468bb89828', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
      cidr: '192.0.2.0/24',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.addressing.prefixes.bgpPrefixes.list('2af39739cc4e3b5910c918468bb89828', {
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
    const response = await client.addressing.prefixes.bgpPrefixes.list('2af39739cc4e3b5910c918468bb89828', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.addressing.prefixes.bgpPrefixes.edit('7009ba364c7a5760798ceb430e603b74', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
      prefix_id: '2af39739cc4e3b5910c918468bb89828',
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
    const response = await client.addressing.prefixes.bgpPrefixes.edit('7009ba364c7a5760798ceb430e603b74', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
      prefix_id: '2af39739cc4e3b5910c918468bb89828',
      asn_prepend_count: 2,
      auto_advertise_withdraw: true,
      on_demand: { advertised: true },
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.addressing.prefixes.bgpPrefixes.get('7009ba364c7a5760798ceb430e603b74', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
      prefix_id: '2af39739cc4e3b5910c918468bb89828',
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
    const response = await client.addressing.prefixes.bgpPrefixes.get('7009ba364c7a5760798ceb430e603b74', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
      prefix_id: '2af39739cc4e3b5910c918468bb89828',
    });
  });
};
describe('resource bgpPrefixes', () => runTests(client));
describe('resource bgpPrefixes (tree shakable, base)', () => runTests(partialClient));
describe('resource bgpPrefixes (tree shakable, subresource)', () => runTests(parentPartialClient));
