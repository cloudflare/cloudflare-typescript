// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AI } from 'cloudflare/resources/ai/ai';
import { BaseModels } from 'cloudflare/resources/ai/models/models';

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
  resources: [BaseModels],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [AI],
});

const runTests = (client: PartialCloudflare<{ ai: { models: BaseModels } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.ai.models.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.ai.models.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      author: 'author',
      format: 'openrouter',
      hide_experimental: true,
      page: 0,
      per_page: 0,
      search: 'search',
      source: 0,
      task: 'Text Generation',
    });
  });
};
describe('resource models', () => runTests(client));
describe('resource models (tree shakable, base)', () => runTests(partialClient));
describe('resource models (tree shakable, subresource)', () => runTests(parentPartialClient));
