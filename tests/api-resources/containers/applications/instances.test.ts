// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Applications } from 'cloudflare/resources/containers/applications/applications';
import { BaseInstances } from 'cloudflare/resources/containers/applications/instances';

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
  resources: [BaseInstances],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Applications],
});

const runTests = (
  client: PartialCloudflare<{ containers: { applications: { instances: BaseInstances } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.containers.applications.instances.list('application_id', {
      account_id: 'account-123',
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
    const response = await client.containers.applications.instances.list('application_id', {
      account_id: 'account-123',
      name_prefix: 'name_prefix',
      page_token: 'page_token',
      per_page: 1,
      state: 'active',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.containers.applications.instances.get(
      'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      { account_id: 'account-123', application_id: 'application_id' },
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
    const response = await client.containers.applications.instances.get(
      'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      { account_id: 'account-123', application_id: 'application_id' },
    );
  });

  test('listV1: only required params', async () => {
    const responsePromise = client.containers.applications.instances.listV1('application_id', {
      account_id: 'account-123',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listV1: required and optional params', async () => {
    const response = await client.containers.applications.instances.listV1('application_id', {
      account_id: 'account-123',
      name_prefix: 'name_prefix',
      page_token: 'page_token',
      per_page: 1,
      state: 'active',
    });
  });
};
describe('resource instances', () => runTests(client));
describe('resource instances (tree shakable, base)', () => runTests(partialClient));
describe('resource instances (tree shakable, subresource)', () => runTests(parentPartialClient));
