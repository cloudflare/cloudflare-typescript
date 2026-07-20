// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tags } from 'cloudflare/resources/cloudforce-one/threat-events/tags/tags';
import { BaseIndicators } from 'cloudflare/resources/cloudforce-one/threat-events/tags/indicators/indicators';

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
  resources: [BaseIndicators],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Tags],
});

const runTests = (
  client: PartialCloudflare<{ cloudforceOne: { threatEvents: { tags: { indicators: BaseIndicators } } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.tags.indicators.list('tag_uuid', {
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
    const response = await client.cloudforceOne.threatEvents.tags.indicators.list('tag_uuid', {
      account_id: 'account_id',
      datasetIds: ['string'],
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
describe('resource indicators', () => runTests(client));
describe('resource indicators (tree shakable, base)', () => runTests(partialClient));
describe('resource indicators (tree shakable, subresource)', () => runTests(parentPartialClient));
