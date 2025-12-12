// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource items', () => {
  test('list: only required params', async () => {
    const responsePromise = client.aiSearch.instances.items.list('my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.aiSearch.instances.items.list('my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      page: 1,
      per_page: 0,
      search: 'search',
      status: 'queued',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.aiSearch.instances.items.get('my-ai-search', 'item_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
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
    const response = await client.aiSearch.instances.items.get('my-ai-search', 'item_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
    });
  });
});
