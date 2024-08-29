// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auditLogs', () => {
  test('list: only required params', async () => {
    const responsePromise = client.auditLogs.list({ account_id: '023e105f4ecef8ad9ca31b8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.auditLogs.list({
      account_id: '023e105f4ecef8ad9ca31b8372d0c353',
      id: 'f174be97-19b1-40d6-954d-70cd5fbd52db',
      action: { type: 'add' },
      actor: { email: 'alice@example.com', ip: '17.168.228.63' },
      before: '2019-04-30T01:12:20Z',
      direction: 'desc',
      export: true,
      hide_user_logs: true,
      page: 50,
      per_page: 25,
      since: '2019-04-30T01:12:20Z',
      zone: { name: 'example.com' },
    });
  });
});
