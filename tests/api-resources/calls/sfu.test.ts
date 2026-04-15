// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Calls } from 'cloudflare/resources/calls/calls';
import { BaseSFU } from 'cloudflare/resources/calls/sfu';

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
  resources: [BaseSFU],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Calls],
});

const runTests = (client: PartialCloudflare<{ calls: { sfu: BaseSFU } }>) => {
  // TODO: investigate auth errors on test suite
  test.skip('create: only required params', async () => {
    const responsePromise = client.calls.sfu.create({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate auth errors on test suite
  test.skip('create: required and optional params', async () => {
    const response = await client.calls.sfu.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'production-realtime-app',
    });
  });

  // TODO: investigate auth errors on test suite
  test.skip('update: only required params', async () => {
    const responsePromise = client.calls.sfu.update('2a95132c15732412d22c1476fa83f27a', {
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

  // TODO: investigate auth errors on test suite
  test.skip('update: required and optional params', async () => {
    const response = await client.calls.sfu.update('2a95132c15732412d22c1476fa83f27a', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'production-realtime-app',
    });
  });

  // TODO: investigate auth errors on test suite
  test.skip('list: only required params', async () => {
    const responsePromise = client.calls.sfu.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate auth errors on test suite
  test.skip('list: required and optional params', async () => {
    const response = await client.calls.sfu.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  // TODO: investigate auth errors on test suite
  test.skip('delete: only required params', async () => {
    const responsePromise = client.calls.sfu.delete('2a95132c15732412d22c1476fa83f27a', {
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

  // TODO: investigate auth errors on test suite
  test.skip('delete: required and optional params', async () => {
    const response = await client.calls.sfu.delete('2a95132c15732412d22c1476fa83f27a', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: investigate auth errors on test suite
  test.skip('get: only required params', async () => {
    const responsePromise = client.calls.sfu.get('2a95132c15732412d22c1476fa83f27a', {
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

  // TODO: investigate auth errors on test suite
  test.skip('get: required and optional params', async () => {
    const response = await client.calls.sfu.get('2a95132c15732412d22c1476fa83f27a', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource sfu', () => runTests(client));
describe('resource sfu (tree shakable, base)', () => runTests(partialClient));
describe('resource sfu (tree shakable, subresource)', () => runTests(parentPartialClient));
