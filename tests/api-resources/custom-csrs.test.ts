// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCustomCsrs } from 'cloudflare/resources/custom-csrs/custom-csrs';

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
  resources: [BaseCustomCsrs],
});

const runTests = (client: PartialCloudflare<{ customCsrs: BaseCustomCsrs }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.customCsrs.create({
      common_name: 'example.com',
      country: 'US',
      locality: 'San Francisco',
      organization: 'Cloudflare, Inc.',
      sans: ['example.com', 'www.example.com'],
      state: 'California',
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

  test('create: required and optional params', async () => {
    const response = await client.customCsrs.create({
      common_name: 'example.com',
      country: 'US',
      locality: 'San Francisco',
      organization: 'Cloudflare, Inc.',
      sans: ['example.com', 'www.example.com'],
      state: 'California',
      account_id: 'account_id',
      description: 'CSR for example.com wildcard',
      key_type: 'rsa2048',
      name: 'My Custom CSR',
      organizational_unit: 'Engineering',
    });
  });

  test('list', async () => {
    const responsePromise = client.customCsrs.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.customCsrs.delete('7b163417-1d2b-4c84-a38a-2fb7a0cd7752', {
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

  test('get', async () => {
    const responsePromise = client.customCsrs.get('7b163417-1d2b-4c84-a38a-2fb7a0cd7752', {
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
};
describe('resource customCsrs', () => runTests(client));
describe('resource customCsrs (tree shakable, base)', () => runTests(partialClient));
