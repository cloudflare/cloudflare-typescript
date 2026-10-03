// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCredentials } from 'cloudflare/resources/containers/registries/credentials';
import { Registries } from 'cloudflare/resources/containers/registries/registries';

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
  resources: [BaseCredentials],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Registries],
});

const runTests = (
  client: PartialCloudflare<{ containers: { registries: { credentials: BaseCredentials } } }>,
) => {
  test('generate: only required params', async () => {
    const responsePromise = client.containers.registries.credentials.generate('registry.cloudflare.com', {
      account_id: 'account-123',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generate: required and optional params', async () => {
    const response = await client.containers.registries.credentials.generate('registry.cloudflare.com', {
      account_id: 'account-123',
      expiration_minutes: 1,
      permissions: ['pull'],
    });
  });
};
describe('resource credentials', () => runTests(client));
describe('resource credentials (tree shakable, base)', () => runTests(partialClient));
describe('resource credentials (tree shakable, subresource)', () => runTests(parentPartialClient));
