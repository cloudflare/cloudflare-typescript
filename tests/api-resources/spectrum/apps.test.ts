// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apps', () => {
  test('create: only required params', async () => {
    const responsePromise = client.spectrum.apps.create('023e105f4ecef8ad9ca31a8372d0c353', {
      dns: {},
      origin_dns: {},
      origin_port: 22,
      protocol: 'tcp/22',
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
    const response = await client.spectrum.apps.create('023e105f4ecef8ad9ca31a8372d0c353', {
      dns: { name: 'ssh.example.com', type: 'CNAME' },
      origin_dns: { name: 'origin.example.com', ttl: 600, type: '' },
      origin_port: 22,
      protocol: 'tcp/22',
      argo_smart_routing: true,
      edge_ips: { connectivity: 'all', type: 'dynamic' },
      ip_firewall: true,
      proxy_protocol: 'off',
      tls: 'off',
      traffic_type: 'direct',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.spectrum.apps.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'ea95132c15732412d22c1476fa83f27a',
      { dns: {}, origin_dns: {}, origin_port: 22, protocol: 'tcp/22' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.spectrum.apps.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'ea95132c15732412d22c1476fa83f27a',
      {
        dns: { name: 'ssh.example.com', type: 'CNAME' },
        origin_dns: { name: 'origin.example.com', ttl: 600, type: '' },
        origin_port: 22,
        protocol: 'tcp/22',
        argo_smart_routing: true,
        edge_ips: { connectivity: 'all', type: 'dynamic' },
        ip_firewall: true,
        proxy_protocol: 'off',
        tls: 'off',
        traffic_type: 'direct',
      },
    );
  });

  test('list', async () => {
    const responsePromise = client.spectrum.apps.list('023e105f4ecef8ad9ca31a8372d0c353');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.spectrum.apps.list('023e105f4ecef8ad9ca31a8372d0c353', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.spectrum.apps.list(
        '023e105f4ecef8ad9ca31a8372d0c353',
        { direction: 'asc', order: 'protocol', page: 1, per_page: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.spectrum.apps.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'ea95132c15732412d22c1476fa83f27a',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.spectrum.apps.delete('023e105f4ecef8ad9ca31a8372d0c353', 'ea95132c15732412d22c1476fa83f27a', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.spectrum.apps.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'ea95132c15732412d22c1476fa83f27a',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.spectrum.apps.get('023e105f4ecef8ad9ca31a8372d0c353', 'ea95132c15732412d22c1476fa83f27a', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
