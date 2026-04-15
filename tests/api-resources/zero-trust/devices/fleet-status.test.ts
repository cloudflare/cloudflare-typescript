// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Devices } from 'cloudflare/resources/zero-trust/devices/devices';
import { BaseFleetStatus } from 'cloudflare/resources/zero-trust/devices/fleet-status';

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
  resources: [BaseFleetStatus],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Devices],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { devices: { fleetStatus: BaseFleetStatus } } }>,
) => {
  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.fleetStatus.get('cb49c27f-7f97-49c5-b6f3-f7c01ead0fd7', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
      since_minutes: 10,
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
    const response = await client.zeroTrust.devices.fleetStatus.get('cb49c27f-7f97-49c5-b6f3-f7c01ead0fd7', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
      since_minutes: 10,
      colo: 'SJC',
      time_now: '2023-10-11T00:00:00Z',
    });
  });
};
describe('resource fleetStatus', () => runTests(client));
describe('resource fleetStatus (tree shakable, base)', () => runTests(partialClient));
describe('resource fleetStatus (tree shakable, subresource)', () => runTests(parentPartialClient));
