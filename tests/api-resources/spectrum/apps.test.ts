// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apps', () => {
  // TODO: investigate auth errors on test suite
  test.skip('create: only required params', async () => {
    const responsePromise = client.spectrum.apps.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      dns: {},
      protocol: 'tcp/22',
      traffic_type: 'direct',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate auth errors on test suite
  test.skip('create: required and optional params', async () => {
    const response = await client.spectrum.apps.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      dns: { name: 'ssh.example.com', type: 'CNAME' },
      protocol: 'tcp/22',
      traffic_type: 'direct',
      argo_smart_routing: true,
      edge_ips: { connectivity: 'all', type: 'dynamic' },
      ip_firewall: false,
      origin_direct: ['tcp://127.0.0.1:8080'],
      origin_dns: { name: 'origin.example.com', ttl: 600, type: '' },
      origin_port: 22,
      proxy_protocol: 'off',
      tls: 'off',
    });
  });

  // TODO: investigate auth errors on test suite
  test.skip('update: only required params', async () => {
    const responsePromise = client.spectrum.apps.update('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      dns: {},
      protocol: 'tcp/22',
      traffic_type: 'direct',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate auth errors on test suite
  test.skip('update: required and optional params', async () => {
    const response = await client.spectrum.apps.update('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      dns: { name: 'ssh.example.com', type: 'CNAME' },
      protocol: 'tcp/22',
      traffic_type: 'direct',
      argo_smart_routing: true,
      edge_ips: { connectivity: 'all', type: 'dynamic' },
      ip_firewall: false,
      origin_direct: ['tcp://127.0.0.1:8080'],
      origin_dns: { name: 'origin.example.com', ttl: 600, type: '' },
      origin_port: 22,
      proxy_protocol: 'off',
      tls: 'off',
    });
  });

  // TODO: investigate HTTP 422 errors on test suite
  test.skip('list: only required params', async () => {
    const responsePromise = client.spectrum.apps.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate HTTP 422 errors on test suite
  test.skip('list: required and optional params', async () => {
    const response = await client.spectrum.apps.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'desc',
      order: 'protocol',
      page: 1,
      per_page: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.spectrum.apps.delete('023e105f4ecef8ad9ca31a8372d0c353', {
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

  test('delete: required and optional params', async () => {
    const response = await client.spectrum.apps.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.spectrum.apps.get('023e105f4ecef8ad9ca31a8372d0c353', {
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

  test('get: required and optional params', async () => {
    const response = await client.spectrum.apps.get('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
