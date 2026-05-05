// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Instances } from 'cloudflare/resources/workflows/instances/instances';
import { BaseStatus } from 'cloudflare/resources/workflows/instances/status';

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
  resources: [BaseStatus],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Instances],
});

const runTests = (client: PartialCloudflare<{ workflows: { instances: { status: BaseStatus } } }>) => {
  test('edit: only required params', async () => {
    const responsePromise = client.workflows.instances.status.edit('x', {
      account_id: 'account_id',
      workflow_name: 'x',
      status: 'resume',
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
    const response = await client.workflows.instances.status.edit('x', {
      account_id: 'account_id',
      workflow_name: 'x',
      status: 'resume',
      from: {
        name: 'x',
        count: 1,
        type: 'do',
      },
    });
  });
};
describe('resource status', () => runTests(client));
describe('resource status (tree shakable, base)', () => runTests(partialClient));
describe('resource status (tree shakable, subresource)', () => runTests(parentPartialClient));
