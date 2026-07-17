// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Relays } from 'cloudflare/resources/moq/relays/relays';
import { BaseTokens } from 'cloudflare/resources/moq/relays/tokens';

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
  resources: [BaseTokens],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Relays],
});

const runTests = (client: PartialCloudflare<{ moq: { relays: { tokens: BaseTokens } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.moq.relays.tokens.create('a1b2c3d4e5f67890a1b2c3d4e5f67890', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      operations: ['publish', 'subscribe'],
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
    const response = await client.moq.relays.tokens.create('a1b2c3d4e5f67890a1b2c3d4e5f67890', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      operations: ['publish', 'subscribe'],
      expires: '2027-03-27T15:00:00Z',
      label: 'primary-encoder',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.moq.relays.tokens.list('a1b2c3d4e5f67890a1b2c3d4e5f67890', {
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

  test('list: required and optional params', async () => {
    const response = await client.moq.relays.tokens.list('a1b2c3d4e5f67890a1b2c3d4e5f67890', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.moq.relays.tokens.delete('f3a1b2c3d4e5f67890a1b2c3d4e5f678', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      relay_id: 'a1b2c3d4e5f67890a1b2c3d4e5f67890',
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
    const response = await client.moq.relays.tokens.delete('f3a1b2c3d4e5f67890a1b2c3d4e5f678', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      relay_id: 'a1b2c3d4e5f67890a1b2c3d4e5f67890',
    });
  });
};
describe('resource tokens', () => runTests(client));
describe('resource tokens (tree shakable, base)', () => runTests(partialClient));
describe('resource tokens (tree shakable, subresource)', () => runTests(parentPartialClient));
