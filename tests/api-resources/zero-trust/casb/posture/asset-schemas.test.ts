// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAssetSchemas } from 'cloudflare/resources/zero-trust/casb/posture/asset-schemas';
import { Posture } from 'cloudflare/resources/zero-trust/casb/posture/posture';

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
  resources: [BaseAssetSchemas],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Posture],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { casb: { posture: { assetSchemas: BaseAssetSchemas } } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.assetSchemas.list({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
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
    const response = await client.zeroTrust.casb.posture.assetSchemas.list({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      vendor: 'ANTHROPIC',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.assetSchemas.get('AnthropicApiKey', {
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
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
    const response = await client.zeroTrust.casb.posture.assetSchemas.get('AnthropicApiKey', {
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
    });
  });
};
describe('resource assetSchemas', () => runTests(client));
describe('resource assetSchemas (tree shakable, base)', () => runTests(partialClient));
describe('resource assetSchemas (tree shakable, subresource)', () => runTests(parentPartialClient));
