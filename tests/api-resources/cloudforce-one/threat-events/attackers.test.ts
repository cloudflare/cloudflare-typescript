// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAttackers } from 'cloudflare/resources/cloudforce-one/threat-events/attackers';
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
  resources: [BaseAttackers],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ThreatEvents],
});

const runTests = (
  client: PartialCloudflare<{ cloudforceOne: { threatEvents: { attackers: BaseAttackers } } }>,
) => {
  // TODO: HTTP 401 from prism
  test.skip('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.attackers.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: HTTP 401 from prism
  test.skip('list: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.attackers.list({
      account_id: 'account_id',
      datasetIds: ['string'],
    });
  });
};
describe('resource attackers', () => runTests(client));
describe('resource attackers (tree shakable, base)', () => runTests(partialClient));
describe('resource attackers (tree shakable, subresource)', () => runTests(parentPartialClient));
