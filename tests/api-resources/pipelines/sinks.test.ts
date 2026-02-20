// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sinks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.pipelines.sinks.create({
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
      name: 'my_sink',
      type: 'r2',
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
    const response = await client.pipelines.sinks.create({
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
      name: 'my_sink',
      type: 'r2',
      config: {
        account_id: 'account_id',
        bucket: 'bucket',
        credentials: { access_key_id: 'access_key_id', secret_access_key: 'secret_access_key' },
        file_naming: {
          prefix: 'prefix',
          strategy: 'serial',
          suffix: 'suffix',
        },
        jurisdiction: 'jurisdiction',
        partitioning: { time_pattern: 'year=%Y/month=%m/day=%d/hour=%H' },
        path: 'path',
        rolling_policy: {
          file_size_bytes: 0,
          inactivity_seconds: 1,
          interval_seconds: 1,
        },
      },
      format: {
        type: 'json',
        decimal_encoding: 'number',
        timestamp_format: 'rfc3339',
        unstructured: true,
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
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.pipelines.sinks.list({ account_id: '0123105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.pipelines.sinks.list({
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
      page: 0,
      per_page: 0,
      pipeline_id: 'pipeline_id',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.pipelines.sinks.delete('0223105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await client.pipelines.sinks.delete('0223105f4ecef8ad9ca31a8372d0c353', {
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
      force: 'force',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.pipelines.sinks.get('0223105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await client.pipelines.sinks.get('0223105f4ecef8ad9ca31a8372d0c353', {
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
