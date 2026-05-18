// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { SecretsStore } from 'cloudflare/resources/secrets-store/secrets-store';
import { BaseStores } from 'cloudflare/resources/secrets-store/stores/stores';

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
  resources: [BaseStores],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [SecretsStore],
});

const runTests = (client: PartialCloudflare<{ secretsStore: { stores: BaseStores } }>) => {
  // SKIP: prism error for 422 Unprocessable Entity
  test.skip('create: only required params', async () => {
    const responsePromise = client.secretsStore.stores.create({
      account_id: '985e105f4ecef8ad9ca31a8372d0c353',
      name: 'service_x_keys',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // SKIP: prism error for 422 Unprocessable Entity
  test.skip('create: required and optional params', async () => {
    const response = await client.secretsStore.stores.create({
      account_id: '985e105f4ecef8ad9ca31a8372d0c353',
      name: 'service_x_keys',
    });
  });

  // SKIP: prism error for 422 Unprocessable Entity
  test.skip('list: only required params', async () => {
    const responsePromise = client.secretsStore.stores.list({
      account_id: '985e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // SKIP: prism error for 422 Unprocessable Entity
  test.skip('list: required and optional params', async () => {
    const response = await client.secretsStore.stores.list({
      account_id: '985e105f4ecef8ad9ca31a8372d0c353',
      direction: 'asc',
      order: 'name',
      page: 2,
      per_page: 20,
    });
  });

  // SKIP: prism error for 422 Unprocessable Entity
  test.skip('delete: only required params', async () => {
    const responsePromise = client.secretsStore.stores.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '985e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // SKIP: prism error for 422 Unprocessable Entity
  test.skip('delete: required and optional params', async () => {
    const response = await client.secretsStore.stores.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '985e105f4ecef8ad9ca31a8372d0c353',
      force: true,
    });
  });

  // SKIP: prism error for 422 Unprocessable Entity
  test.skip('get: only required params', async () => {
    const responsePromise = client.secretsStore.stores.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '985e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // SKIP: prism error for 422 Unprocessable Entity
  test.skip('get: required and optional params', async () => {
    const response = await client.secretsStore.stores.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '985e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource stores', () => runTests(client));
describe('resource stores (tree shakable, base)', () => runTests(partialClient));
describe('resource stores (tree shakable, subresource)', () => runTests(parentPartialClient));
