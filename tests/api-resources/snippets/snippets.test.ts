// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource snippets', () => {
  // throwing HTTP 415
  test.skip('update: only required params', async () => {
    const responsePromise = client.snippets.update('my_snippet', {
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
      metadata: { main_module: 'main.js' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // throwing HTTP 415
  test.skip('update: required and optional params', async () => {
    const response = await client.snippets.update('my_snippet', {
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
      metadata: { main_module: 'main.js' },
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.snippets.list({ zone_id: '9f1839b6152d298aca64c4e906b6d074' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.snippets.list({
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
      page: 1,
      per_page: 25,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.snippets.delete('my_snippet', {
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
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
    const response = await client.snippets.delete('my_snippet', {
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.snippets.get('my_snippet', {
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
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
    const response = await client.snippets.get('my_snippet', { zone_id: '9f1839b6152d298aca64c4e906b6d074' });
  });
});
