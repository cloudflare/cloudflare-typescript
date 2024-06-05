// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dnsSettings', () => {
  test('edit: only required params', async () => {
    const responsePromise = cloudflare.zones.dnsSettings.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await cloudflare.zones.dnsSettings.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      foundation_dns: false,
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
    });
  });

  test('get: only required params', async () => {
    const responsePromise = cloudflare.zones.dnsSettings.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await cloudflare.zones.dnsSettings.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
