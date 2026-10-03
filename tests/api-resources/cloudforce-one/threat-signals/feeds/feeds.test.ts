// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { ThreatSignals } from 'cloudflare/resources/cloudforce-one/threat-signals/threat-signals';
import { BaseFeeds } from 'cloudflare/resources/cloudforce-one/threat-signals/feeds/feeds';

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
  resources: [BaseFeeds],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ThreatSignals],
});

const runTests = (client: PartialCloudflare<{ cloudforceOne: { threatSignals: { feeds: BaseFeeds } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatSignals.feeds.create({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.cloudforceOne.threatSignals.feeds.create({
      account_id: 'account_id',
      category_id: 'b12a0fd6-f7b9-5393-9ef3-f888d506c550',
      curated_feed_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      display_name: 'display_name',
      enabled: true,
      poll_interval_s: 60,
      title: 'title',
      url: 'https://example.com',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatSignals.feeds.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.cloudforceOne.threatSignals.feeds.list({
      account_id: 'account_id',
      category: 'category',
      enabled: true,
      limit: 1,
      page: 1,
      per_page: 1,
      sort: 'sort',
      source_type: 'curated',
      status: 'status',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatSignals.feeds.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.cloudforceOne.threatSignals.feeds.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
  });

  test('edit: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatSignals.feeds.edit(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.cloudforceOne.threatSignals.feeds.edit(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'account_id',
        category_id: 'b12a0fd6-f7b9-5393-9ef3-f888d506c550',
        display_name: 'display_name',
        enabled: true,
        poll_interval_s: 60,
        title: 'title',
      },
    );
  });

  test('poll: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatSignals.feeds.poll({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('poll: required and optional params', async () => {
    const response = await client.cloudforceOne.threatSignals.feeds.poll({
      account_id: 'account_id',
      feed_id: 'all',
    });
  });
};
describe('resource feeds', () => runTests(client));
describe('resource feeds (tree shakable, base)', () => runTests(partialClient));
describe('resource feeds (tree shakable, subresource)', () => runTests(parentPartialClient));
