// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseByDataset } from 'cloudflare/resources/cloudforce-one/threat-events/tags/indicators/by-dataset';
import { Indicators } from 'cloudflare/resources/cloudforce-one/threat-events/tags/indicators/indicators';

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
  resources: [BaseByDataset],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Indicators],
});

const runTests = (
  client: PartialCloudflare<{
    cloudforceOne: { threatEvents: { tags: { indicators: { byDataset: BaseByDataset } } } };
  }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.tags.indicators.byDataset.list('tag_uuid', {
      account_id: 'account_id',
      dataset_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.cloudforceOne.threatEvents.tags.indicators.byDataset.list('tag_uuid', {
      account_id: 'account_id',
      dataset_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      indicatorType: 'indicatorType',
      page: 0,
      pageSize: 0,
      relatedEvent: ['string'],
      search: [
        {
          field: 'value',
          op: 'contains',
          value: 'malicious',
        },
      ],
    });
  });
};
describe('resource byDataset', () => runTests(client));
describe('resource byDataset (tree shakable, base)', () => runTests(partialClient));
describe('resource byDataset (tree shakable, subresource)', () => runTests(parentPartialClient));
