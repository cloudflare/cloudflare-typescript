// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource smartShield', () => {
  test('update: only required params', async () => {
    const responsePromise = client.smartShield.update({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.smartShield.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      cache_reserve: { value: 'on' },
      regional_tiered_cache: { value: 'on' },
      smart_routing: { value: 'on' },
      smart_tiered_cache: { value: 'on' },
    });
  });

  test('createHealthcheck: only required params', async () => {
    const responsePromise = client.smartShield.createHealthcheck({
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

  test('createHealthcheck: required and optional params', async () => {
    const response = await client.smartShield.createHealthcheck({
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

  test('deleteHealthcheck: only required params', async () => {
    const responsePromise = client.smartShield.deleteHealthcheck('023e105f4ecef8ad9ca31a8372d0c353', {
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

  test('deleteHealthcheck: required and optional params', async () => {
    const response = await client.smartShield.deleteHealthcheck('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('editHealthcheck: only required params', async () => {
    const responsePromise = client.smartShield.editHealthcheck('023e105f4ecef8ad9ca31a8372d0c353', {
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

  test('editHealthcheck: required and optional params', async () => {
    const response = await client.smartShield.editHealthcheck('023e105f4ecef8ad9ca31a8372d0c353', {
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

  test('get: only required params', async () => {
    const responsePromise = client.smartShield.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.smartShield.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('getHealthcheck: only required params', async () => {
    const responsePromise = client.smartShield.getHealthcheck('023e105f4ecef8ad9ca31a8372d0c353', {
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

  test('getHealthcheck: required and optional params', async () => {
    const response = await client.smartShield.getHealthcheck('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('listHealthchecks: only required params', async () => {
    const responsePromise = client.smartShield.listHealthchecks({
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

  test('listHealthchecks: required and optional params', async () => {
    const response = await client.smartShield.listHealthchecks({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 1,
      per_page: 5,
    });
  });

  test('updateHealthcheck: only required params', async () => {
    const responsePromise = client.smartShield.updateHealthcheck('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      errors: [{ code: 1000, message: 'message' }],
      messages: [{ code: 1000, message: 'message' }],
      result: {},
      success: true,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateHealthcheck: required and optional params', async () => {
    const response = await client.smartShield.updateHealthcheck('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      errors: [
        {
          code: 1000,
          message: 'message',
          documentation_url: 'documentation_url',
          source: { pointer: 'pointer' },
        },
      ],
      messages: [
        {
          code: 1000,
          message: 'message',
          documentation_url: 'documentation_url',
          source: { pointer: 'pointer' },
        },
      ],
      result: {
        address: 'www.example.com',
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
        name: 'server-1',
        retries: 0,
        suspended: true,
        tcp_config: { method: 'connection_established', port: 0 },
        timeout: 0,
        type: 'HTTPS',
      },
      success: true,
    });
  });
});
