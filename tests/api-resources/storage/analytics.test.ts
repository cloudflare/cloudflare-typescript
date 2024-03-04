// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource analytics', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.storage.analytics.list({
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

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.storage.analytics.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      query: {
        dimensions: ['accountId', 'responseCode', 'requestType'],
        filters: 'requestType==read AND responseCode!=200',
        limit: 0,
        metrics: ['requests', 'writeKiB', 'readKiB'],
        since: '2019-01-02T02:20:00Z',
        sort: ['+requests', '-responseCode'],
        until: '2019-01-02T03:20:00Z',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('stored: only required params', async () => {
    const responsePromise = cloudflare.storage.analytics.stored({
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

  // skipped: tests are disabled for the time being
  test.skip('stored: required and optional params', async () => {
    const response = await cloudflare.storage.analytics.stored({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      query: {
        dimensions: ['namespaceId'],
        filters: 'namespaceId==a4e8cbb7-1b58-4990-925e-e026d40c4c64',
        limit: 0,
        metrics: ['storedBytes', 'storedKeys'],
        since: '2019-01-02T02:20:00Z',
        sort: ['+storedBytes', '-namespaceId'],
        until: '2019-01-02T03:20:00Z',
      },
    });
  });
});
