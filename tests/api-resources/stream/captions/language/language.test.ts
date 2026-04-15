// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Captions } from 'cloudflare/resources/stream/captions/captions';
import { BaseLanguage } from 'cloudflare/resources/stream/captions/language/language';

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
  resources: [BaseLanguage],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Captions],
});

const runTests = (client: PartialCloudflare<{ stream: { captions: { language: BaseLanguage } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.stream.captions.language.create('tr', {
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

  test('create: required and optional params', async () => {
    const response = await client.stream.captions.language.create('tr', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      identifier: 'ea95132c15732412d22c1476fa83f27a',
    });
  });

  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.stream.captions.language.update('tr', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      identifier: 'ea95132c15732412d22c1476fa83f27a',
      file: '@/Users/kyle/Desktop/tr.vtt',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('update: required and optional params', async () => {
    const response = await client.stream.captions.language.update('tr', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      identifier: 'ea95132c15732412d22c1476fa83f27a',
      file: '@/Users/kyle/Desktop/tr.vtt',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.stream.captions.language.delete('tr', {
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

  test('delete: required and optional params', async () => {
    const response = await client.stream.captions.language.delete('tr', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      identifier: 'ea95132c15732412d22c1476fa83f27a',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.stream.captions.language.get('tr', {
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
    const response = await client.stream.captions.language.get('tr', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      identifier: 'ea95132c15732412d22c1476fa83f27a',
    });
  });
};
describe('resource language', () => runTests(client));
describe('resource language (tree shakable, base)', () => runTests(partialClient));
describe('resource language (tree shakable, subresource)', () => runTests(parentPartialClient));
