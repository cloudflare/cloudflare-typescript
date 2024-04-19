// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource settings', () => {
  // skipped: tests are disabled for the time being
  test.skip('edit: only required params', async () => {
    const responsePromise = cloudflare.workersForPlatforms.dispatch.namespaces.scripts.settings.edit(
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

  // skipped: tests are disabled for the time being
  test.skip('edit: required and optional params', async () => {
    const response = await cloudflare.workersForPlatforms.dispatch.namespaces.scripts.settings.edit(
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
            new_tag: 'v2',
            old_tag: 'v1',
            deleted_classes: ['string', 'string', 'string'],
            new_classes: ['string', 'string', 'string'],
            renamed_classes: [
              { from: 'string', to: 'string' },
              { from: 'string', to: 'string' },
              { from: 'string', to: 'string' },
            ],
            transferred_classes: [
              { from: 'string', from_script: 'string', to: 'string' },
              { from: 'string', from_script: 'string', to: 'string' },
              { from: 'string', from_script: 'string', to: 'string' },
            ],
          },
          placement: { mode: 'smart' },
          tags: ['my-tag', 'my-tag', 'my-tag'],
          tail_consumers: [
            { environment: 'production', namespace: 'my-namespace', service: 'my-log-consumer' },
            { environment: 'production', namespace: 'my-namespace', service: 'my-log-consumer' },
            { environment: 'production', namespace: 'my-namespace', service: 'my-log-consumer' },
          ],
          usage_model: 'unbound',
        },
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.workersForPlatforms.dispatch.namespaces.scripts.settings.get(
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

  // skipped: tests are disabled for the time being
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.workersForPlatforms.dispatch.namespaces.scripts.settings.get(
      'my-dispatch-namespace',
      'this-is_my_script-01',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
