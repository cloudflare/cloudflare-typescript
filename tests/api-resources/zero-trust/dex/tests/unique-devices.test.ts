// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tests } from 'cloudflare/resources/zero-trust/dex/tests/tests';
import { BaseUniqueDevices } from 'cloudflare/resources/zero-trust/dex/tests/unique-devices';

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
  resources: [BaseUniqueDevices],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Tests],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { dex: { tests: { uniqueDevices: BaseUniqueDevices } } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.dex.tests.uniqueDevices.list({
      account_id: '01a7362d577a6c3019a474fd6f485823',
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
    const response = await client.zeroTrust.dex.tests.uniqueDevices.list({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      deviceId: ['cb49c27f-7f97-49c5-b6f3-f7c01ead0fd7'],
      testName: 'testName',
    });
  });
};
describe('resource uniqueDevices', () => runTests(client));
describe('resource uniqueDevices (tree shakable, base)', () => runTests(partialClient));
describe('resource uniqueDevices (tree shakable, subresource)', () => runTests(parentPartialClient));
