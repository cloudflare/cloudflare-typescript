// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Alerting } from 'cloudflare/resources/alerting/alerting';
import { BaseHistoryResource } from 'cloudflare/resources/alerting/history';

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
  resources: [BaseHistoryResource],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Alerting],
});

const runTests = (client: PartialCloudflare<{ alerting: { history: BaseHistoryResource } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.alerting.history.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.alerting.history.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      before: '2022-05-20T20:29:58.679897Z',
      page: 1,
      per_page: 5,
      since: '2022-05-19T20:29:58.679897Z',
    });
  });
};
describe('resource history', () => runTests(client));
describe('resource history (tree shakable, base)', () => runTests(partialClient));
describe('resource history (tree shakable, subresource)', () => runTests(parentPartialClient));
