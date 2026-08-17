// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseRelationships } from 'cloudflare/resources/cloudforce-one/threat-events/relationships';
import { ThreatEvents } from 'cloudflare/resources/cloudforce-one/threat-events/threat-events';

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
  resources: [BaseRelationships],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ThreatEvents],
});

const runTests = (
  client: PartialCloudflare<{ cloudforceOne: { threatEvents: { relationships: BaseRelationships } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.relationships.list('event_id', {
      account_id: 'account_id',
      datasetId: 'datasetId',
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
    const response = await client.cloudforceOne.threatEvents.relationships.list('event_id', {
      account_id: 'account_id',
      datasetId: 'datasetId',
      direction: 'ancestors',
      includeParent: true,
      indicatorTypeIds: ['string'],
      maxDepth: 0,
      page: 0,
      pageSize: 0,
      relationshipTypes: 'string',
    });
  });
};
describe('resource relationships', () => runTests(client));
describe('resource relationships (tree shakable, base)', () => runTests(partialClient));
describe('resource relationships (tree shakable, subresource)', () => runTests(parentPartialClient));
