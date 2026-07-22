// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Browser } from 'cloudflare/resources/browser-rendering/devtools/browser/browser';
import { BaseTargets } from 'cloudflare/resources/browser-rendering/devtools/browser/targets';

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
  resources: [BaseTargets],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Browser],
});

const runTests = (
  client: PartialCloudflare<{ browserRendering: { devtools: { browser: { targets: BaseTargets } } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.browserRendering.devtools.browser.targets.create(
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

  test('create: required and optional params', async () => {
    const response = await client.browserRendering.devtools.browser.targets.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'account_id',
        liveViewUrlExpiresInMs: 60000,
        url: 'https://example.com',
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.browserRendering.devtools.browser.targets.list(
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

  test('list: required and optional params', async () => {
    const response = await client.browserRendering.devtools.browser.targets.list(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id', liveViewUrlExpiresInMs: 60000 },
    );
  });

  test('activate: only required params', async () => {
    const responsePromise = client.browserRendering.devtools.browser.targets.activate('target_id', {
      account_id: 'account_id',
      session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('activate: required and optional params', async () => {
    const response = await client.browserRendering.devtools.browser.targets.activate('target_id', {
      account_id: 'account_id',
      session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('close: only required params', async () => {
    const responsePromise = client.browserRendering.devtools.browser.targets.close('target_id', {
      account_id: 'account_id',
      session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('close: required and optional params', async () => {
    const response = await client.browserRendering.devtools.browser.targets.close('target_id', {
      account_id: 'account_id',
      session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.browserRendering.devtools.browser.targets.get('target_id', {
      account_id: 'account_id',
      session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.browserRendering.devtools.browser.targets.get('target_id', {
      account_id: 'account_id',
      session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
};
describe('resource targets', () => runTests(client));
describe('resource targets (tree shakable, base)', () => runTests(partialClient));
describe('resource targets (tree shakable, subresource)', () => runTests(parentPartialClient));
