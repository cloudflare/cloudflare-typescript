// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IndicatorFeeds } from 'cloudflare/resources/intel/indicator-feeds/indicator-feeds';
import { BasePermissions } from 'cloudflare/resources/intel/indicator-feeds/permissions';

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
  resources: [BasePermissions],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [IndicatorFeeds],
});

const runTests = (
  client: PartialCloudflare<{ intel: { indicatorFeeds: { permissions: BasePermissions } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.intel.indicatorFeeds.permissions.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.intel.indicatorFeeds.permissions.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      account_tag: '823f45f16fd2f7e21e1e054aga4d2859',
      feed_id: 1,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.intel.indicatorFeeds.permissions.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.intel.indicatorFeeds.permissions.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.intel.indicatorFeeds.permissions.delete({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.intel.indicatorFeeds.permissions.delete({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      account_tag: '823f45f16fd2f7e21e1e054aga4d2859',
      feed_id: 1,
    });
  });
};
describe('resource permissions', () => runTests(client));
describe('resource permissions (tree shakable, base)', () => runTests(partialClient));
describe('resource permissions (tree shakable, subresource)', () => runTests(parentPartialClient));
