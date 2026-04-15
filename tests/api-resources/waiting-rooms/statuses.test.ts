// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseStatuses } from 'cloudflare/resources/waiting-rooms/statuses';
import { WaitingRooms } from 'cloudflare/resources/waiting-rooms/waiting-rooms';

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
  resources: [BaseStatuses],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [WaitingRooms],
});

const runTests = (client: PartialCloudflare<{ waitingRooms: { statuses: BaseStatuses } }>) => {
  test('get: only required params', async () => {
    const responsePromise = client.waitingRooms.statuses.get('699d98642c564d2e855e9661899b7252', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.waitingRooms.statuses.get('699d98642c564d2e855e9661899b7252', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource statuses', () => runTests(client));
describe('resource statuses (tree shakable, base)', () => runTests(partialClient));
describe('resource statuses (tree shakable, subresource)', () => runTests(parentPartialClient));
