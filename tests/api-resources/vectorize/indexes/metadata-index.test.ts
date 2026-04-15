// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Indexes } from 'cloudflare/resources/vectorize/indexes/indexes';
import { BaseMetadataIndex } from 'cloudflare/resources/vectorize/indexes/metadata-index';

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
  resources: [BaseMetadataIndex],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Indexes],
});

const runTests = (
  client: PartialCloudflare<{ vectorize: { indexes: { metadataIndex: BaseMetadataIndex } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.vectorize.indexes.metadataIndex.create('example-index', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      indexType: 'string',
      propertyName: 'random_metadata_property',
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
    const response = await client.vectorize.indexes.metadataIndex.create('example-index', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      indexType: 'string',
      propertyName: 'random_metadata_property',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.vectorize.indexes.metadataIndex.list('example-index', {
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
    const response = await client.vectorize.indexes.metadataIndex.list('example-index', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.vectorize.indexes.metadataIndex.delete('example-index', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      propertyName: 'random_metadata_property',
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
    const response = await client.vectorize.indexes.metadataIndex.delete('example-index', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      propertyName: 'random_metadata_property',
    });
  });
};
describe('resource metadataIndex', () => runTests(client));
describe('resource metadataIndex (tree shakable, base)', () => runTests(partialClient));
describe('resource metadataIndex (tree shakable, subresource)', () => runTests(parentPartialClient));
