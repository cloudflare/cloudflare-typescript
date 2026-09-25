// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Logpush } from 'cloudflare/resources/logpush/logpush';
import { BaseTransformers } from 'cloudflare/resources/logpush/transformers/transformers';

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
  resources: [BaseTransformers],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Logpush],
});

const runTests = (client: PartialCloudflare<{ logpush: { transformers: BaseTransformers } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.logpush.transformers.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      code: 'SELECT ClientIP, RayID FROM http_requests',
      name: 'redact-pii',
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
    const response = await client.logpush.transformers.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      code: 'SELECT ClientIP, RayID FROM http_requests',
      name: 'redact-pii',
      description: 'Redacts PII fields from HTTP request logs.',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.logpush.transformers.update(42, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'redact-pii',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.logpush.transformers.update(42, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'redact-pii',
      code: 'SELECT ClientIP, RayID FROM http_requests',
      description: 'Redacts PII fields from HTTP request logs.',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.logpush.transformers.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.logpush.transformers.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.logpush.transformers.delete(42, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.logpush.transformers.delete(42, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.logpush.transformers.get(42, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.logpush.transformers.get(42, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('preview: only required params', async () => {
    const responsePromise = client.logpush.transformers.preview({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      input: {
        ClientIP: 'bar',
        ClientRequestHost: 'bar',
        EdgeStartTimestamp: 'bar',
        RayID: 'bar',
      },
      sql: 'SELECT ClientIP, RayID FROM http_requests',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('preview: required and optional params', async () => {
    const response = await client.logpush.transformers.preview({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      input: {
        ClientIP: 'bar',
        ClientRequestHost: 'bar',
        EdgeStartTimestamp: 'bar',
        RayID: 'bar',
      },
      sql: 'SELECT ClientIP, RayID FROM http_requests',
    });
  });
};
describe('resource transformers', () => runTests(client));
describe('resource transformers (tree shakable, base)', () => runTests(partialClient));
describe('resource transformers (tree shakable, subresource)', () => runTests(parentPartialClient));
