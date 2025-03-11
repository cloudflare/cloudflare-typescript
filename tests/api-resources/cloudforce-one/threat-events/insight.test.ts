// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource insight', () => {
  test('update: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.insight.update(0, 'eventId', 'insightId', {
      content: 'Updated: Here is some additional context _in markdown_',
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
    const response = await client.cloudforceOne.threatEvents.insight.update(0, 'eventId', 'insightId', {
      content: 'Updated: Here is some additional context _in markdown_',
    });
  });

  test('delete', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.insight.delete(0, 'eventId', 'insightId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cloudforceOne.threatEvents.insight.delete(0, 'eventId', 'insightId', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('creat: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.insight.creat(0, 'eventId', {
      content: 'Here is some additional context _in markdown_',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('creat: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.insight.creat(0, 'eventId', {
      content: 'Here is some additional context _in markdown_',
    });
  });

  test('get', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.insight.get(0, 'eventId', 'insightId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cloudforceOne.threatEvents.insight.get(0, 'eventId', 'insightId', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
