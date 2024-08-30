// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource firewall', () => {
  test('create: only required params', async () => {
    const responsePromise = client.dns.firewall.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'My Awesome DNS Firewall cluster',
      upstream_ips: ['192.0.2.1', '198.51.100.1', 'string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.dns.firewall.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'My Awesome DNS Firewall cluster',
      upstream_ips: ['192.0.2.1', '198.51.100.1', 'string'],
      attack_mitigation: { enabled: true, only_when_upstream_unhealthy: false },
      deprecate_any_requests: true,
      ecs_fallback: false,
      maximum_cache_ttl: 900,
      minimum_cache_ttl: 60,
      negative_cache_ttl: 900,
      ratelimit: 600,
      retries: 2,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.dns.firewall.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.dns.firewall.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 1,
      per_page: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.dns.firewall.delete('023e105f4ecef8ad9ca31a8372d0c353', {
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

  test('delete: required and optional params', async () => {
    const response = await client.dns.firewall.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.dns.firewall.edit('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      id: '023e105f4ecef8ad9ca31a8372d0c353',
      deprecate_any_requests: true,
      dns_firewall_ips: ['203.0.113.1', '203.0.113.254', 'string', 'string'],
      ecs_fallback: false,
      maximum_cache_ttl: 900,
      minimum_cache_ttl: 60,
      name: 'My Awesome DNS Firewall cluster',
      upstream_ips: ['192.0.2.1', '198.51.100.1', 'string'],
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
    const response = await client.dns.firewall.edit('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      id: '023e105f4ecef8ad9ca31a8372d0c353',
      deprecate_any_requests: true,
      dns_firewall_ips: ['203.0.113.1', '203.0.113.254', 'string', 'string'],
      ecs_fallback: false,
      maximum_cache_ttl: 900,
      minimum_cache_ttl: 60,
      name: 'My Awesome DNS Firewall cluster',
      upstream_ips: ['192.0.2.1', '198.51.100.1', 'string'],
      attack_mitigation: { enabled: true, only_when_upstream_unhealthy: false },
      negative_cache_ttl: 900,
      ratelimit: 600,
      retries: 2,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.dns.firewall.get('023e105f4ecef8ad9ca31a8372d0c353', {
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

  test('get: required and optional params', async () => {
    const response = await client.dns.firewall.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
