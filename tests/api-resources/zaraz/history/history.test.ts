// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Zaraz } from 'cloudflare/resources/zaraz/zaraz';
import { BaseHistory } from 'cloudflare/resources/zaraz/history/history';

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
  resources: [BaseHistory],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Zaraz],
});

const runTests = (client: PartialCloudflare<{ zaraz: { history: BaseHistory } }>) => {
  test('update: only required params', async () => {
    const responsePromise = client.zaraz.history.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: 12345,
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
    const response = await client.zaraz.history.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: 12345,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zaraz.history.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.zaraz.history.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      limit: 1,
      offset: 0,
      sortField: 'id',
      sortOrder: 'DESC',
    });
  });
};
describe('resource history', () => runTests(client));
describe('resource history (tree shakable, base)', () => runTests(partialClient));
describe('resource history (tree shakable, subresource)', () => runTests(parentPartialClient));
