// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { ByDataset } from 'cloudflare/resources/cloudforce-one/threat-events/indicators/by-dataset/by-dataset';
import { BaseTags } from 'cloudflare/resources/cloudforce-one/threat-events/indicators/by-dataset/tags';

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
  resources: [BaseTags],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ByDataset],
});

const runTests = (
  client: PartialCloudflare<{
    cloudforceOne: { threatEvents: { indicators: { byDataset: { tags: BaseTags } } } };
  }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.indicators.byDataset.tags.list('dataset_id', {
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

  test('list: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.indicators.byDataset.tags.list('dataset_id', {
      account_id: 'account_id',
    });
  });
};
describe('resource tags', () => runTests(client));
describe('resource tags (tree shakable, base)', () => runTests(partialClient));
describe('resource tags (tree shakable, subresource)', () => runTests(parentPartialClient));
