// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Scripts } from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts';
import { BaseSecrets } from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets';

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
  resources: [BaseSecrets],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Scripts],
});

const runTests = (
  client: PartialCloudflare<{
    workersForPlatforms: { dispatch: { namespaces: { scripts: { secrets: BaseSecrets } } } };
  }>,
) => {
  test('update: only required params', async () => {
    const responsePromise = client.workersForPlatforms.dispatch.namespaces.scripts.secrets.update(
      'this-is_my_script-01',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        dispatch_namespace: 'my-dispatch-namespace',
        name: 'myBinding',
        text: 'My secret.',
        type: 'secret_text',
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
    const response = await client.workersForPlatforms.dispatch.namespaces.scripts.secrets.update(
      'this-is_my_script-01',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        dispatch_namespace: 'my-dispatch-namespace',
        name: 'myBinding',
        text: 'My secret.',
        type: 'secret_text',
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.workersForPlatforms.dispatch.namespaces.scripts.secrets.list(
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
    const response = await client.workersForPlatforms.dispatch.namespaces.scripts.secrets.list(
      'this-is_my_script-01',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', dispatch_namespace: 'my-dispatch-namespace' },
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.workersForPlatforms.dispatch.namespaces.scripts.secrets.delete(
      'mySecret',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        dispatch_namespace: 'my-dispatch-namespace',
        script_name: 'this-is_my_script-01',
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

  test('delete: required and optional params', async () => {
    const response = await client.workersForPlatforms.dispatch.namespaces.scripts.secrets.delete('mySecret', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      dispatch_namespace: 'my-dispatch-namespace',
      script_name: 'this-is_my_script-01',
      url_encoded: true,
    });
  });

  test('bulkUpdate: only required params', async () => {
    const responsePromise = client.workersForPlatforms.dispatch.namespaces.scripts.secrets.bulkUpdate(
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

  test('bulkUpdate: required and optional params', async () => {
    const response = await client.workersForPlatforms.dispatch.namespaces.scripts.secrets.bulkUpdate(
      'this-is_my_script-01',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        dispatch_namespace: 'my-dispatch-namespace',
        secrets: {
          foo: {
            name: 'myBinding',
            text: 'My secret.',
            type: 'secret_text',
          },
        },
        version_tags: { foo: 'bar' },
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.workersForPlatforms.dispatch.namespaces.scripts.secrets.get('mySecret', {
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

  test('get: required and optional params', async () => {
    const response = await client.workersForPlatforms.dispatch.namespaces.scripts.secrets.get('mySecret', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      dispatch_namespace: 'my-dispatch-namespace',
      script_name: 'this-is_my_script-01',
      url_encoded: true,
    });
  });
};
describe('resource secrets', () => runTests(client));
describe('resource secrets (tree shakable, base)', () => runTests(partialClient));
describe('resource secrets (tree shakable, subresource)', () => runTests(parentPartialClient));
