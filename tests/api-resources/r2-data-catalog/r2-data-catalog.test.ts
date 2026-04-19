// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource r2DataCatalog', () => {
  test('list: only required params', async () => {
    const responsePromise = client.r2DataCatalog.list({ account_id: '0123456789abcdef0123456789abcdef' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.r2DataCatalog.list({ account_id: '0123456789abcdef0123456789abcdef' });
  });

  test('disable: only required params', async () => {
    const responsePromise = client.r2DataCatalog.disable('my-data-bucket', {
      account_id: '0123456789abcdef0123456789abcdef',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('disable: required and optional params', async () => {
    const response = await client.r2DataCatalog.disable('my-data-bucket', {
      account_id: '0123456789abcdef0123456789abcdef',
    });
  });

  test('enable: only required params', async () => {
    const responsePromise = client.r2DataCatalog.enable('my-data-bucket', {
      account_id: '0123456789abcdef0123456789abcdef',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enable: required and optional params', async () => {
    const response = await client.r2DataCatalog.enable('my-data-bucket', {
      account_id: '0123456789abcdef0123456789abcdef',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.r2DataCatalog.get('my-data-bucket', {
      account_id: '0123456789abcdef0123456789abcdef',
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
    const response = await client.r2DataCatalog.get('my-data-bucket', {
      account_id: '0123456789abcdef0123456789abcdef',
    });
  });
});
