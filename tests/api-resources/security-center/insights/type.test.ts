// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Insights } from 'cloudflare/resources/security-center/insights/insights';
import { BaseType } from 'cloudflare/resources/security-center/insights/type';

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
  resources: [BaseType],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Insights],
});

const runTests = (client: PartialCloudflare<{ securityCenter: { insights: { type: BaseType } } }>) => {
  test('get', async () => {
    const responsePromise = client.securityCenter.insights.type.get({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource type', () => runTests(client));
describe('resource type (tree shakable, base)', () => runTests(partialClient));
describe('resource type (tree shakable, subresource)', () => runTests(parentPartialClient));
