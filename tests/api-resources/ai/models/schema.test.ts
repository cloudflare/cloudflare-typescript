// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Models } from 'cloudflare/resources/ai/models/models';
import { BaseSchema } from 'cloudflare/resources/ai/models/schema';

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
  resources: [BaseSchema],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Models],
});

const runTests = (client: PartialCloudflare<{ ai: { models: { schema: BaseSchema } } }>) => {
  test('get: only required params', async () => {
    const responsePromise = client.ai.models.schema.get({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      model: 'model',
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
    const response = await client.ai.models.schema.get({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      model: 'model',
    });
  });
};
describe('resource schema', () => runTests(client));
describe('resource schema (tree shakable, base)', () => runTests(partialClient));
describe('resource schema (tree shakable, subresource)', () => runTests(parentPartialClient));
