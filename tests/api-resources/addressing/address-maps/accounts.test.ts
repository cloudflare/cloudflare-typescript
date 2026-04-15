// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAccounts } from 'cloudflare/resources/addressing/address-maps/accounts';
import { AddressMaps } from 'cloudflare/resources/addressing/address-maps/address-maps';

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
  resources: [BaseAccounts],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [AddressMaps],
});

const runTests = (client: PartialCloudflare<{ addressing: { addressMaps: { accounts: BaseAccounts } } }>) => {
  test('update: only required params', async () => {
    const responsePromise = client.addressing.addressMaps.accounts.update(
      '055817b111884e0227e1be16a0be6ee0',
      {
        account_id: '258def64c72dae45f3e4c8516e2111f2',
        body: {},
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

  test('update: required and optional params', async () => {
    const response = await client.addressing.addressMaps.accounts.update('055817b111884e0227e1be16a0be6ee0', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
      body: {},
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.addressing.addressMaps.accounts.delete(
      '055817b111884e0227e1be16a0be6ee0',
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

  test('delete: required and optional params', async () => {
    const response = await client.addressing.addressMaps.accounts.delete('055817b111884e0227e1be16a0be6ee0', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
    });
  });
};
describe('resource accounts', () => runTests(client));
describe('resource accounts (tree shakable, base)', () => runTests(partialClient));
describe('resource accounts (tree shakable, subresource)', () => runTests(parentPartialClient));
