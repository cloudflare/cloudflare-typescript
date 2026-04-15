// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseLogoMatches } from 'cloudflare/resources/brand-protection/v2/logo-matches';
import { V2 } from 'cloudflare/resources/brand-protection/v2/v2';

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
  resources: [BaseLogoMatches],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [V2],
});

const runTests = (
  client: PartialCloudflare<{ brandProtection: { v2: { logoMatches: BaseLogoMatches } } }>,
) => {
  // HTTP 401 error from prism
  test.skip('get: only required params', async () => {
    const responsePromise = client.brandProtection.v2.logoMatches.get({ account_id: 'x', query_id: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 401 error from prism
  test.skip('get: required and optional params', async () => {
    const response = await client.brandProtection.v2.logoMatches.get({
      account_id: 'x',
      query_id: 'x',
      download: 'download',
      limit: 'limit',
      offset: 'offset',
      order: 'asc',
      orderBy: 'matchedAt',
    });
  });
};
describe('resource logoMatches', () => runTests(client));
describe('resource logoMatches (tree shakable, base)', () => runTests(partialClient));
describe('resource logoMatches (tree shakable, subresource)', () => runTests(parentPartialClient));
