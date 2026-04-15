// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseOperation } from 'cloudflare/resources/api-gateway/labels/managed/resources/operation';
import { Resources } from 'cloudflare/resources/api-gateway/labels/managed/resources/resources';

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
  resources: [BaseOperation],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Resources],
});

const runTests = (
  client: PartialCloudflare<{
    apiGateway: { labels: { managed: { resources: { operation: BaseOperation } } } };
  }>,
) => {
  test('update: only required params', async () => {
    const responsePromise = client.apiGateway.labels.managed.resources.operation.update('login', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      selector: { include: { operation_ids: ['f174e90a-fafe-4643-bbbc-4a0ed4fc8415'] } },
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
    const response = await client.apiGateway.labels.managed.resources.operation.update('login', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      selector: { include: { operation_ids: ['f174e90a-fafe-4643-bbbc-4a0ed4fc8415'] } },
    });
  });
};
describe('resource operation', () => runTests(client));
describe('resource operation (tree shakable, base)', () => runTests(partialClient));
describe('resource operation (tree shakable, subresource)', () => runTests(parentPartialClient));
