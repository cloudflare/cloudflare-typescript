// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Addressing } from 'cloudflare/resources/addressing/addressing';
import { BaseServices } from 'cloudflare/resources/addressing/services';

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
  resources: [BaseServices],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Addressing],
});

const runTests = (client: PartialCloudflare<{ addressing: { services: BaseServices } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.addressing.services.list({
      account_id: '258def64c72dae45f3e4c8516e2111f2',
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
    const response = await client.addressing.services.list({
      account_id: '258def64c72dae45f3e4c8516e2111f2',
    });
  });
};
describe('resource services', () => runTests(client));
describe('resource services (tree shakable, base)', () => runTests(partialClient));
describe('resource services (tree shakable, subresource)', () => runTests(parentPartialClient));
