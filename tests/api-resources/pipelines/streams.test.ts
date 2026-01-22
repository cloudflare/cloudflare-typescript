// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource streams', () => {
  test('create: only required params', async () => {
    const responsePromise = client.pipelines.streams.create({
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
      name: 'my_stream',
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
    const response = await client.pipelines.streams.create({
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
      name: 'my_stream',
      format: {
        type: 'json',
        decimal_encoding: 'number',
        timestamp_format: 'rfc3339',
        unstructured: true,
      },
      http: {
        authentication: false,
        enabled: true,
        cors: { origins: ['string'] },
      },
      schema: {
        fields: [
          {
            type: 'int32',
            metadata_key: 'metadata_key',
            name: 'name',
            required: true,
            sql_name: 'sql_name',
          },
        ],
        format: {
          type: 'json',
          decimal_encoding: 'number',
          timestamp_format: 'rfc3339',
          unstructured: true,
        },
        inferred: true,
      },
      worker_binding: { enabled: true },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.pipelines.streams.update('033e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.pipelines.streams.update('033e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
      http: {
        authentication: false,
        enabled: true,
        cors: { origins: ['string'] },
      },
      worker_binding: { enabled: true },
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.pipelines.streams.list({ account_id: '0123105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.pipelines.streams.list({
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
      page: 0,
      per_page: 0,
      pipeline_id: '043e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.pipelines.streams.delete('033e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.pipelines.streams.delete('033e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
      force: 'force',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.pipelines.streams.get('033e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.pipelines.streams.get('033e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
