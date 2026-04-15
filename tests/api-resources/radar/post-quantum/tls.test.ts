// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { PostQuantum } from 'cloudflare/resources/radar/post-quantum/post-quantum';
import { BaseTLS } from 'cloudflare/resources/radar/post-quantum/tls';

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
  resources: [BaseTLS],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [PostQuantum],
});

const runTests = (client: PartialCloudflare<{ radar: { postQuantum: { tls: BaseTLS } } }>) => {
  test('support: only required params', async () => {
    const responsePromise = client.radar.postQuantum.tls.support({ host: 'cloudflare.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('support: required and optional params', async () => {
    const response = await client.radar.postQuantum.tls.support({ host: 'cloudflare.com' });
  });
};
describe('resource tls', () => runTests(client));
describe('resource tls (tree shakable, base)', () => runTests(partialClient));
describe('resource tls (tree shakable, subresource)', () => runTests(parentPartialClient));
