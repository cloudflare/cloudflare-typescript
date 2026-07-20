// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAggregate } from 'cloudflare/resources/cloudforce-one/threat-events/indicators/aggregate';
import { Indicators } from 'cloudflare/resources/cloudforce-one/threat-events/indicators/indicators';

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
  resources: [BaseAggregate],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Indicators],
});

const runTests = (
  client: PartialCloudflare<{
    cloudforceOne: { threatEvents: { indicators: { aggregate: BaseAggregate } } };
  }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.indicators.aggregate.list({
      account_id: 'account_id',
      aggregateBy: 'aggregateBy',
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
    const response = await client.cloudforceOne.threatEvents.indicators.aggregate.list({
      account_id: 'account_id',
      aggregateBy: 'aggregateBy',
      createdAfter: 'createdAfter',
      createdBefore: 'createdBefore',
      datasetIds: ['string'],
      eventDateAfter: 'eventDateAfter',
      eventDateBefore: 'eventDateBefore',
      limit: 1,
      measure: 'indicators',
      tagUuid: 'tagUuid',
    });
  });
};
describe('resource aggregate', () => runTests(client));
describe('resource aggregate (tree shakable, base)', () => runTests(partialClient));
describe('resource aggregate (tree shakable, subresource)', () => runTests(parentPartialClient));
