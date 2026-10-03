// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Containers } from 'cloudflare/resources/containers/containers';
import { BaseRegistries } from 'cloudflare/resources/containers/registries/registries';

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
  resources: [BaseRegistries],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Containers],
});

const runTests = (client: PartialCloudflare<{ containers: { registries: BaseRegistries } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.containers.registries.create({
      account_id: 'account-123',
      auth: {
        private_credential: { secret_name: 'API_KEY', store_id: '14758f1afd44c09b7992073ccf00b43d' },
        public_credential: 'example-user',
      },
      domain: 'docker.io',
      kind: 'ECR',
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
    const response = await client.containers.registries.create({
      account_id: 'account-123',
      auth: {
        private_credential: { secret_name: 'API_KEY', store_id: '14758f1afd44c09b7992073ccf00b43d' },
        public_credential: 'example-user',
      },
      domain: 'docker.io',
      kind: 'ECR',
      is_public: false,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.containers.registries.list({ account_id: 'account-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.containers.registries.list({ account_id: 'account-123' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.containers.registries.delete('domain', { account_id: 'account-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.containers.registries.delete('domain', { account_id: 'account-123' });
  });
};
describe('resource registries', () => runTests(client));
describe('resource registries (tree shakable, base)', () => runTests(partialClient));
describe('resource registries (tree shakable, subresource)', () => runTests(parentPartialClient));
