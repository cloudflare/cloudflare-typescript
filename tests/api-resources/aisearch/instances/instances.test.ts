// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource instances', () => {
  test('create: only required params', async () => {
    const responsePromise = client.aiSearch.instances.create({
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      id: 'my-ai-search',
      source: 'source',
      token_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.aiSearch.instances.create({
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      id: 'my-ai-search',
      source: 'source',
      token_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      type: 'r2',
      ai_gateway_id: 'ai_gateway_id',
      ai_search_model: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
      chunk: true,
      chunk_overlap: 0,
      chunk_size: 64,
      embedding_model: '@cf/baai/bge-m3',
      hybrid_search_enabled: true,
      max_num_results: 1,
      metadata: { created_from_aisearch_wizard: true, worker_domain: 'worker_domain' },
      public_endpoint_params: {
        authorized_hosts: ['string'],
        chat_completions_endpoint: { disabled: true },
        enabled: true,
        mcp: { disabled: true },
        rate_limit: { period_ms: 60000, requests: 1, technique: 'fixed' },
        search_endpoint: { disabled: true },
      },
      reranking: true,
      reranking_model: '@cf/baai/bge-reranker-base',
      rewrite_model: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
      rewrite_query: true,
      score_threshold: 0,
      source_params: {
        exclude_items: ['/admin/*', '/private/**', '*\\temp\\*'],
        include_items: ['/blog/*', '/docs/**/*.html', '*\\blog\\*.html'],
        prefix: 'prefix',
        r2_jurisdiction: 'r2_jurisdiction',
        web_crawler: {
          parse_options: {
            include_headers: { foo: 'string' },
            include_images: true,
            use_browser_rendering: true,
          },
          parse_type: 'sitemap',
          store_options: { storage_id: 'storage_id', r2_jurisdiction: 'r2_jurisdiction', storage_type: 'r2' },
        },
      },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.aiSearch.instances.update('my-ai-search', {
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
    const response = await client.aiSearch.instances.update('my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      ai_gateway_id: 'ai_gateway_id',
      ai_search_model: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
      cache: true,
      cache_threshold: 'super_strict_match',
      chunk: true,
      chunk_overlap: 0,
      chunk_size: 64,
      embedding_model: '@cf/baai/bge-m3',
      hybrid_search_enabled: true,
      max_num_results: 1,
      metadata: { created_from_aisearch_wizard: true, worker_domain: 'worker_domain' },
      paused: true,
      public_endpoint_params: {
        authorized_hosts: ['string'],
        chat_completions_endpoint: { disabled: true },
        enabled: true,
        mcp: { disabled: true },
        rate_limit: { period_ms: 60000, requests: 1, technique: 'fixed' },
        search_endpoint: { disabled: true },
      },
      reranking: true,
      reranking_model: '@cf/baai/bge-reranker-base',
      rewrite_model: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
      rewrite_query: true,
      score_threshold: 0,
      source_params: {
        exclude_items: ['/admin/*', '/private/**', '*\\temp\\*'],
        include_items: ['/blog/*', '/docs/**/*.html', '*\\blog\\*.html'],
        prefix: 'prefix',
        r2_jurisdiction: 'r2_jurisdiction',
        web_crawler: {
          parse_options: {
            include_headers: { foo: 'string' },
            include_images: true,
            use_browser_rendering: true,
          },
          parse_type: 'sitemap',
          store_options: { storage_id: 'storage_id', r2_jurisdiction: 'r2_jurisdiction', storage_type: 'r2' },
        },
      },
      summarization: true,
      summarization_model: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
      system_prompt_ai_search: 'system_prompt_ai_search',
      system_prompt_index_summarization: 'system_prompt_index_summarization',
      system_prompt_rewrite_query: 'system_prompt_rewrite_query',
      token_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.aiSearch.instances.list({
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
    const response = await client.aiSearch.instances.list({
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      page: 1,
      per_page: 1,
      search: 'search',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.aiSearch.instances.delete('my-ai-search', {
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
    const response = await client.aiSearch.instances.delete('my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
    });
  });

  test('read: only required params', async () => {
    const responsePromise = client.aiSearch.instances.read('my-ai-search', {
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
    const response = await client.aiSearch.instances.read('my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
    });
  });

  test('stats: only required params', async () => {
    const responsePromise = client.aiSearch.instances.stats('my-ai-search', {
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

  test('stats: required and optional params', async () => {
    const response = await client.aiSearch.instances.stats('my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
    });
  });
});
