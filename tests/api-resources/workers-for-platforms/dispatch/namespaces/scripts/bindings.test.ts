// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseBindings } from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/bindings';
import { Scripts } from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts';

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
  resources: [BaseBindings],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Scripts],
});

const runTests = (
  client: PartialCloudflare<{
    workersForPlatforms: { dispatch: { namespaces: { scripts: { bindings: BaseBindings } } } };
  }>,
) => {
  test('get: only required params', async () => {
    const responsePromise = client.workersForPlatforms.dispatch.namespaces.scripts.bindings.get(
      'this-is_my_script-01',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', dispatch_namespace: 'my-dispatch-namespace' },
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
    const response = await client.workersForPlatforms.dispatch.namespaces.scripts.bindings.get(
      'this-is_my_script-01',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', dispatch_namespace: 'my-dispatch-namespace' },
    );
  });
};
describe('resource bindings', () => runTests(client));
describe('resource bindings (tree shakable, base)', () => runTests(partialClient));
describe('resource bindings (tree shakable, subresource)', () => runTests(parentPartialClient));
