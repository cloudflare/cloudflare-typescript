// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource timeTravel', () => {
  test('getBookmark: only required params', async () => {
    const responsePromise = client.d1.database.timeTravel.getBookmark(
      'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
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

  test('getBookmark: required and optional params', async () => {
    const response = await client.d1.database.timeTravel.getBookmark('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      timestamp: '2024-01-15T12:00:00Z',
    });
  });

  test('restore: only required params', async () => {
    const responsePromise = client.d1.database.timeTravel.restore('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', {
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

  test('restore: required and optional params', async () => {
    const response = await client.d1.database.timeTravel.restore('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      bookmark: '00000001-00000002-00004e2f-0a83ea2fceebc654de0640c422be4653',
      timestamp: '2024-01-15T12:00:00Z',
    });
  });
});
