// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource language', () => {
  test('create: only required params', async () => {
    const responsePromise = client.stream.captions.language.create('ea95132c15732412d22c1476fa83f27a', 'tr', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.stream.captions.language.create('ea95132c15732412d22c1476fa83f27a', 'tr', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.stream.captions.language.update('ea95132c15732412d22c1476fa83f27a', 'tr', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.stream.captions.language.update('ea95132c15732412d22c1476fa83f27a', 'tr', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      file: '@/Users/kyle/Desktop/tr.vtt',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.stream.captions.language.delete('ea95132c15732412d22c1476fa83f27a', 'tr', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.stream.captions.language.delete('ea95132c15732412d22c1476fa83f27a', 'tr', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.stream.captions.language.get('ea95132c15732412d22c1476fa83f27a', 'tr', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.stream.captions.language.get('ea95132c15732412d22c1476fa83f27a', 'tr', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
