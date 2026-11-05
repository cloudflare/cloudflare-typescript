// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Account } from 'cloudflare/resources/dns/settings/account/account';
import { BaseNameserverSets } from 'cloudflare/resources/dns/settings/account/nameserver-sets';

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
  resources: [BaseNameserverSets],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Account],
});

const runTests = (
  client: PartialCloudflare<{ dns: { settings: { account: { nameserverSets: BaseNameserverSets } } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.dns.settings.account.nameserverSets.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'Production nameservers',
      nameservers: [{ name: 'ns1.example.com' }],
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
    const response = await client.dns.settings.account.nameserverSets.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'Production nameservers',
      nameservers: [{ name: 'ns1.example.com', ip_count: 1 }],
      advanced: false,
      ip_set: 1,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.dns.settings.account.nameserverSets.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.dns.settings.account.nameserverSets.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 1,
      per_page: 5,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.dns.settings.account.nameserverSets.delete(
      '0123456789abcdef0123456789abcdef',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
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
    const response = await client.dns.settings.account.nameserverSets.delete(
      '0123456789abcdef0123456789abcdef',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.dns.settings.account.nameserverSets.get(
      '0123456789abcdef0123456789abcdef',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
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
    const response = await client.dns.settings.account.nameserverSets.get(
      '0123456789abcdef0123456789abcdef',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
};
describe('resource nameserverSets', () => runTests(client));
describe('resource nameserverSets (tree shakable, base)', () => runTests(partialClient));
describe('resource nameserverSets (tree shakable, subresource)', () => runTests(parentPartialClient));
