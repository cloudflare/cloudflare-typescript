// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Scripts } from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts';
import { BaseSettings } from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/settings';

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
  resources: [BaseSettings],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Scripts],
});

const runTests = (
  client: PartialCloudflare<{
    workersForPlatforms: { dispatch: { namespaces: { scripts: { settings: BaseSettings } } } };
  }>,
) => {
  // TODO: investigate broken test
  test.skip('edit: only required params', async () => {
    const responsePromise = client.workersForPlatforms.dispatch.namespaces.scripts.settings.edit(
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

  // TODO: investigate broken test
  test.skip('edit: required and optional params', async () => {
    const response = await client.workersForPlatforms.dispatch.namespaces.scripts.settings.edit(
      'this-is_my_script-01',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        dispatch_namespace: 'my-dispatch-namespace',
        settings: {
          bindings: [
            {
              name: 'MY_ENV_VAR',
              text: 'my_data',
              type: 'plain_text',
            },
          ],
          cache_options: { enabled: true, cross_version_cache: true },
          compatibility_date: '2021-01-01',
          compatibility_flags: ['nodejs_compat'],
          exports: {
            Admin: {
              type: 'worker',
              cache: { enabled: true },
              state: 'created',
            },
            Counter: {
              storage: 'sqlite',
              type: 'durable-object',
              container: 'my-container',
              state: 'created',
            },
            OldCounter: {
              renamed_to: 'Counter',
              state: 'renamed',
              type: 'durable-object',
            },
            default: {
              type: 'worker',
              cache: { enabled: false },
              state: 'created',
            },
          },
          limits: { cpu_ms: 50, subrequests: 1000 },
          logpush: false,
          migrations: {
            deleted_classes: ['string'],
            new_classes: ['string'],
            new_sqlite_classes: ['string'],
            new_tag: 'v2',
            old_tag: 'v1',
            renamed_classes: [{ from: 'from', to: 'to' }],
            transferred_classes: [
              {
                from: 'from',
                from_script: 'from_script',
                to: 'to',
              },
            ],
          },
          observability: {
            enabled: true,
            head_sampling_rate: 0.1,
            logs: {
              enabled: true,
              invocation_logs: true,
              destinations: ['cloudflare'],
              head_sampling_rate: 0.1,
              persist: true,
            },
            traces: {
              destinations: ['cloudflare'],
              enabled: true,
              head_sampling_rate: 0.1,
              persist: true,
              propagation_policy: 'authenticated',
            },
          },
          placement: { mode: 'smart' },
          tags: ['my-team', 'my-public-api'],
          tail_consumers: [
            {
              service: 'my-log-consumer',
              environment: 'production',
              namespace: 'my-namespace',
            },
          ],
          usage_model: 'standard',
        },
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.workersForPlatforms.dispatch.namespaces.scripts.settings.get(
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
    const response = await client.workersForPlatforms.dispatch.namespaces.scripts.settings.get(
      'this-is_my_script-01',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', dispatch_namespace: 'my-dispatch-namespace' },
    );
  });
};
describe('resource settings', () => runTests(client));
describe('resource settings (tree shakable, base)', () => runTests(partialClient));
describe('resource settings (tree shakable, subresource)', () => runTests(parentPartialClient));
