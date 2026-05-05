// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseDelegations } from 'cloudflare/resources/addressing/prefixes/delegations';
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
  resources: [BaseDelegations],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Prefixes],
});

const runTests = (
  client: PartialCloudflare<{ addressing: { prefixes: { delegations: BaseDelegations } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.addressing.prefixes.delegations.create(
      '2af39739cc4e3b5910c918468bb89828',
      {
        account_id: '258def64c72dae45f3e4c8516e2111f2',
        cidr: '192.0.2.0/24',
        delegated_account_id: 'b1946ac92492d2347c6235b4d2611184',
      },
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
    const response = await client.addressing.prefixes.delegations.create('2af39739cc4e3b5910c918468bb89828', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
      cidr: '192.0.2.0/24',
      delegated_account_id: 'b1946ac92492d2347c6235b4d2611184',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.addressing.prefixes.delegations.list('2af39739cc4e3b5910c918468bb89828', {
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
    const response = await client.addressing.prefixes.delegations.list('2af39739cc4e3b5910c918468bb89828', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.addressing.prefixes.delegations.delete(
      'd933b1530bc56c9953cf8ce166da8004',
      { account_id: '258def64c72dae45f3e4c8516e2111f2', prefix_id: '2af39739cc4e3b5910c918468bb89828' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.addressing.prefixes.delegations.delete('d933b1530bc56c9953cf8ce166da8004', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
      prefix_id: '2af39739cc4e3b5910c918468bb89828',
    });
  });
};
describe('resource delegations', () => runTests(client));
describe('resource delegations (tree shakable, base)', () => runTests(partialClient));
describe('resource delegations (tree shakable, subresource)', () => runTests(parentPartialClient));
