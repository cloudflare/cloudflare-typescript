// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Browser } from 'cloudflare/resources/browser-rendering/devtools/browser/browser';
import { BasePage } from 'cloudflare/resources/browser-rendering/devtools/browser/page';

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
  resources: [BasePage],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Browser],
});

const runTests = (
  client: PartialCloudflare<{ browserRendering: { devtools: { browser: { page: BasePage } } } }>,
) => {
  // HTTP 101 error from prism
  test.skip('get: only required params', async () => {
    const responsePromise = client.browserRendering.devtools.browser.page.get('target_id', {
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

  // HTTP 101 error from prism
  test.skip('get: required and optional params', async () => {
    const response = await client.browserRendering.devtools.browser.page.get('target_id', {
      account_id: 'account_id',
      session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
};
describe('resource page', () => runTests(client));
describe('resource page (tree shakable, base)', () => runTests(partialClient));
describe('resource page (tree shakable, subresource)', () => runTests(parentPartialClient));
