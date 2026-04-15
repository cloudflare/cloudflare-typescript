// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Namespaces } from 'cloudflare/resources/kv/namespaces/namespaces';
import { BaseValues } from 'cloudflare/resources/kv/namespaces/values';

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
  resources: [BaseValues],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Namespaces],
});

const runTests = (client: PartialCloudflare<{ kv: { namespaces: { values: BaseValues } } }>) => {
  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.kv.namespaces.values.update('My-Key', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      namespace_id: '0f2ac74b498b48028cb68387c421e279',
      value: 'Some Value',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('update: required and optional params', async () => {
    const response = await client.kv.namespaces.values.update('My-Key', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      namespace_id: '0f2ac74b498b48028cb68387c421e279',
      value: 'Some Value',
      expiration: 1578435000,
      expiration_ttl: 300,
      metadata: {},
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.kv.namespaces.values.delete('My-Key', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      namespace_id: '0f2ac74b498b48028cb68387c421e279',
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
    const response = await client.kv.namespaces.values.delete('My-Key', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      namespace_id: '0f2ac74b498b48028cb68387c421e279',
    });
  });

  // HTTP 406 from prism
  test.skip('get: required and optional params', async () => {
    const response = await client.kv.namespaces.values.get('My-Key', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      namespace_id: '0f2ac74b498b48028cb68387c421e279',
    });
  });
};
describe('resource values', () => runTests(client));
describe('resource values (tree shakable, base)', () => runTests(partialClient));
describe('resource values (tree shakable, subresource)', () => runTests(parentPartialClient));
