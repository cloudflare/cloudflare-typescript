// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AIGateway } from 'cloudflare/resources/ai-gateway/ai-gateway';
import { BaseEvaluations } from 'cloudflare/resources/ai-gateway/evaluations';

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
  resources: [BaseEvaluations],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [AIGateway],
});

const runTests = (client: PartialCloudflare<{ aiGateway: { evaluations: BaseEvaluations } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.aiGateway.evaluations.create('my-gateway', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      dataset_ids: ['string'],
      evaluation_type_ids: ['string'],
      name: 'name',
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
    const response = await client.aiGateway.evaluations.create('my-gateway', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      dataset_ids: ['string'],
      evaluation_type_ids: ['string'],
      name: 'name',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.aiGateway.evaluations.list('my-gateway', {
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
    const response = await client.aiGateway.evaluations.list('my-gateway', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      name: 'name',
      page: 1,
      per_page: 1,
      processed: true,
      search: 'search',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.aiGateway.evaluations.delete('id', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      gateway_id: 'my-gateway',
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
    const response = await client.aiGateway.evaluations.delete('id', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      gateway_id: 'my-gateway',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.aiGateway.evaluations.get('id', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      gateway_id: 'my-gateway',
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
    const response = await client.aiGateway.evaluations.get('id', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      gateway_id: 'my-gateway',
    });
  });
};
describe('resource evaluations', () => runTests(client));
describe('resource evaluations (tree shakable, base)', () => runTests(partialClient));
describe('resource evaluations (tree shakable, subresource)', () => runTests(parentPartialClient));
