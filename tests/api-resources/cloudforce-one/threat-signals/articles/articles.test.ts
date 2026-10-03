// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { ThreatSignals } from 'cloudflare/resources/cloudforce-one/threat-signals/threat-signals';
import { BaseArticles } from 'cloudflare/resources/cloudforce-one/threat-signals/articles/articles';

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
  resources: [BaseArticles],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ThreatSignals],
});

const runTests = (
  client: PartialCloudflare<{ cloudforceOne: { threatSignals: { articles: BaseArticles } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatSignals.articles.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.cloudforceOne.threatSignals.articles.list({
      account_id: 'account_id',
      article_id: ['550e8400-e29b-41d4-a716-446655440000', '660e8400-e29b-41d4-a716-446655440000'],
      cursor: 'x',
      feed_category: 'feed_category',
      feed_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      fetched_after: '2019-12-27T18:11:19.117Z',
      fetched_before: '2019-12-27T18:11:19.117Z',
      include_total: true,
      per_page: 1,
      published_after: '2019-12-27T18:11:19.117Z',
      published_before: '2019-12-27T18:11:19.117Z',
      read: true,
      search: 'x',
      sort: 'sort',
      source_type: 'curated',
      tag: 'tag',
      tag_applied_by: 'ai',
      tag_category: 'tag_category',
      tag_category_id: ['660e8400-e29b-41d4-a716-446655440000'],
      tag_id: ['550e8400-e29b-41d4-a716-446655440000'],
    });
  });

  test('bulkEdit: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatSignals.articles.bulkEdit({
      account_id: 'account_id',
      article_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      read: true,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkEdit: required and optional params', async () => {
    const response = await client.cloudforceOne.threatSignals.articles.bulkEdit({
      account_id: 'account_id',
      article_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      read: true,
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatSignals.articles.edit(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id', read: true },
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
    const response = await client.cloudforceOne.threatSignals.articles.edit(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id', read: true },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatSignals.articles.get(
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

  test('get: required and optional params', async () => {
    const response = await client.cloudforceOne.threatSignals.articles.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
  });
};
describe('resource articles', () => runTests(client));
describe('resource articles (tree shakable, base)', () => runTests(partialClient));
describe('resource articles (tree shakable, subresource)', () => runTests(parentPartialClient));
