// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { OutgoingResource } from 'cloudflare/resources/dns/zone-transfers/outgoing/outgoing';
import { BaseStatus } from 'cloudflare/resources/dns/zone-transfers/outgoing/status';

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
  resources: [BaseStatus],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [OutgoingResource],
});

const runTests = (
  client: PartialCloudflare<{ dns: { zoneTransfers: { outgoing: { status: BaseStatus } } } }>,
) => {
  test('get: only required params', async () => {
    const responsePromise = client.dns.zoneTransfers.outgoing.status.get({
      zone_id: '269d8f4853475ca241c4e730be286b20',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.dns.zoneTransfers.outgoing.status.get({
      zone_id: '269d8f4853475ca241c4e730be286b20',
    });
  });
};
describe('resource status', () => runTests(client));
describe('resource status (tree shakable, base)', () => runTests(partialClient));
describe('resource status (tree shakable, subresource)', () => runTests(parentPartialClient));
