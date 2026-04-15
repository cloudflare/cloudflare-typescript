// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AIGateway } from 'cloudflare/resources/ai-gateway/ai-gateway';
import { BaseProviderConfigs } from 'cloudflare/resources/ai-gateway/provider-configs';

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
  resources: [BaseProviderConfigs],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [AIGateway],
});

const runTests = (client: PartialCloudflare<{ aiGateway: { providerConfigs: BaseProviderConfigs } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.aiGateway.providerConfigs.create('my-gateway', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      alias: 'alias',
      default_config: true,
      provider_slug: 'provider_slug',
      secret: 'secret',
      secret_id: 'secret_id',
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
    const response = await client.aiGateway.providerConfigs.create('my-gateway', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      alias: 'alias',
      default_config: true,
      provider_slug: 'provider_slug',
      secret: 'secret',
      secret_id: 'secret_id',
      rate_limit: 0,
      rate_limit_period: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.aiGateway.providerConfigs.list('my-gateway', {
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
    const response = await client.aiGateway.providerConfigs.list('my-gateway', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      page: 1,
      per_page: 1,
    });
  });
};
describe('resource providerConfigs', () => runTests(client));
describe('resource providerConfigs (tree shakable, base)', () => runTests(partialClient));
describe('resource providerConfigs (tree shakable, subresource)', () => runTests(parentPartialClient));
