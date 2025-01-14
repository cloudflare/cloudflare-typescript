// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource asn', () => {
  test('dayReport: only required params', async () => {
    const responsePromise = client.botnetFeed.asn.dayReport(0, {
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

  test('dayReport: required and optional params', async () => {
    const response = await client.botnetFeed.asn.dayReport(0, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      date: '2014-01-01T05:20:00.12345Z',
    });
  });

  test('fullReport: only required params', async () => {
    const responsePromise = client.botnetFeed.asn.fullReport(0, {
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

  test('fullReport: required and optional params', async () => {
    const response = await client.botnetFeed.asn.fullReport(0, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
