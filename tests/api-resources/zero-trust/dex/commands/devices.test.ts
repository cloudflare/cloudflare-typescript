// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Commands } from 'cloudflare/resources/zero-trust/dex/commands/commands';
import { BaseDevices } from 'cloudflare/resources/zero-trust/dex/commands/devices';

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
  resources: [BaseDevices],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Commands],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { dex: { commands: { devices: BaseDevices } } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.dex.commands.devices.list({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      page: 1,
      per_page: 1,
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
    const response = await client.zeroTrust.dex.commands.devices.list({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      page: 1,
      per_page: 1,
      search: 'search',
    });
  });
};
describe('resource devices', () => runTests(client));
describe('resource devices (tree shakable, base)', () => runTests(partialClient));
describe('resource devices (tree shakable, subresource)', () => runTests(parentPartialClient));
