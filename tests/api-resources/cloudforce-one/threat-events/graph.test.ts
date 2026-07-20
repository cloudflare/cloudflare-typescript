// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseGraph } from 'cloudflare/resources/cloudforce-one/threat-events/graph';
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
  resources: [BaseGraph],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ThreatEvents],
});

const runTests = (client: PartialCloudflare<{ cloudforceOne: { threatEvents: { graph: BaseGraph } } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.graph.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.graph.list({
      account_id: 'account_id',
      cursor: 'cursor',
      datasetIds: ['string'],
      direction: 'direction',
      expand: ['string'],
      hydration: 'hydration',
      limit: 0,
      max_nodes: 0,
      relationshipTypes: ['string'],
      seeds: ['string'],
    });
  });
};
describe('resource graph', () => runTests(client));
describe('resource graph (tree shakable, base)', () => runTests(partialClient));
describe('resource graph (tree shakable, subresource)', () => runTests(parentPartialClient));
