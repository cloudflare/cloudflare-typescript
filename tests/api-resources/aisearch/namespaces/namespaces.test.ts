// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource namespaces', () => {
  test('create: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.create({
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'name',
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
    const response = await client.aiSearch.namespaces.create({
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'name',
      description: 'Production environment',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.update('production', {
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

  test('update: required and optional params', async () => {
    const response = await client.aiSearch.namespaces.update('production', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      description: 'Production environment',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.list({
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
    const response = await client.aiSearch.namespaces.list({
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      page: 1,
      per_page: 20,
      search: 'prod',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.delete('production', {
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

  test('delete: required and optional params', async () => {
    const response = await client.aiSearch.namespaces.delete('production', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
    });
  });

  test('chatCompletions: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.chatCompletions('my-namespace', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      ai_search_options: { instance_ids: ['my-ai-search'] },
      messages: [{ content: 'string', role: 'system' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('chatCompletions: required and optional params', async () => {
    const response = await client.aiSearch.namespaces.chatCompletions('my-namespace', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      ai_search_options: {
        instance_ids: ['my-ai-search'],
        cache: { cache_threshold: 'super_strict_match', enabled: true },
        query_rewrite: {
          enabled: true,
          model: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
          rewrite_prompt: 'rewrite_prompt',
        },
        reranking: {
          enabled: true,
          match_threshold: 0,
          model: '@cf/baai/bge-reranker-base',
        },
        retrieval: {
          boost_by: [{ field: 'timestamp', direction: 'desc' }],
          context_expansion: 0,
          filters: { foo: 'bar' },
          fusion_method: 'max',
          keyword_match_mode: 'and',
          match_threshold: 0,
          max_num_results: 1,
          retrieval_type: 'vector',
          return_on_failure: true,
        },
      },
      messages: [{ content: 'string', role: 'system' }],
      model: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
      stream: true,
    });
  });

  test('read: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.read('production', {
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

  test('read: required and optional params', async () => {
    const response = await client.aiSearch.namespaces.read('production', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
    });
  });

  test('search: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.search('my-namespace', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      ai_search_options: { instance_ids: ['my-ai-search'] },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: required and optional params', async () => {
    const response = await client.aiSearch.namespaces.search('my-namespace', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      ai_search_options: {
        instance_ids: ['my-ai-search'],
        cache: { cache_threshold: 'super_strict_match', enabled: true },
        query_rewrite: {
          enabled: true,
          model: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
          rewrite_prompt: 'rewrite_prompt',
        },
        reranking: {
          enabled: true,
          match_threshold: 0,
          model: '@cf/baai/bge-reranker-base',
        },
        retrieval: {
          boost_by: [{ field: 'timestamp', direction: 'desc' }],
          context_expansion: 0,
          filters: { foo: 'bar' },
          fusion_method: 'max',
          keyword_match_mode: 'and',
          match_threshold: 0,
          max_num_results: 1,
          retrieval_type: 'vector',
          return_on_failure: true,
        },
      },
      messages: [{ content: 'string', role: 'system' }],
      query: 'x',
    });
  });
});
