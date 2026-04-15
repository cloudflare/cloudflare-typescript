// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IndicatorFeeds } from 'cloudflare/resources/intel/indicator-feeds/indicator-feeds';
import { BaseSnapshots } from 'cloudflare/resources/intel/indicator-feeds/snapshots';

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
  resources: [BaseSnapshots],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [IndicatorFeeds],
});

const runTests = (client: PartialCloudflare<{ intel: { indicatorFeeds: { snapshots: BaseSnapshots } } }>) => {
  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.intel.indicatorFeeds.snapshots.update(12, {
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

  // TODO: investigate broken test
  test.skip('update: required and optional params', async () => {
    const response = await client.intel.indicatorFeeds.snapshots.update(12, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      source: '@/Users/me/test.stix2',
    });
  });
};
describe('resource snapshots', () => runTests(client));
describe('resource snapshots (tree shakable, base)', () => runTests(partialClient));
describe('resource snapshots (tree shakable, subresource)', () => runTests(parentPartialClient));
