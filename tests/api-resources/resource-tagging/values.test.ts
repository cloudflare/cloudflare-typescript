// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { ResourceTagging } from 'cloudflare/resources/resource-tagging/resource-tagging';
import { BaseValues } from 'cloudflare/resources/resource-tagging/values';

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
  resources: [ResourceTagging],
});

const runTests = (client: PartialCloudflare<{ resourceTagging: { values: BaseValues } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.resourceTagging.values.list('environment', {
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
    const response = await client.resourceTagging.values.list('environment', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      cursor: 'eyJhY2NvdW50X2lkIjoxMjM0NTY3ODkwfQ',
      type: 'zone',
    });
  });
};
describe('resource values', () => runTests(client));
describe('resource values (tree shakable, base)', () => runTests(partialClient));
describe('resource values (tree shakable, subresource)', () => runTests(parentPartialClient));
