// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Apps } from 'cloudflare/resources/flagship/apps/apps';
import { BaseEvaluate } from 'cloudflare/resources/flagship/apps/evaluate';

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
  resources: [BaseEvaluate],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Apps],
});

const runTests = (client: PartialCloudflare<{ flagship: { apps: { evaluate: BaseEvaluate } } }>) => {
  test('get: only required params', async () => {
    const responsePromise = client.flagship.apps.evaluate.get('app_id', {
      account_id: 'account_id',
      flagKey: 'flagKey',
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
    const response = await client.flagship.apps.evaluate.get('app_id', {
      account_id: 'account_id',
      flagKey: 'flagKey',
      targetingKey: 'targetingKey',
    });
  });
};
describe('resource evaluate', () => runTests(client));
describe('resource evaluate (tree shakable, base)', () => runTests(partialClient));
describe('resource evaluate (tree shakable, subresource)', () => runTests(parentPartialClient));
