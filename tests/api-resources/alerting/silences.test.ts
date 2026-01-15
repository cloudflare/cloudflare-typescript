// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource silences', () => {
  test('create: only required params', async () => {
    const responsePromise = client.alerting.silences.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [{}],
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
    const response = await client.alerting.silences.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [
        {
          end_time: '2022-01-01T00:00:00Z',
          policy_id: '0da2b59ef118439d8097bdfb215203c9',
          start_time: '2022-01-01T00:00:00Z',
        },
      ],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.alerting.silences.update({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [{}],
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
    const response = await client.alerting.silences.update({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [
        {
          id: 'f878e90c23f44126ae3cfc399f646977',
          end_time: '2022-01-01T00:00:00Z',
          start_time: '2022-01-01T00:00:00Z',
        },
      ],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.alerting.silences.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.alerting.silences.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.alerting.silences.delete('f878e90c23f44126ae3cfc399f646977', {
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
    const response = await client.alerting.silences.delete('f878e90c23f44126ae3cfc399f646977', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.alerting.silences.get('f878e90c23f44126ae3cfc399f646977', {
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
    const response = await client.alerting.silences.get('f878e90c23f44126ae3cfc399f646977', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
