// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseGraphql } from 'cloudflare/resources/cloudforce-one/threat-events/graphql';
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
  resources: [BaseGraphql],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ThreatEvents],
});

const runTests = (
  client: PartialCloudflare<{ cloudforceOne: { threatEvents: { graphql: BaseGraphql } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.graphql.create({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.graphql.create({ account_id: 'account_id' });
  });
};
describe('resource graphql', () => runTests(client));
describe('resource graphql (tree shakable, base)', () => runTests(partialClient));
describe('resource graphql (tree shakable, subresource)', () => runTests(parentPartialClient));
