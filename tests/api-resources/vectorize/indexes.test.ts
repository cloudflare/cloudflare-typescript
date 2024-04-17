// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource indexes', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.vectorize.indexes.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      config: { dimensions: 768, metric: 'cosine' },
      name: 'example-index',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.vectorize.indexes.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      config: { dimensions: 768, metric: 'cosine' },
      name: 'example-index',
      description: 'This is my example index.',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.vectorize.indexes.update('example-index', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      description: 'This is my example index.',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.vectorize.indexes.update('example-index', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      description: 'This is my example index.',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.vectorize.indexes.list({
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

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.vectorize.indexes.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.vectorize.indexes.delete('example-index', {
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

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.vectorize.indexes.delete('example-index', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteByIds: only required params', async () => {
    const responsePromise = cloudflare.vectorize.indexes.deleteByIds('example-index', {
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

  // skipped: tests are disabled for the time being
  test.skip('deleteByIds: required and optional params', async () => {
    const response = await cloudflare.vectorize.indexes.deleteByIds('example-index', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      ids: ['5121db81354a40c6aedc3fe1ace51c59', 'f90eb49c2107486abdfd78c67e853430'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.vectorize.indexes.get('example-index', {
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

  // skipped: tests are disabled for the time being
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.vectorize.indexes.get('example-index', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getByIds: only required params', async () => {
    const responsePromise = cloudflare.vectorize.indexes.getByIds('example-index', {
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

  // skipped: tests are disabled for the time being
  test.skip('getByIds: required and optional params', async () => {
    const response = await cloudflare.vectorize.indexes.getByIds('example-index', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      ids: ['5121db81354a40c6aedc3fe1ace51c59', 'f90eb49c2107486abdfd78c67e853430'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('insert: only required params', async () => {
    const responsePromise = cloudflare.vectorize.indexes.insert('example-index', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {},
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('insert: required and optional params', async () => {
    const response = await cloudflare.vectorize.indexes.insert('example-index', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {},
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('query: only required params', async () => {
    const responsePromise = cloudflare.vectorize.indexes.query('example-index', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      vector: [0.5, 0.5, 0.5],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('query: required and optional params', async () => {
    const response = await cloudflare.vectorize.indexes.query('example-index', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      vector: [0.5, 0.5, 0.5],
      filter: { has_viewed: { $ne: true }, streaming_platform: 'netflix' },
      returnMetadata: true,
      returnValues: true,
      topK: 5,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('upsert: only required params', async () => {
    const responsePromise = cloudflare.vectorize.indexes.upsert('example-index', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {},
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('upsert: required and optional params', async () => {
    const response = await cloudflare.vectorize.indexes.upsert('example-index', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {},
    });
  });
});
