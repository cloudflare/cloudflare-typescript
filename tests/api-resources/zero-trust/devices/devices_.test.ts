// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource devices', () => {
  // TODO: investigate prism error for invalid security scheme used
  test.skip('list: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.devices.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate prism error for invalid security scheme used
  test.skip('list: required and optional params', async () => {
    const response = await client.zeroTrust.devices.devices.list({
      account_id: 'account_id',
      id: ['string'],
      active_registrations: 'include',
      cursor: 'cursor',
      include: 'include',
      last_seen_user: { email: 'email' },
      per_page: 0,
      search: 'search',
      seen_after: 'seen_after',
      seen_before: 'seen_before',
      sort_by: 'name',
      sort_order: 'asc',
    });
  });

  // TODO: investigate prism error for invalid security scheme used
  test.skip('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.devices.delete('device_id', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate prism error for invalid security scheme used
  test.skip('delete: required and optional params', async () => {
    const response = await client.zeroTrust.devices.devices.delete('device_id', { account_id: 'account_id' });
  });

  // TODO: investigate prism error for invalid security scheme used
  test.skip('get: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.devices.get('device_id', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate prism error for invalid security scheme used
  test.skip('get: required and optional params', async () => {
    const response = await client.zeroTrust.devices.devices.get('device_id', {
      account_id: 'account_id',
      include: 'include',
    });
  });

  // TODO: investigate prism error for invalid security scheme used
  test.skip('revoke: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.devices.revoke('device_id', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate prism error for invalid security scheme used
  test.skip('revoke: required and optional params', async () => {
    const response = await client.zeroTrust.devices.devices.revoke('device_id', { account_id: 'account_id' });
  });
});
