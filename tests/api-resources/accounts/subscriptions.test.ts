// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.accounts.subscriptions.create({
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
    const response = await client.accounts.subscriptions.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      frequency: 'weekly',
      rate_plan: {
        id: 'free',
        currency: 'USD',
        externally_managed: false,
        is_contract: false,
        public_name: 'Business Plan',
        scope: 'zone',
        sets: ['string', 'string', 'string'],
      },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.accounts.subscriptions.update('506e3185e9c882d175a2d0cb0093d9f2', {
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
    const response = await client.accounts.subscriptions.update('506e3185e9c882d175a2d0cb0093d9f2', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      frequency: 'weekly',
      rate_plan: {
        id: 'free',
        currency: 'USD',
        externally_managed: false,
        is_contract: false,
        public_name: 'Business Plan',
        scope: 'zone',
        sets: ['string', 'string', 'string'],
      },
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.accounts.subscriptions.delete('506e3185e9c882d175a2d0cb0093d9f2', {
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

  test('delete: required and optional params', async () => {
    const response = await client.accounts.subscriptions.delete('506e3185e9c882d175a2d0cb0093d9f2', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.accounts.subscriptions.get({
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
    const response = await client.accounts.subscriptions.get({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
