// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource account', () => {
  // HTTP 422 from prism
  test.skip('edit: only required params', async () => {
    const responsePromise = client.dns.settings.account.edit({
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

  // HTTP 422 from prism
  test.skip('edit: required and optional params', async () => {
    const response = await client.dns.settings.account.edit({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      zone_defaults: {
        flatten_all_cnames: false,
        foundation_dns: false,
        internal_dns: { reference_zone_id: 'reference_zone_id' },
        multi_provider: false,
        nameservers: { type: 'cloudflare.standard' },
        ns_ttl: 86400,
        secondary_overrides: false,
        soa: {
          expire: 604800,
          min_ttl: 1800,
          mname: 'kristina.ns.cloudflare.com',
          refresh: 10000,
          retry: 2400,
          rname: 'admin.example.com',
          ttl: 3600,
        },
        zone_mode: 'dns_only',
      },
    });
  });

  // HTTP 422 from prism
  test.skip('get: only required params', async () => {
    const responsePromise = client.dns.settings.account.get({
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

  // HTTP 422 from prism
  test.skip('get: required and optional params', async () => {
    const response = await client.dns.settings.account.get({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
