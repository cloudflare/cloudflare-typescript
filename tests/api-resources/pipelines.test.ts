// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pipelines', () => {
  test('create: only required params', async () => {
    const responsePromise = client.pipelines.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      destination: {
        batch: {},
        compression: {},
        credentials: {
          access_key_id: '<access key id>',
          endpoint: 'https://123f8a8258064ed892a347f173372359.r2.cloudflarestorage.com',
          secret_access_key: '<secret key>',
        },
        format: 'json',
        path: { bucket: 'bucket' },
        type: 'r2',
      },
      name: 'sample_pipeline',
      source: [{ format: 'json', type: 'type' }],
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
    const response = await client.pipelines.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      destination: {
        batch: { max_bytes: 1000, max_duration_s: 0.25, max_rows: 100 },
        compression: { type: 'gzip' },
        credentials: {
          access_key_id: '<access key id>',
          endpoint: 'https://123f8a8258064ed892a347f173372359.r2.cloudflarestorage.com',
          secret_access_key: '<secret key>',
        },
        format: 'json',
        path: {
          bucket: 'bucket',
          filename: '${slug}${extension}',
          filepath: '${date}/${hour}',
          prefix: 'base',
        },
        type: 'r2',
      },
      name: 'sample_pipeline',
      source: [{ format: 'json', type: 'type', authentication: true, cors: { origins: ['*'] } }],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.pipelines.update('sample_pipeline', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      destination: { batch: {}, compression: {}, format: 'json', path: { bucket: 'bucket' }, type: 'r2' },
      name: 'sample_pipeline',
      source: [{ format: 'json', type: 'type' }],
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
    const response = await client.pipelines.update('sample_pipeline', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      destination: {
        batch: { max_bytes: 1000, max_duration_s: 0.25, max_rows: 100 },
        compression: { type: 'gzip' },
        format: 'json',
        path: {
          bucket: 'bucket',
          filename: '${slug}${extension}',
          filepath: '${date}/${hour}',
          prefix: 'base',
        },
        type: 'r2',
        credentials: {
          access_key_id: '<access key id>',
          endpoint: 'https://123f8a8258064ed892a347f173372359.r2.cloudflarestorage.com',
          secret_access_key: '<secret key>',
        },
      },
      name: 'sample_pipeline',
      source: [{ format: 'json', type: 'type', authentication: true, cors: { origins: ['*'] } }],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.pipelines.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.pipelines.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 'page',
      per_page: 'per_page',
      search: 'search',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.pipelines.delete('sample_pipeline', {
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
    const response = await client.pipelines.delete('sample_pipeline', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.pipelines.get('sample_pipeline', {
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

  test('get: required and optional params', async () => {
    const response = await client.pipelines.get('sample_pipeline', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
