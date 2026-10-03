// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseBasinCatalog } from 'cloudflare/resources/basin-catalog/basin-catalog';

import Cloudflare from 'cloudflare';
import { createClient, type PartialCloudflare } from 'cloudflare/tree-shakable';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseBasinCatalog],
});

const runTests = (client: PartialCloudflare<{ basinCatalog: BaseBasinCatalog }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.basinCatalog.list({ account_id: '0123456789abcdef0123456789abcdef' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.basinCatalog.list({ account_id: '0123456789abcdef0123456789abcdef' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.basinCatalog.delete('my-data-bucket', {
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

  test('delete: required and optional params', async () => {
    const response = await client.basinCatalog.delete('my-data-bucket', {
      account_id: '0123456789abcdef0123456789abcdef',
      force: true,
    });
  });

  test('disable: only required params', async () => {
    const responsePromise = client.basinCatalog.disable('my-data-bucket', {
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
    const response = await client.basinCatalog.disable('my-data-bucket', {
      account_id: '0123456789abcdef0123456789abcdef',
    });
  });

  test('enable: only required params', async () => {
    const responsePromise = client.basinCatalog.enable('my-data-bucket', {
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
    const response = await client.basinCatalog.enable('my-data-bucket', {
      account_id: '0123456789abcdef0123456789abcdef',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.basinCatalog.get('my-data-bucket', {
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
    const response = await client.basinCatalog.get('my-data-bucket', {
      account_id: '0123456789abcdef0123456789abcdef',
    });
  });
};
describe('resource basinCatalog', () => runTests(client));
describe('resource basinCatalog (tree shakable, base)', () => runTests(partialClient));
