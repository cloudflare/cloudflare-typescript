// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subnets', () => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.networks.subnets.list({
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

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.networks.subnets.list({
      account_id: '699d98642c564d2e855e9661899b7252',
      address_family: 'v4',
      comment: 'example%20comment',
      existed_at: '2019-10-12T07%3A20%3A50.52Z',
      is_default_network: true,
      is_deleted: true,
      name: 'IPv4%20Cloudflare%20Source%20IPs',
      network: '172.16.0.0%2F16',
      page: 1,
      per_page: 1,
      sort_order: 'asc',
      subnet_types: 'cloudflare_source',
    });
  });
});
