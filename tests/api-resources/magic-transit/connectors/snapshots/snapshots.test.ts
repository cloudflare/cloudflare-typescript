// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Connectors } from 'cloudflare/resources/magic-transit/connectors/connectors';
import { BaseSnapshots } from 'cloudflare/resources/magic-transit/connectors/snapshots/snapshots';

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
  resources: [BaseSnapshots],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Connectors],
});

const runTests = (
  client: PartialCloudflare<{ magicTransit: { connectors: { snapshots: BaseSnapshots } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.magicTransit.connectors.snapshots.list('connector_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      from: 0,
      to: 0,
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
    const response = await client.magicTransit.connectors.snapshots.list('connector_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      from: 0,
      to: 0,
      cursor: 'cursor',
      limit: 0,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.magicTransit.connectors.snapshots.get(0, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      connector_id: 'connector_id',
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
    const response = await client.magicTransit.connectors.snapshots.get(0, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      connector_id: 'connector_id',
    });
  });
};
describe('resource snapshots', () => runTests(client));
describe('resource snapshots (tree shakable, base)', () => runTests(partialClient));
describe('resource snapshots (tree shakable, subresource)', () => runTests(parentPartialClient));
