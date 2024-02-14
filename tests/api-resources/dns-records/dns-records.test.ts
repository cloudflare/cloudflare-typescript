// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'dev@cloudflare.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey: 'My User Service Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dnsRecords', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = cloudflare.dnsRecords.retrieve(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.dnsRecords.retrieve('023e105f4ecef8ad9ca31a8372d0c353', '023e105f4ecef8ad9ca31a8372d0c353', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.dnsRecords.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { content: '198.51.100.4', name: 'example.com', type: 'A' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.dnsRecords.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        content: '198.51.100.4',
        name: 'example.com',
        type: 'A',
        comment: 'Domain verification record',
        proxied: false,
        tags: ['owner:dns-team', 'owner:dns-team', 'owner:dns-team'],
        ttl: 3600,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.dnsRecords.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('dnsRecordsForAZoneCreateDNSRecord: only required params', async () => {
    const responsePromise = cloudflare.dnsRecords.dnsRecordsForAZoneCreateDNSRecord(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { content: '198.51.100.4', name: 'example.com', type: 'A' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('dnsRecordsForAZoneCreateDNSRecord: required and optional params', async () => {
    const response = await cloudflare.dnsRecords.dnsRecordsForAZoneCreateDNSRecord(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        content: '198.51.100.4',
        name: 'example.com',
        type: 'A',
        comment: 'Domain verification record',
        proxied: false,
        tags: ['owner:dns-team', 'owner:dns-team', 'owner:dns-team'],
        ttl: 3600,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('dnsRecordsForAZoneListDNSRecords', async () => {
    const responsePromise = cloudflare.dnsRecords.dnsRecordsForAZoneListDNSRecords(
      '023e105f4ecef8ad9ca31a8372d0c353',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('dnsRecordsForAZoneListDNSRecords: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.dnsRecords.dnsRecordsForAZoneListDNSRecords('023e105f4ecef8ad9ca31a8372d0c353', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('dnsRecordsForAZoneListDNSRecords: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.dnsRecords.dnsRecordsForAZoneListDNSRecords(
        '023e105f4ecef8ad9ca31a8372d0c353',
        {
          comment: {
            present: 'string',
            absent: 'string',
            exact: 'Hello, world',
            contains: 'ello, worl',
            startswith: 'Hello, w',
            endswith: 'o, world',
          },
          content: '127.0.0.1',
          direction: 'asc',
          match: 'any',
          name: 'example.com',
          order: 'type',
          page: 1,
          per_page: 5,
          proxied: false,
          search: 'www.cloudflare.com',
          tag: {
            present: 'important',
            absent: 'important',
            exact: 'greeting:Hello, world',
            contains: 'greeting:ello, worl',
            startswith: 'greeting:Hello, w',
            endswith: 'greeting:o, world',
          },
          tag_match: 'any',
          type: 'A',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
