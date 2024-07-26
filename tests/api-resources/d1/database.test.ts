// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource database', () => {
  test('create: only required params', async () => {
    const responsePromise = client.d1.database.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'my-database',
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
    const response = await client.d1.database.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'my-database',
      primary_location_hint: 'wnam',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.d1.database.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.d1.database.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'name',
      page: 1,
      per_page: 10,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.d1.database.delete('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', {
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
    const response = await client.d1.database.delete('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('export: only required params', async () => {
    const responsePromise = client.d1.database.export('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      output_format: 'polling',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('export: required and optional params', async () => {
    const response = await client.d1.database.export('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      output_format: 'polling',
      current_bookmark: 'current_bookmark',
      dump_options: { no_data: true, no_schema: true, tables: ['string', 'string', 'string'] },
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.d1.database.get('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', {
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
    const response = await client.d1.database.get('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('import: only required params', async () => {
    const responsePromise = client.d1.database.import('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      action: 'init',
      etag: 'etag',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('import: required and optional params', async () => {
    const response = await client.d1.database.import('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      action: 'init',
      etag: 'etag',
    });
  });

  test('query: only required params', async () => {
    const responsePromise = client.d1.database.query('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      sql: 'SELECT * FROM myTable WHERE field = ? OR field = ?;',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('query: required and optional params', async () => {
    const response = await client.d1.database.query('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      sql: 'SELECT * FROM myTable WHERE field = ? OR field = ?;',
      params: ['firstParam', 'secondParam'],
    });
  });

  test('raw: only required params', async () => {
    const responsePromise = client.d1.database.raw('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      sql: 'SELECT * FROM myTable WHERE field = ? OR field = ?;',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('raw: required and optional params', async () => {
    const response = await client.d1.database.raw('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      sql: 'SELECT * FROM myTable WHERE field = ? OR field = ?;',
      params: ['firstParam', 'secondParam'],
    });
  });
});
