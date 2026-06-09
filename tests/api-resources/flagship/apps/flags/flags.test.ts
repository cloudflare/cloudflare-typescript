// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource flags', () => {
  test('create: only required params', async () => {
    const responsePromise = client.flagship.apps.flags.create('app_id', {
      account_id: 'account_id',
      default_variation: 'x',
      enabled: true,
      key: 'x',
      rules: [
        {
          conditions: [
            {
              attribute: 'x',
              operator: 'equals',
              value: {},
            },
          ],
          priority: 1,
          serve_variation: 'x',
        },
      ],
      variations: { foo: 'string' },
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
    const response = await client.flagship.apps.flags.create('app_id', {
      account_id: 'account_id',
      default_variation: 'x',
      enabled: true,
      key: 'x',
      rules: [
        {
          conditions: [
            {
              attribute: 'x',
              operator: 'equals',
              value: {},
            },
          ],
          priority: 1,
          serve_variation: 'x',
          rollout: { percentage: 0, attribute: 'x' },
        },
      ],
      variations: { foo: 'string' },
      description: 'description',
      type: 'boolean',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.flagship.apps.flags.update('app_id', 'flag_key', {
      account_id: 'account_id',
      default_variation: 'x',
      enabled: true,
      key: 'x',
      rules: [
        {
          conditions: [
            {
              attribute: 'x',
              operator: 'equals',
              value: {},
            },
          ],
          priority: 1,
          serve_variation: 'x',
        },
      ],
      variations: { foo: 'string' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.flagship.apps.flags.update('app_id', 'flag_key', {
      account_id: 'account_id',
      default_variation: 'x',
      enabled: true,
      key: 'x',
      rules: [
        {
          conditions: [
            {
              attribute: 'x',
              operator: 'equals',
              value: {},
            },
          ],
          priority: 1,
          serve_variation: 'x',
          rollout: { percentage: 0, attribute: 'x' },
        },
      ],
      variations: { foo: 'string' },
      description: 'description',
      type: 'boolean',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.flagship.apps.flags.list('app_id', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.flagship.apps.flags.list('app_id', {
      account_id: 'account_id',
      cursor: 'cursor',
      limit: 'limit',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.flagship.apps.flags.delete('app_id', 'flag_key', {
      account_id: 'account_id',
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
    const response = await client.flagship.apps.flags.delete('app_id', 'flag_key', {
      account_id: 'account_id',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.flagship.apps.flags.get('app_id', 'flag_key', {
      account_id: 'account_id',
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
    const response = await client.flagship.apps.flags.get('app_id', 'flag_key', { account_id: 'account_id' });
  });
});
