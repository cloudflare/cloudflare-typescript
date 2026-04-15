// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { DLP } from 'cloudflare/resources/zero-trust/dlp/dlp';
import { BasePatterns } from 'cloudflare/resources/zero-trust/dlp/patterns';

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
  resources: [BasePatterns],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [DLP],
});

const runTests = (client: PartialCloudflare<{ zeroTrust: { dlp: { patterns: BasePatterns } } }>) => {
  test('validate: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.patterns.validate({
      account_id: 'account_id',
      regex: 'regex',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('validate: required and optional params', async () => {
    const response = await client.zeroTrust.dlp.patterns.validate({
      account_id: 'account_id',
      regex: 'regex',
      max_match_bytes: 0,
    });
  });
};
describe('resource patterns', () => runTests(client));
describe('resource patterns (tree shakable, base)', () => runTests(partialClient));
describe('resource patterns (tree shakable, subresource)', () => runTests(parentPartialClient));
