// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Scripts } from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts';
import { BaseTags } from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/tags';

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
  resources: [BaseTags],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Scripts],
});

const runTests = (
  client: PartialCloudflare<{
    workersForPlatforms: { dispatch: { namespaces: { scripts: { tags: BaseTags } } } };
  }>,
) => {
  test('update: only required params', async () => {
    const responsePromise = client.workersForPlatforms.dispatch.namespaces.scripts.tags.update(
      'this-is_my_script-01',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        dispatch_namespace: 'my-dispatch-namespace',
        body: ['my-team', 'my-public-api'],
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.workersForPlatforms.dispatch.namespaces.scripts.tags.update(
      'this-is_my_script-01',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        dispatch_namespace: 'my-dispatch-namespace',
        body: ['my-team', 'my-public-api'],
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.workersForPlatforms.dispatch.namespaces.scripts.tags.list(
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

  test('list: required and optional params', async () => {
    const response = await client.workersForPlatforms.dispatch.namespaces.scripts.tags.list(
      'this-is_my_script-01',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', dispatch_namespace: 'my-dispatch-namespace' },
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.workersForPlatforms.dispatch.namespaces.scripts.tags.delete('my-tag', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      dispatch_namespace: 'my-dispatch-namespace',
      script_name: 'this-is_my_script-01',
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
    const response = await client.workersForPlatforms.dispatch.namespaces.scripts.tags.delete('my-tag', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      dispatch_namespace: 'my-dispatch-namespace',
      script_name: 'this-is_my_script-01',
    });
  });
};
describe('resource tags', () => runTests(client));
describe('resource tags (tree shakable, base)', () => runTests(partialClient));
describe('resource tags (tree shakable, subresource)', () => runTests(parentPartialClient));
