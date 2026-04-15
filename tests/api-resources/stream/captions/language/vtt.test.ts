// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Language } from 'cloudflare/resources/stream/captions/language/language';
import { BaseVtt } from 'cloudflare/resources/stream/captions/language/vtt';

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
  resources: [BaseVtt],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Language],
});

const runTests = (client: PartialCloudflare<{ stream: { captions: { language: { vtt: BaseVtt } } } }>) => {
  test('get: only required params', async () => {
    const responsePromise = client.stream.captions.language.vtt.get('tr', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      identifier: 'ea95132c15732412d22c1476fa83f27a',
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
    const response = await client.stream.captions.language.vtt.get('tr', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      identifier: 'ea95132c15732412d22c1476fa83f27a',
    });
  });
};
describe('resource vtt', () => runTests(client));
describe('resource vtt (tree shakable, base)', () => runTests(partialClient));
describe('resource vtt (tree shakable, subresource)', () => runTests(parentPartialClient));
