// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAnalytics } from 'cloudflare/resources/realtime-kit/analytics';
import { RealtimeKit } from 'cloudflare/resources/realtime-kit/realtime-kit';

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
  resources: [BaseAnalytics],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [RealtimeKit],
});

const runTests = (client: PartialCloudflare<{ realtimeKit: { analytics: BaseAnalytics } }>) => {
  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getOrgAnalytics: only required params', async () => {
    const responsePromise = client.realtimeKit.analytics.getOrgAnalytics('app_id', {
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

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getOrgAnalytics: required and optional params', async () => {
    const response = await client.realtimeKit.analytics.getOrgAnalytics('app_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      end_date: '2022-09-22',
      start_date: '2022-09-01',
    });
  });
};
describe('resource analytics', () => runTests(client));
describe('resource analytics (tree shakable, base)', () => runTests(partialClient));
describe('resource analytics (tree shakable, subresource)', () => runTests(parentPartialClient));
