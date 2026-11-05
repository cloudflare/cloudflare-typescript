// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { DLP } from 'cloudflare/resources/zero-trust/dlp/dlp';
import { BaseValidators } from 'cloudflare/resources/zero-trust/dlp/validators/validators';

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
  resources: [BaseValidators],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [DLP],
});

const runTests = (client: PartialCloudflare<{ zeroTrust: { dlp: { validators: BaseValidators } } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.validators.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.dlp.validators.list({
      account_id: 'account_id',
      kind: 'proximity_words',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.validators.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
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
    const response = await client.zeroTrust.dlp.validators.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
    });
  });
};
describe('resource validators', () => runTests(client));
describe('resource validators (tree shakable, base)', () => runTests(partialClient));
describe('resource validators (tree shakable, subresource)', () => runTests(parentPartialClient));
