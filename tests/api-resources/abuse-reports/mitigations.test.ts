// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource mitigations', () => {
  // TODO: support api token auth scheme
  test.skip('list: only required params', async () => {
    const responsePromise = client.abuseReports.mitigations.list('report_id', {
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

  // TODO: support api token auth scheme
  test.skip('list: required and optional params', async () => {
    const response = await client.abuseReports.mitigations.list('report_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      effective_after: '2009-11-10T23:00:00Z',
      effective_before: '2009-11-10T23:00:00Z',
      entity_type: 'url_pattern',
      page: 0,
      per_page: 0,
      sort: 'type,asc',
      status: 'pending',
      type: 'legal_block',
    });
  });

  // TODO: support api token auth scheme
  test.skip('review: only required params', async () => {
    const responsePromise = client.abuseReports.mitigations.review('report_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      appeals: [{ id: 'id', reason: 'misclassified' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: support api token auth scheme
  test.skip('review: required and optional params', async () => {
    const response = await client.abuseReports.mitigations.review('report_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      appeals: [{ id: 'id', reason: 'misclassified' }],
    });
  });
});
