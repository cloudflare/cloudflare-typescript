// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCustom } from 'cloudflare/resources/zero-trust/dlp/entries/custom';
import { Entries } from 'cloudflare/resources/zero-trust/dlp/entries/entries';

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
  resources: [BaseCustom],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Entries],
});

const runTests = (client: PartialCloudflare<{ zeroTrust: { dlp: { entries: { custom: BaseCustom } } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.entries.custom.create({
      account_id: 'account_id',
      enabled: true,
      name: 'name',
      pattern: { regex: 'regex' },
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
    const response = await client.zeroTrust.dlp.entries.custom.create({
      account_id: 'account_id',
      enabled: true,
      name: 'name',
      pattern: { regex: 'regex', validation: 'luhn' },
      description: 'description',
      profile_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // TODO: investigate 422 error in prism test
  test.skip('update: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.entries.custom.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'account_id',
        enabled: true,
        name: 'name',
        pattern: { regex: 'regex' },
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate 422 error in prism test
  test.skip('update: required and optional params', async () => {
    const response = await client.zeroTrust.dlp.entries.custom.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'account_id',
        enabled: true,
        name: 'name',
        pattern: { regex: 'regex', validation: 'luhn' },
        description: 'description',
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.entries.custom.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.dlp.entries.custom.list({ account_id: 'account_id' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.entries.custom.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.zeroTrust.dlp.entries.custom.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.entries.custom.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
    const response = await client.zeroTrust.dlp.entries.custom.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
    });
  });
};
describe('resource custom', () => runTests(client));
describe('resource custom (tree shakable, base)', () => runTests(partialClient));
describe('resource custom (tree shakable, subresource)', () => runTests(parentPartialClient));
