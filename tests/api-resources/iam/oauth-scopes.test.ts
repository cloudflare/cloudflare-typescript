// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IAM } from 'cloudflare/resources/iam/iam';
import { BaseOAuthScopes } from 'cloudflare/resources/iam/oauth-scopes/oauth-scopes';

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
  resources: [BaseOAuthScopes],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [IAM],
});

const runTests = (client: PartialCloudflare<{ iam: { oauthScopes: BaseOAuthScopes } }>) => {
  test('list', async () => {
    const responsePromise = client.iam.oauthScopes.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource oauthScopes', () => runTests(client));
describe('resource oauthScopes (tree shakable, base)', () => runTests(partialClient));
describe('resource oauthScopes (tree shakable, subresource)', () => runTests(parentPartialClient));
