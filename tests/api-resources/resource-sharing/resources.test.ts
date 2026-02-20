// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource resources', () => {
  test('create: only required params', async () => {
    const responsePromise = client.resourceSharing.resources.create('3fd85f74b32742f1bff64a85009dda07', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      meta: {},
      resource_account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      resource_id: '023e105f4ecef8ad9ca31a8372d0c353',
      resource_type: 'custom-ruleset',
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
    const response = await client.resourceSharing.resources.create('3fd85f74b32742f1bff64a85009dda07', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      meta: {},
      resource_account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      resource_id: '023e105f4ecef8ad9ca31a8372d0c353',
      resource_type: 'custom-ruleset',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.resourceSharing.resources.update(
      '3fd85f74b32742f1bff64a85009dda07',
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        meta: {},
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.resourceSharing.resources.update(
      '3fd85f74b32742f1bff64a85009dda07',
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        meta: {},
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.resourceSharing.resources.list('3fd85f74b32742f1bff64a85009dda07', {
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
    const response = await client.resourceSharing.resources.list('3fd85f74b32742f1bff64a85009dda07', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 2,
      per_page: 20,
      resource_type: 'custom-ruleset',
      status: 'active',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.resourceSharing.resources.delete(
      '3fd85f74b32742f1bff64a85009dda07',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.resourceSharing.resources.delete(
      '3fd85f74b32742f1bff64a85009dda07',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.resourceSharing.resources.get(
      '3fd85f74b32742f1bff64a85009dda07',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.resourceSharing.resources.get(
      '3fd85f74b32742f1bff64a85009dda07',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
