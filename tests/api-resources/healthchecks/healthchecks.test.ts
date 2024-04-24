// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource healthchecks', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.healthchecks.create({
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

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.healthchecks.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      address: 'www.example.com',
      name: 'server-1',
      check_regions: ['WEU', 'ENAM'],
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

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.healthchecks.update('023e105f4ecef8ad9ca31a8372d0c353', {
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

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.healthchecks.update('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      address: 'www.example.com',
      name: 'server-1',
      check_regions: ['WEU', 'ENAM'],
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

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.healthchecks.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.healthchecks.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: {},
      per_page: {},
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.healthchecks.delete('023e105f4ecef8ad9ca31a8372d0c353', {
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

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.healthchecks.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('edit: only required params', async () => {
    const responsePromise = cloudflare.healthchecks.edit('023e105f4ecef8ad9ca31a8372d0c353', {
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

  // skipped: tests are disabled for the time being
  test.skip('edit: required and optional params', async () => {
    const response = await cloudflare.healthchecks.edit('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      address: 'www.example.com',
      name: 'server-1',
      check_regions: ['WEU', 'ENAM'],
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

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.healthchecks.get('023e105f4ecef8ad9ca31a8372d0c353', {
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

  // skipped: tests are disabled for the time being
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.healthchecks.get('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
