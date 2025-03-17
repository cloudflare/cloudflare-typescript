// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource insights', () => {
  test('create: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.insights.create('event_id', {
      account_id: 0,
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

  test('create: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.insights.create('event_id', {
      account_id: 0,
      content: 'Here is some additional context _in markdown_',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.insights.delete('event_id', 'insight_id', {
      account_id: 0,
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
    const response = await client.cloudforceOne.threatEvents.insights.delete('event_id', 'insight_id', {
      account_id: 0,
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.insights.edit('event_id', 'insight_id', {
      account_id: 0,
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

  test('edit: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.insights.edit('event_id', 'insight_id', {
      account_id: 0,
      content: 'Updated: Here is some additional context _in markdown_',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.insights.get('event_id', 'insight_id', {
      account_id: 0,
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
    const response = await client.cloudforceOne.threatEvents.insights.get('event_id', 'insight_id', {
      account_id: 0,
    });
  });
});
