// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource updates', () => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.access.logs.scim.updates.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      idp_id: ['df7e2w5f-02b7-4d9d-af26-8d1988fca630', '0194ae2c-efcf-7cfb-8884-055f1a161fa5'],
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
    const response = await client.zeroTrust.access.logs.scim.updates.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      idp_id: ['df7e2w5f-02b7-4d9d-af26-8d1988fca630', '0194ae2c-efcf-7cfb-8884-055f1a161fa5'],
      cf_resource_id: 'bd97ef8d-7986-43e3-9ee0-c25dda33e4b0',
      direction: 'desc',
      idp_resource_id: 'idp_resource_id',
      limit: 10,
      page: 0,
      per_page: 0,
      request_method: ['DELETE', 'PATCH'],
      resource_group_name: 'ALL_EMPLOYEES',
      resource_type: ['USER', 'GROUP'],
      resource_user_email: 'john.smith@example.com',
      since: '2025-01-01T00:00:00Z',
      status: ['FAILURE', 'SUCCESS'],
      until: '2025-01-02T00:00:00Z',
    });
  });
});
