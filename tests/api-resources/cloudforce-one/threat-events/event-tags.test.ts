// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource eventTags', () => {
  // TODO: HTTP 401 from prism
  test.skip('create: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.eventTags.create('event_id', {
      account_id: 0,
      tags: ['botnet'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: HTTP 401 from prism
  test.skip('create: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.eventTags.create('event_id', {
      account_id: 0,
      tags: ['botnet'],
    });
  });

  // TODO: HTTP 401 from prism
  test.skip('delete: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.eventTags.delete('event_id', { account_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: HTTP 401 from prism
  test.skip('delete: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.eventTags.delete('event_id', { account_id: 0 });
  });
});
