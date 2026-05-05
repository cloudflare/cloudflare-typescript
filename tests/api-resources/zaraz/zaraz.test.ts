// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseZaraz } from 'cloudflare/resources/zaraz/zaraz';

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
  resources: [BaseZaraz],
});

const runTests = (client: PartialCloudflare<{ zaraz: BaseZaraz }>) => {
  test('update: only required params', async () => {
    const responsePromise = client.zaraz.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      workflow: 'realtime',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.zaraz.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      workflow: 'realtime',
    });
  });
};
describe('resource zaraz', () => runTests(client));
describe('resource zaraz (tree shakable, base)', () => runTests(partialClient));
