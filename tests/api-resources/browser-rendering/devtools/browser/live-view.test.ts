// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Browser } from 'cloudflare/resources/browser-rendering/devtools/browser/browser';
import { BaseLiveView } from 'cloudflare/resources/browser-rendering/devtools/browser/live-view';

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
  resources: [BaseLiveView],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Browser],
});

const runTests = (
  client: PartialCloudflare<{ browserRendering: { devtools: { browser: { liveView: BaseLiveView } } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.browserRendering.devtools.browser.liveView.create(
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
    const response = await client.browserRendering.devtools.browser.liveView.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'account_id',
        expiresInMs: 60000,
        guardrails: { mode: 'readonly' },
        mode: 'devtools',
        targetId: 'targetId',
      },
    );
  });
};
describe('resource liveView', () => runTests(client));
describe('resource liveView (tree shakable, base)', () => runTests(partialClient));
describe('resource liveView (tree shakable, subresource)', () => runTests(parentPartialClient));
