// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Workflows } from 'cloudflare/resources/workflows/workflows';
import { BaseInstances } from 'cloudflare/resources/workflows/instances/instances';

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
  resources: [Workflows],
});

const runTests = (client: PartialCloudflare<{ workflows: { instances: BaseInstances } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.workflows.instances.create('x', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.workflows.instances.create('x', {
      account_id: 'account_id',
      instance_id: 'instance_id',
      instance_retention: { error_retention: '5 minutes', success_retention: '5 minutes' },
      params: 'params',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.workflows.instances.list('x', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.workflows.instances.list('x', {
      account_id: 'account_id',
      cursor: 'cursor',
      date_end: '2019-12-27T18:11:19.117Z',
      date_start: '2019-12-27T18:11:19.117Z',
      direction: 'asc',
      page: 1,
      per_page: 1,
      status: 'queued',
    });
  });

  test('bulk: only required params', async () => {
    const responsePromise = client.workflows.instances.bulk('x', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulk: required and optional params', async () => {
    const response = await client.workflows.instances.bulk('x', {
      account_id: 'account_id',
      body: [
        {
          instance_id: 'instance_id',
          instance_retention: { error_retention: '5 minutes', success_retention: '5 minutes' },
          params: 'params',
        },
      ],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.workflows.instances.get('x', {
      account_id: 'account_id',
      workflow_name: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.workflows.instances.get('x', {
      account_id: 'account_id',
      workflow_name: 'x',
      order: 'asc',
      simple: 'true',
    });
  });

  test('step: only required params', async () => {
    const responsePromise = client.workflows.instances.step('x', {
      account_id: 'account_id',
      workflow_name: 'x',
      name: 'x',
      type: 'step',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('step: required and optional params', async () => {
    const response = await client.workflows.instances.step('x', {
      account_id: 'account_id',
      workflow_name: 'x',
      name: 'x',
      type: 'step',
      attempt: 1,
    });
  });
};
describe('resource instances', () => runTests(client));
describe('resource instances (tree shakable, base)', () => runTests(partialClient));
describe('resource instances (tree shakable, subresource)', () => runTests(parentPartialClient));
