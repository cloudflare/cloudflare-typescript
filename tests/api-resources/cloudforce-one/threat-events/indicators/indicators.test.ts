// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { ThreatEvents } from 'cloudflare/resources/cloudforce-one/threat-events/threat-events';
import { BaseIndicators } from 'cloudflare/resources/cloudforce-one/threat-events/indicators/indicators';

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
  resources: [ThreatEvents],
});

const runTests = (
  client: PartialCloudflare<{ cloudforceOne: { threatEvents: { indicators: BaseIndicators } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.indicators.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.indicators.list({
      account_id: 'account_id',
      cache: 'from-graph',
      createdAfter: '2019-12-27T18:11:19.117Z',
      createdBefore: '2019-12-27T18:11:19.117Z',
      datasetIds: ['string'],
      format: 'json',
      includeTags: true,
      includeTotalCount: true,
      indicatorType: 'indicatorType',
      name: 'name',
      page: 0,
      pageSize: 0,
      relatedEvents: ['string'],
      relatedEventsLimit: 2,
      search: [
        {
          field: 'value',
          op: 'contains',
          value: 'malicious',
        },
      ],
      source: 'do',
      tags: ['string'],
      tagSearch: [
        {
          field: 'originCountryISO',
          op: 'in',
          value: 'IR',
        },
      ],
    });
  });
};
describe('resource indicators', () => runTests(client));
describe('resource indicators (tree shakable, base)', () => runTests(partialClient));
describe('resource indicators (tree shakable, subresource)', () => runTests(parentPartialClient));
