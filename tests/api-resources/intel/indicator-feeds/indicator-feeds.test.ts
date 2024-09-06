// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource indicatorFeeds', () => {
  test('create: only required params', async () => {
    const responsePromise = client.intel.indicatorFeeds.create({
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

  test('create: required and optional params', async () => {
    const response = await client.intel.indicatorFeeds.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      description: 'example feed description',
      name: 'example_feed_1',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.intel.indicatorFeeds.update(12, {
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

  test('update: required and optional params', async () => {
    const response = await client.intel.indicatorFeeds.update(12, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      description: 'This is an example description',
      is_attributable: true,
      is_downloadable: true,
      is_public: true,
      name: 'indicator_list',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.intel.indicatorFeeds.list({
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

  test('list: required and optional params', async () => {
    const response = await client.intel.indicatorFeeds.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('data: only required params', async () => {
    const responsePromise = client.intel.indicatorFeeds.data(12, {
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

  test('data: required and optional params', async () => {
    const response = await client.intel.indicatorFeeds.data(12, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.intel.indicatorFeeds.get(12, {
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
    const response = await client.intel.indicatorFeeds.get(12, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
