// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource devices', () => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.devices.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
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

  test('delete: only required params', async () => {
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

  test('delete: required and optional params', async () => {
    const response = await client.zeroTrust.devices.devices.delete('device_id', { account_id: 'account_id' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.devices.get('device_id', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.devices.devices.get('device_id', { account_id: 'account_id' });
  });

  test('revoke: only required params', async () => {
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

  test('revoke: required and optional params', async () => {
    const response = await client.zeroTrust.devices.devices.revoke('device_id', { account_id: 'account_id' });
  });
});
