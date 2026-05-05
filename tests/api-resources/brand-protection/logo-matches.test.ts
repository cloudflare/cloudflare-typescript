// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BrandProtection } from 'cloudflare/resources/brand-protection/brand-protection';
import { BaseLogoMatches } from 'cloudflare/resources/brand-protection/logo-matches';

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
  resources: [BrandProtection],
});

const runTests = (client: PartialCloudflare<{ brandProtection: { logoMatches: BaseLogoMatches } }>) => {
  // TODO: investigate broken test, 401 Unauthorized error
  test.skip('download: only required params', async () => {
    const responsePromise = client.brandProtection.logoMatches.download({ account_id: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test, 401 Unauthorized error
  test.skip('download: required and optional params', async () => {
    const response = await client.brandProtection.logoMatches.download({
      account_id: 'x',
      limit: 'limit',
      logo_id: ['string'],
      offset: 'offset',
    });
  });

  // TODO: investigate broken test, 401 Unauthorized error
  test.skip('get: only required params', async () => {
    const responsePromise = client.brandProtection.logoMatches.get({ account_id: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test, 401 Unauthorized error
  test.skip('get: required and optional params', async () => {
    const response = await client.brandProtection.logoMatches.get({
      account_id: 'x',
      limit: 'limit',
      logo_id: ['string'],
      offset: 'offset',
    });
  });
};
describe('resource logoMatches', () => runTests(client));
describe('resource logoMatches (tree shakable, base)', () => runTests(partialClient));
describe('resource logoMatches (tree shakable, subresource)', () => runTests(parentPartialClient));
