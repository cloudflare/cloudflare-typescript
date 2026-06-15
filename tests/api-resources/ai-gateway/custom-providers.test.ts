// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AIGateway } from 'cloudflare/resources/ai-gateway/ai-gateway';
import { BaseCustomProviders } from 'cloudflare/resources/ai-gateway/custom-providers';

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
  resources: [BaseCustomProviders],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [AIGateway],
});

const runTests = (client: PartialCloudflare<{ aiGateway: { customProviders: BaseCustomProviders } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.aiGateway.customProviders.create({
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      base_url: 'https://example.com',
      name: 'name',
      slug: 'slug',
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
    const response = await client.aiGateway.customProviders.create({
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      base_url: 'https://example.com',
      name: 'name',
      slug: 'slug',
      beta: true,
      curl_example: 'curl_example',
      description: 'description',
      enable: true,
      headers: 'headers',
      js_example: 'js_example',
      link: 'link',
      position: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.aiGateway.customProviders.list({
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
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
    const response = await client.aiGateway.customProviders.list({
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      beta: true,
      enable: true,
      page: 1,
      per_page: 1,
      search: 'search',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.aiGateway.customProviders.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
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
    const response = await client.aiGateway.customProviders.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.aiGateway.customProviders.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
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
    const response = await client.aiGateway.customProviders.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
    });
  });
};
describe('resource customProviders', () => runTests(client));
describe('resource customProviders (tree shakable, base)', () => runTests(partialClient));
describe('resource customProviders (tree shakable, subresource)', () => runTests(parentPartialClient));
