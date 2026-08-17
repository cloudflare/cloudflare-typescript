// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Indicators } from 'cloudflare/resources/cloudforce-one/threat-events/indicators/indicators';
import { BaseTypes } from 'cloudflare/resources/cloudforce-one/threat-events/indicators/types';

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
  resources: [BaseTypes],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Indicators],
});

const runTests = (
  client: PartialCloudflare<{ cloudforceOne: { threatEvents: { indicators: { types: BaseTypes } } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.indicators.types.list({
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
    const response = await client.cloudforceOne.threatEvents.indicators.types.list({
      account_id: 'account_id',
      datasetIds: ['string'],
    });
  });
};
describe('resource types', () => runTests(client));
describe('resource types (tree shakable, base)', () => runTests(partialClient));
describe('resource types (tree shakable, subresource)', () => runTests(parentPartialClient));
