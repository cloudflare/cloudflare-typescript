// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseQueries } from 'cloudflare/resources/cloudforce-one/threat-events/queries';
import { ThreatEvents } from 'cloudflare/resources/cloudforce-one/threat-events/threat-events';

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
  resources: [ThreatEvents],
});

const runTests = (
  client: PartialCloudflare<{ cloudforceOne: { threatEvents: { queries: BaseQueries } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.queries.create({
      account_id: 'account_id',
      alert_enabled: true,
      alert_rollup_enabled: true,
      name: 'name',
      query_json: 'query_json',
      rule_enabled: true,
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
    const response = await client.cloudforceOne.threatEvents.queries.create({
      account_id: 'account_id',
      alert_enabled: true,
      alert_rollup_enabled: true,
      name: 'name',
      query_json: 'query_json',
      rule_enabled: true,
      rule_scope: 'rule_scope',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.queries.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.queries.list({ account_id: 'account_id' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.queries.delete(0, { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.queries.delete(0, { account_id: 'account_id' });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.queries.edit(0, { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.queries.edit(0, {
      account_id: 'account_id',
      alert_enabled: true,
      alert_rollup_enabled: true,
      name: 'name',
      query_json: 'query_json',
      rule_enabled: true,
      rule_scope: 'rule_scope',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.queries.get(0, { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.queries.get(0, { account_id: 'account_id' });
  });
};
describe('resource queries', () => runTests(client));
describe('resource queries (tree shakable, base)', () => runTests(partialClient));
describe('resource queries (tree shakable, subresource)', () => runTests(parentPartialClient));
