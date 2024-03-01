// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey:
    'v1.0-144c9defac04969c7bfad8ef-631a41d003a32d25fe878081ef365c49503f7fada600da935e2851a1c7326084b85cbf6429c4b859de8475731dc92a9c329631e6d59e6c73da7b198497172b4cefe071d90d0f5d2719',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource settings', () => {
  // skipped: tests are disabled for the time being
  test.skip('edit: only required params', async () => {
    const responsePromise = cloudflare.workersForPlatforms.dispatch.namespaces.scripts.content.settings.edit(
      'my-dispatch-namespace',
      'this-is_my_script-01',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        errors: [
          { code: 1000, message: 'string' },
          { code: 1000, message: 'string' },
          { code: 1000, message: 'string' },
        ],
        messages: [
          { code: 1000, message: 'string' },
          { code: 1000, message: 'string' },
          { code: 1000, message: 'string' },
        ],
        result: {},
        success: true,
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

  // skipped: tests are disabled for the time being
  test.skip('edit: required and optional params', async () => {
    const response = await cloudflare.workersForPlatforms.dispatch.namespaces.scripts.content.settings.edit(
      'my-dispatch-namespace',
      'this-is_my_script-01',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        errors: [
          { code: 1000, message: 'string' },
          { code: 1000, message: 'string' },
          { code: 1000, message: 'string' },
        ],
        messages: [
          { code: 1000, message: 'string' },
          { code: 1000, message: 'string' },
          { code: 1000, message: 'string' },
        ],
        result: {
          bindings: [{ type: 'kv_namespace' }, { type: 'kv_namespace' }, { type: 'kv_namespace' }],
          compatibility_date: '2022-04-05',
          compatibility_flags: [
            'formdata_parser_supports_files',
            'formdata_parser_supports_files',
            'formdata_parser_supports_files',
          ],
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
        success: true,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.workersForPlatforms.dispatch.namespaces.scripts.content.settings.get(
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
    const response = await cloudflare.workersForPlatforms.dispatch.namespaces.scripts.content.settings.get(
      'my-dispatch-namespace',
      'this-is_my_script-01',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
