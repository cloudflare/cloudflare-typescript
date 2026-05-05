// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIGateway } from 'cloudflare/resources/api-gateway/api-gateway';
import { BaseLabels } from 'cloudflare/resources/api-gateway/labels/labels';

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
  resources: [BaseLabels],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [APIGateway],
});

const runTests = (client: PartialCloudflare<{ apiGateway: { labels: BaseLabels } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.apiGateway.labels.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.apiGateway.labels.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'desc',
      filter: 'login',
      order: 'description',
      page: 1,
      per_page: 5,
      source: 'user',
      with_mapped_resource_counts: true,
    });
  });
};
describe('resource labels', () => runTests(client));
describe('resource labels (tree shakable, base)', () => runTests(partialClient));
describe('resource labels (tree shakable, subresource)', () => runTests(parentPartialClient));
