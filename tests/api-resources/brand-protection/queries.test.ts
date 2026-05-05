// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BrandProtection } from 'cloudflare/resources/brand-protection/brand-protection';
import { BaseQueries } from 'cloudflare/resources/brand-protection/queries';

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
  resources: [BaseQueries],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BrandProtection],
});

const runTests = (client: PartialCloudflare<{ brandProtection: { queries: BaseQueries } }>) => {
  // TODO: investigate broken test, 401 Unauthorized
  test.skip('create: only required params', async () => {
    const responsePromise = client.brandProtection.queries.create({ account_id: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test, 401 Unauthorized
  test.skip('create: required and optional params', async () => {
    const response = await client.brandProtection.queries.create({
      account_id: 'x',
      id: 'id',
      query_scan: true,
      query_tag: 'tag',
      max_time: '2019-12-27T18:11:19.117Z',
      min_time: '2019-12-27T18:11:19.117Z',
      body_scan: true,
      string_matches: {},
      body_tag: 'tag',
    });
  });

  // TODO: investigate broken test, 401 Unauthorized
  test.skip('delete: only required params', async () => {
    const responsePromise = client.brandProtection.queries.delete({ account_id: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test, 401 Unauthorized
  test.skip('delete: required and optional params', async () => {
    const response = await client.brandProtection.queries.delete({
      account_id: 'x',
      id: 'id',
      scan: true,
      tag: 'tag',
    });
  });

  // TODO: investigate broken test, 401 Unauthorized
  test.skip('bulk: only required params', async () => {
    const responsePromise = client.brandProtection.queries.bulk({ account_id: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test, 401 Unauthorized
  test.skip('bulk: required and optional params', async () => {
    const response = await client.brandProtection.queries.bulk({
      account_id: 'x',
      queries: [{ foo: 'bar' }],
    });
  });
};
describe('resource queries', () => runTests(client));
describe('resource queries (tree shakable, base)', () => runTests(partialClient));
describe('resource queries (tree shakable, subresource)', () => runTests(parentPartialClient));
