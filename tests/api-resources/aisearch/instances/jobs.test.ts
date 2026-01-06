// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource jobs', () => {
  test('create: only required params', async () => {
    const responsePromise = client.aiSearch.instances.jobs.create('my-ai-search', {
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

  test('create: required and optional params', async () => {
    const response = await client.aiSearch.instances.jobs.create('my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.aiSearch.instances.jobs.list('my-ai-search', {
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
    const response = await client.aiSearch.instances.jobs.list('my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      page: 1,
      per_page: 0,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.aiSearch.instances.jobs.get('my-ai-search', 'job_id', {
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
    const response = await client.aiSearch.instances.jobs.get('my-ai-search', 'job_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
    });
  });

  test('logs: only required params', async () => {
    const responsePromise = client.aiSearch.instances.jobs.logs('my-ai-search', 'job_id', {
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

  test('logs: required and optional params', async () => {
    const response = await client.aiSearch.instances.jobs.logs('my-ai-search', 'job_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      page: 1,
      per_page: 0,
    });
  });
});
