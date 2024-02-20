// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'dev@cloudflare.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey: 'My User Service Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  // skipped: tests are disabled for the time being
  test.skip('create', async () => {
    const responsePromise = cloudflare.rulesets.rules.create(
      'string',
      'abf9b32d38c5f572afde3336ec0ce302',
      '2f2feab2026849078ba485f918791bdc',
      {},
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
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.rulesets.rules.update(
      '2f2feab2026849078ba485f918791bdc',
      '3a03d665bac047339bb530ecb439a90d',
      { account_id: 'abf9b32d38c5f572afde3336ec0ce302' },
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
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.rulesets.rules.update(
      '2f2feab2026849078ba485f918791bdc',
      '3a03d665bac047339bb530ecb439a90d',
      {
        account_id: 'abf9b32d38c5f572afde3336ec0ce302',
        id: '3a03d665bac047339bb530ecb439a90d',
        action: 'block',
        action_parameters: {
          response: {
            content: '{\n  "success": false,\n  "error": "you have been blocked"\n}',
            content_type: 'application/json',
            status_code: 400,
          },
        },
        description: 'Block when the IP address is not 1.1.1.1',
        enabled: true,
        expression: 'ip.src ne 1.1.1.1',
        logging: { enabled: true },
        ref: 'my_ref',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.rulesets.rules.delete(
      'string',
      'abf9b32d38c5f572afde3336ec0ce302',
      '2f2feab2026849078ba485f918791bdc',
      '3a03d665bac047339bb530ecb439a90d',
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
  test.skip('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.rulesets.rules.delete(
        'string',
        'abf9b32d38c5f572afde3336ec0ce302',
        '2f2feab2026849078ba485f918791bdc',
        '3a03d665bac047339bb530ecb439a90d',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
