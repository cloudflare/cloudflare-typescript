// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAddresses } from 'cloudflare/resources/email-routing/addresses';
import { EmailRouting } from 'cloudflare/resources/email-routing/email-routing';

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
  resources: [BaseAddresses],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [EmailRouting],
});

const runTests = (client: PartialCloudflare<{ emailRouting: { addresses: BaseAddresses } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.emailRouting.addresses.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      email: 'user@example.com',
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
    const response = await client.emailRouting.addresses.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      email: 'user@example.com',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.emailRouting.addresses.list({
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
    const response = await client.emailRouting.addresses.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'asc',
      page: 1,
      per_page: 5,
      verified: true,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.emailRouting.addresses.delete('ea95132c15732412d22c1476fa83f27a', {
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

  test('delete: required and optional params', async () => {
    const response = await client.emailRouting.addresses.delete('ea95132c15732412d22c1476fa83f27a', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.emailRouting.addresses.edit('ea95132c15732412d22c1476fa83f27a', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      status: 'verified',
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
    const response = await client.emailRouting.addresses.edit('ea95132c15732412d22c1476fa83f27a', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      status: 'verified',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.emailRouting.addresses.get('ea95132c15732412d22c1476fa83f27a', {
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

  test('get: required and optional params', async () => {
    const response = await client.emailRouting.addresses.get('ea95132c15732412d22c1476fa83f27a', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource addresses', () => runTests(client));
describe('resource addresses (tree shakable, base)', () => runTests(partialClient));
describe('resource addresses (tree shakable, subresource)', () => runTests(parentPartialClient));
