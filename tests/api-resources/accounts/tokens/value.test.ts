// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tokens } from 'cloudflare/resources/accounts/tokens/tokens';
import { BaseValue } from 'cloudflare/resources/accounts/tokens/value';

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
  resources: [BaseValue],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Tokens],
});

const runTests = (client: PartialCloudflare<{ accounts: { tokens: { value: BaseValue } } }>) => {
  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.accounts.tokens.value.update('ed17574386854bf78a67040be0a770b0', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {},
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
    const response = await client.accounts.tokens.value.update('ed17574386854bf78a67040be0a770b0', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {},
    });
  });
};
describe('resource value', () => runTests(client));
describe('resource value (tree shakable, base)', () => runTests(partialClient));
describe('resource value (tree shakable, subresource)', () => runTests(parentPartialClient));
