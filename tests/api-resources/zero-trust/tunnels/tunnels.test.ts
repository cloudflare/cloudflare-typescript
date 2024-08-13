// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tunnels', () => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.tunnels.list({ account_id: '699d98642c564d2e855e9661899b7252' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.tunnels.list({
      account_id: '699d98642c564d2e855e9661899b7252',
      exclude_prefix: 'vpc1-',
      existed_at: '2019-10-12T07:20:50.52Z',
      include_prefix: 'vpc1-',
      is_deleted: true,
      name: 'blog',
      page: 1,
      per_page: 1,
      status: 'inactive',
      tun_types: 'cfd_tunnel,warp_connector',
      uuid: 'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      was_active_at: '2009-11-10T23:00:00Z',
      was_inactive_at: '2009-11-10T23:00:00Z',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.zeroTrust.tunnels.edit('f70ff985-a4ef-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.zeroTrust.tunnels.edit('f70ff985-a4ef-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
      name: 'blog',
      tunnel_secret: 'AQIDBAUGBwgBAgMEBQYHCAECAwQFBgcIAQIDBAUGBwg=',
    });
  });
});
