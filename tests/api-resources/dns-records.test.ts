// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey:
    'v1.0-144c9defac04969c7bfad8ef-631a41d003a32d25fe878081ef365c49503f7fada600da935e2851a1c7326084b85cbf6429c4b859de8475731dc92a9c329631e6d59e6c73da7b198497172b4cefe071d90d0f5d2719',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dnsRecords', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.dnsRecords.create('023e105f4ecef8ad9ca31a8372d0c353', {
      name: 'example.com',
      type: 'URI',
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
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.dnsRecords.create('023e105f4ecef8ad9ca31a8372d0c353', {
      name: 'example.com',
      type: 'URI',
      comment: 'Domain verification record',
      data: {
        flags: 'string',
        tag: 'issue',
        value: 'alpn="h3,h2" ipv4hint="127.0.0.1" ipv6hint="::1"',
        algorithm: 2,
        certificate: 'string',
        key_tag: 1,
        type: 1,
        protocol: 3,
        public_key: 'string',
        digest: 'string',
        digest_type: 1,
        priority: 1,
        target: '.',
        altitude: 0,
        lat_degrees: 37,
        lat_direction: 'N',
        lat_minutes: 46,
        lat_seconds: 46,
        long_degrees: 122,
        long_direction: 'W',
        long_minutes: 23,
        long_seconds: 35,
        precision_horz: 0,
        precision_vert: 0,
        size: 100,
        order: 100,
        preference: 10,
        regex: 'string',
        replacement: 'string',
        service: '_sip',
        matching_type: 1,
        selector: 0,
        usage: 0,
        name: 'example.com',
        port: 8806,
        proto: '_tcp',
        weight: 20,
        fingerprint: 'string',
        content: 'http://example.com/example.html',
      },
      meta: { auto_added: true, source: 'primary' },
      priority: 10,
      proxied: false,
      tags: ['owner:dns-team', 'owner:dns-team', 'owner:dns-team'],
      ttl: 3600,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.dnsRecords.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { name: 'example.com', type: 'URI' },
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
        name: 'example.com',
        type: 'URI',
        comment: 'Domain verification record',
        data: {
          flags: 'string',
          tag: 'issue',
          value: 'alpn="h3,h2" ipv4hint="127.0.0.1" ipv6hint="::1"',
          algorithm: 2,
          certificate: 'string',
          key_tag: 1,
          type: 1,
          protocol: 3,
          public_key: 'string',
          digest: 'string',
          digest_type: 1,
          priority: 1,
          target: '.',
          altitude: 0,
          lat_degrees: 37,
          lat_direction: 'N',
          lat_minutes: 46,
          lat_seconds: 46,
          long_degrees: 122,
          long_direction: 'W',
          long_minutes: 23,
          long_seconds: 35,
          precision_horz: 0,
          precision_vert: 0,
          size: 100,
          order: 100,
          preference: 10,
          regex: 'string',
          replacement: 'string',
          service: '_sip',
          matching_type: 1,
          selector: 0,
          usage: 0,
          name: 'example.com',
          port: 8806,
          proto: '_tcp',
          weight: 20,
          fingerprint: 'string',
          content: 'http://example.com/example.html',
        },
        meta: { auto_added: true, source: 'primary' },
        priority: 10,
        proxied: false,
        tags: ['owner:dns-team', 'owner:dns-team', 'owner:dns-team'],
        ttl: 3600,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = cloudflare.dnsRecords.list('023e105f4ecef8ad9ca31a8372d0c353');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.dnsRecords.list('023e105f4ecef8ad9ca31a8372d0c353', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.dnsRecords.list(
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
  test.skip('export', async () => {
    const responsePromise = cloudflare.dnsRecords.export('023e105f4ecef8ad9ca31a8372d0c353');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('export: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.dnsRecords.export('023e105f4ecef8ad9ca31a8372d0c353', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.dnsRecords.get(
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
  test.skip('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.dnsRecords.get('023e105f4ecef8ad9ca31a8372d0c353', '023e105f4ecef8ad9ca31a8372d0c353', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('import: only required params', async () => {
    const responsePromise = cloudflare.dnsRecords.import('023e105f4ecef8ad9ca31a8372d0c353', {
      file: 'www.example.com. 300 IN  A 127.0.0.1',
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
  test.skip('import: required and optional params', async () => {
    const response = await cloudflare.dnsRecords.import('023e105f4ecef8ad9ca31a8372d0c353', {
      file: 'www.example.com. 300 IN  A 127.0.0.1',
      proxied: 'true',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('scan', async () => {
    const responsePromise = cloudflare.dnsRecords.scan('023e105f4ecef8ad9ca31a8372d0c353');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
