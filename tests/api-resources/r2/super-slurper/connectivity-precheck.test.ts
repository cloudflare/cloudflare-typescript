// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseConnectivityPrecheck } from 'cloudflare/resources/r2/super-slurper/connectivity-precheck';
import { SuperSlurper } from 'cloudflare/resources/r2/super-slurper/super-slurper';

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
  resources: [BaseConnectivityPrecheck],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [SuperSlurper],
});

const runTests = (
  client: PartialCloudflare<{ r2: { superSlurper: { connectivityPrecheck: BaseConnectivityPrecheck } } }>,
) => {
  test('source: only required params', async () => {
    const responsePromise = client.r2.superSlurper.connectivityPrecheck.source({
      account_id: 'account_id',
      bucket: 'bucket',
      secret: { accessKeyId: 'accessKeyId', secretAccessKey: 'secretAccessKey' },
      vendor: 's3',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('source: required and optional params', async () => {
    const response = await client.r2.superSlurper.connectivityPrecheck.source({
      account_id: 'account_id',
      bucket: 'bucket',
      secret: { accessKeyId: 'accessKeyId', secretAccessKey: 'secretAccessKey' },
      vendor: 's3',
      endpoint: 'https://example.com',
      keys: ['string'],
      pathPrefix: 'pathPrefix',
      region: 'region',
    });
  });

  test('target: only required params', async () => {
    const responsePromise = client.r2.superSlurper.connectivityPrecheck.target({
      account_id: 'account_id',
      bucket: 'bucket',
      secret: { accessKeyId: 'accessKeyId', secretAccessKey: 'secretAccessKey' },
      vendor: 'r2',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('target: required and optional params', async () => {
    const response = await client.r2.superSlurper.connectivityPrecheck.target({
      account_id: 'account_id',
      bucket: 'bucket',
      secret: { accessKeyId: 'accessKeyId', secretAccessKey: 'secretAccessKey' },
      vendor: 'r2',
      jurisdiction: 'default',
    });
  });
};
describe('resource connectivityPrecheck', () => runTests(client));
describe('resource connectivityPrecheck (tree shakable, base)', () => runTests(partialClient));
describe('resource connectivityPrecheck (tree shakable, subresource)', () => runTests(parentPartialClient));
