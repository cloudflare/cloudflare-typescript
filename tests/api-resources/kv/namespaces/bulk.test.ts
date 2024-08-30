// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bulk', () => {
  test('update: only required params', async () => {
    const responsePromise = client.kv.namespaces.bulk.update('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [{}, {}, {}],
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
    const response = await client.kv.namespaces.bulk.update('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [
        {
          base64: true,
          expiration: 1578435000,
          expiration_ttl: 300,
          key: 'My-Key',
          metadata: { someMetadataKey: 'bar' },
          value: 'Some string',
        },
        {
          base64: true,
          expiration: 1578435000,
          expiration_ttl: 300,
          key: 'My-Key',
          metadata: { someMetadataKey: 'bar' },
          value: 'Some string',
        },
        {
          base64: true,
          expiration: 1578435000,
          expiration_ttl: 300,
          key: 'My-Key',
          metadata: { someMetadataKey: 'bar' },
          value: 'Some string',
        },
      ],
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.kv.namespaces.bulk.delete('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.kv.namespaces.bulk.delete('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
