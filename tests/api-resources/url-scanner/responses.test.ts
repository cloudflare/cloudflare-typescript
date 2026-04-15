// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseResponses } from 'cloudflare/resources/url-scanner/responses';
import { URLScanner } from 'cloudflare/resources/url-scanner/url-scanner';

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
  resources: [BaseResponses],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [URLScanner],
});

const runTests = (client: PartialCloudflare<{ urlScanner: { responses: BaseResponses } }>) => {
  test('get: only required params', async () => {
    const responsePromise = client.urlScanner.responses.get('response_id', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.urlScanner.responses.get('response_id', { account_id: 'account_id' });
  });
};
describe('resource responses', () => runTests(client));
describe('resource responses (tree shakable, base)', () => runTests(partialClient));
describe('resource responses (tree shakable, subresource)', () => runTests(parentPartialClient));
