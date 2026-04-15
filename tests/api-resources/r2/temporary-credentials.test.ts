// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { R2 } from 'cloudflare/resources/r2/r2';
import { BaseTemporaryCredentials } from 'cloudflare/resources/r2/temporary-credentials';

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
  resources: [BaseTemporaryCredentials],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [R2],
});

const runTests = (client: PartialCloudflare<{ r2: { temporaryCredentials: BaseTemporaryCredentials } }>) => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.r2.temporaryCredentials.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      bucket: 'example-bucket',
      parentAccessKeyId: 'example-access-key-id',
      permission: 'object-read-write',
      ttlSeconds: 3600,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('create: required and optional params', async () => {
    const response = await client.r2.temporaryCredentials.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      bucket: 'example-bucket',
      parentAccessKeyId: 'example-access-key-id',
      permission: 'object-read-write',
      ttlSeconds: 3600,
      objects: ['example-object'],
      prefixes: ['example-prefix/'],
    });
  });
};
describe('resource temporaryCredentials', () => runTests(client));
describe('resource temporaryCredentials (tree shakable, base)', () => runTests(partialClient));
describe('resource temporaryCredentials (tree shakable, subresource)', () => runTests(parentPartialClient));
