// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource settings', () => {
  // TODO: investigate broken test
  test.skip('edit: only required params', async () => {
    const responsePromise = client.workersForPlatforms.dispatch.namespaces.scripts.settings.edit(
      'my-dispatch-namespace',
      'this-is_my_script-01',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
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
      'my-dispatch-namespace',
      'this-is_my_script-01',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        settings: {
          bindings: [{ type: 'kv_namespace' }, { type: 'kv_namespace' }, { type: 'kv_namespace' }],
          compatibility_date: '2022-04-05',
          compatibility_flags: [
            'formdata_parser_supports_files',
            'formdata_parser_supports_files',
            'formdata_parser_supports_files',
          ],
          limits: { cpu_ms: 50 },
          logpush: false,
          migrations: {
            deleted_classes: ['string', 'string', 'string'],
            new_classes: ['string', 'string', 'string'],
            new_sqlite_classes: ['string', 'string', 'string'],
            new_tag: 'v2',
            old_tag: 'v1',
            renamed_classes: [
              { from: 'from', to: 'to' },
              { from: 'from', to: 'to' },
              { from: 'from', to: 'to' },
            ],
            transferred_classes: [
              { from: 'from', from_script: 'from_script', to: 'to' },
              { from: 'from', from_script: 'from_script', to: 'to' },
              { from: 'from', from_script: 'from_script', to: 'to' },
            ],
          },
          observability: { enabled: true, head_sampling_rate: 0.1 },
          placement: { mode: 'smart' },
          tags: ['my-tag', 'my-tag', 'my-tag'],
          tail_consumers: [
            { service: 'my-log-consumer', environment: 'production', namespace: 'my-namespace' },
            { service: 'my-log-consumer', environment: 'production', namespace: 'my-namespace' },
            { service: 'my-log-consumer', environment: 'production', namespace: 'my-namespace' },
          ],
          usage_model: 'unbound',
        },
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.workersForPlatforms.dispatch.namespaces.scripts.settings.get(
      'my-dispatch-namespace',
      'this-is_my_script-01',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
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
      'my-dispatch-namespace',
      'this-is_my_script-01',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
