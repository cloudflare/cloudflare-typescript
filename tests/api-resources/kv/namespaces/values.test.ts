// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource values', () => {
  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.kv.namespaces.values.update('0f2ac74b498b48028cb68387c421e279', 'My-Key', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      metadata: '{"someMetadataKey": "someMetadataValue"}',
      value: 'Some Value',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('update: required and optional params', async () => {
    const response = await client.kv.namespaces.values.update('0f2ac74b498b48028cb68387c421e279', 'My-Key', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      metadata: '{"someMetadataKey": "someMetadataValue"}',
      value: 'Some Value',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.kv.namespaces.values.delete('0f2ac74b498b48028cb68387c421e279', 'My-Key', {
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
    const response = await client.kv.namespaces.values.delete('0f2ac74b498b48028cb68387c421e279', 'My-Key', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // HTTP 406 from prism
  test.skip('get: required and optional params', async () => {
    const response = await client.kv.namespaces.values.get('0f2ac74b498b48028cb68387c421e279', 'My-Key', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
