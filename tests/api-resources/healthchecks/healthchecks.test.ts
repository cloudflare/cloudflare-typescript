// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource healthchecks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.healthchecks.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      address: 'www.example.com',
      name: 'server-1',
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
    const response = await client.healthchecks.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      address: 'www.example.com',
      name: 'server-1',
      check_regions: ['WNAM', 'ENAM'],
      consecutive_fails: 0,
      consecutive_successes: 0,
      description: 'Health check for www.example.com',
      http_config: {
        allow_insecure: true,
        expected_body: 'success',
        expected_codes: ['2xx', '302'],
        follow_redirects: true,
        header: { Host: ['example.com'], 'X-App-ID': ['abc123'] },
        method: 'GET',
        path: '/health',
        port: 0,
      },
      interval: 0,
      retries: 0,
      suspended: true,
      tcp_config: { method: 'connection_established', port: 0 },
      timeout: 0,
      type: 'HTTPS',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.healthchecks.update('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      address: 'www.example.com',
      name: 'server-1',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.healthchecks.update('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      address: 'www.example.com',
      name: 'server-1',
      check_regions: ['WNAM', 'ENAM'],
      consecutive_fails: 0,
      consecutive_successes: 0,
      description: 'Health check for www.example.com',
      http_config: {
        allow_insecure: true,
        expected_body: 'success',
        expected_codes: ['2xx', '302'],
        follow_redirects: true,
        header: { Host: ['example.com'], 'X-App-ID': ['abc123'] },
        method: 'GET',
        path: '/health',
        port: 0,
      },
      interval: 0,
      retries: 0,
      suspended: true,
      tcp_config: { method: 'connection_established', port: 0 },
      timeout: 0,
      type: 'HTTPS',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.healthchecks.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.healthchecks.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 1,
      per_page: 5,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.healthchecks.delete('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await client.healthchecks.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.healthchecks.edit('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      address: 'www.example.com',
      name: 'server-1',
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
    const response = await client.healthchecks.edit('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      address: 'www.example.com',
      name: 'server-1',
      check_regions: ['WNAM', 'ENAM'],
      consecutive_fails: 0,
      consecutive_successes: 0,
      description: 'Health check for www.example.com',
      http_config: {
        allow_insecure: true,
        expected_body: 'success',
        expected_codes: ['2xx', '302'],
        follow_redirects: true,
        header: { Host: ['example.com'], 'X-App-ID': ['abc123'] },
        method: 'GET',
        path: '/health',
        port: 0,
      },
      interval: 0,
      retries: 0,
      suspended: true,
      tcp_config: { method: 'connection_established', port: 0 },
      timeout: 0,
      type: 'HTTPS',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.healthchecks.get('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await client.healthchecks.get('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
