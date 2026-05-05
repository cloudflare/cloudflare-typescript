// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseQuota } from 'cloudflare/resources/secrets-store/quota';
import { SecretsStore } from 'cloudflare/resources/secrets-store/secrets-store';

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
  resources: [BaseQuota],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [SecretsStore],
});

const runTests = (client: PartialCloudflare<{ secretsStore: { quota: BaseQuota } }>) => {
  test('get: only required params', async () => {
    const responsePromise = client.secretsStore.quota.get({ account_id: '985e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.secretsStore.quota.get({ account_id: '985e105f4ecef8ad9ca31a8372d0c353' });
  });
};
describe('resource quota', () => runTests(client));
describe('resource quota (tree shakable, base)', () => runTests(partialClient));
describe('resource quota (tree shakable, subresource)', () => runTests(parentPartialClient));
