// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCategories } from 'cloudflare/resources/cloudforce-one/threat-events/tags/categories';
import { Tags } from 'cloudflare/resources/cloudforce-one/threat-events/tags/tags';

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
  resources: [BaseCategories],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Tags],
});

const runTests = (
  client: PartialCloudflare<{ cloudforceOne: { threatEvents: { tags: { categories: BaseCategories } } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.tags.categories.create({
      account_id: 'account_id',
      name: 'Actor',
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
    const response = await client.cloudforceOne.threatEvents.tags.categories.create({
      account_id: 'account_id',
      name: 'Actor',
      description: 'description',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.tags.categories.list({
      account_id: 'account_id',
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
    const response = await client.cloudforceOne.threatEvents.tags.categories.list({
      account_id: 'account_id',
      search: 'search',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.tags.categories.delete('category_uuid', {
      account_id: 'account_id',
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
    const response = await client.cloudforceOne.threatEvents.tags.categories.delete('category_uuid', {
      account_id: 'account_id',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.tags.categories.edit('category_uuid', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.tags.categories.edit('category_uuid', {
      account_id: 'account_id',
      description: 'description',
      name: 'name',
    });
  });
};
describe('resource categories', () => runTests(client));
describe('resource categories (tree shakable, base)', () => runTests(partialClient));
describe('resource categories (tree shakable, subresource)', () => runTests(parentPartialClient));
