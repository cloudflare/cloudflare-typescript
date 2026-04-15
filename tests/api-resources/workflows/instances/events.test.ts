// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseEvents } from 'cloudflare/resources/workflows/instances/events';
import { Instances } from 'cloudflare/resources/workflows/instances/instances';

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
  resources: [BaseEvents],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Instances],
});

const runTests = (client: PartialCloudflare<{ workflows: { instances: { events: BaseEvents } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.workflows.instances.events.create('x', {
      account_id: 'account_id',
      workflow_name: 'x',
      instance_id: 'x',
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
    const response = await client.workflows.instances.events.create('x', {
      account_id: 'account_id',
      workflow_name: 'x',
      instance_id: 'x',
      body: {},
    });
  });
};
describe('resource events', () => runTests(client));
describe('resource events (tree shakable, base)', () => runTests(partialClient));
describe('resource events (tree shakable, subresource)', () => runTests(parentPartialClient));
