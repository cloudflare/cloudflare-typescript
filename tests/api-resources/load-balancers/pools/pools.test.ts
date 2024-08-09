// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pools', () => {
  test('create: only required params', async () => {
    const responsePromise = client.loadBalancers.pools.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'primary-dc-1',
      origins: [{}, {}, {}],
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
    const response = await client.loadBalancers.pools.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'primary-dc-1',
      origins: [
        {
          address: '0.0.0.0',
          enabled: true,
          header: { Host: ['example.com', 'example.com', 'example.com'] },
          name: 'app-server-1',
          virtual_network_id: 'a5624d4e-044a-4ff0-b3e1-e2465353d4b4',
          weight: 0.6,
        },
        {
          address: '0.0.0.0',
          enabled: true,
          header: { Host: ['example.com', 'example.com', 'example.com'] },
          name: 'app-server-1',
          virtual_network_id: 'a5624d4e-044a-4ff0-b3e1-e2465353d4b4',
          weight: 0.6,
        },
        {
          address: '0.0.0.0',
          enabled: true,
          header: { Host: ['example.com', 'example.com', 'example.com'] },
          name: 'app-server-1',
          virtual_network_id: 'a5624d4e-044a-4ff0-b3e1-e2465353d4b4',
          weight: 0.6,
        },
      ],
      description: 'Primary data center - Provider XYZ',
      enabled: false,
      latitude: 0,
      load_shedding: {
        default_percent: 0,
        default_policy: 'random',
        session_percent: 0,
        session_policy: 'hash',
      },
      longitude: 0,
      minimum_origins: 0,
      monitor: {},
      notification_email: 'someone@example.com,sometwo@example.com',
      notification_filter: {
        origin: { disable: true, healthy: true },
        pool: { disable: true, healthy: false },
      },
      origin_steering: { policy: 'random' },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.loadBalancers.pools.update('17b5962d775c646f3f9725cbc7a53df4', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'primary-dc-1',
      origins: [{}, {}, {}],
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
    const response = await client.loadBalancers.pools.update('17b5962d775c646f3f9725cbc7a53df4', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'primary-dc-1',
      origins: [
        {
          address: '0.0.0.0',
          enabled: true,
          header: { Host: ['example.com', 'example.com', 'example.com'] },
          name: 'app-server-1',
          virtual_network_id: 'a5624d4e-044a-4ff0-b3e1-e2465353d4b4',
          weight: 0.6,
        },
        {
          address: '0.0.0.0',
          enabled: true,
          header: { Host: ['example.com', 'example.com', 'example.com'] },
          name: 'app-server-1',
          virtual_network_id: 'a5624d4e-044a-4ff0-b3e1-e2465353d4b4',
          weight: 0.6,
        },
        {
          address: '0.0.0.0',
          enabled: true,
          header: { Host: ['example.com', 'example.com', 'example.com'] },
          name: 'app-server-1',
          virtual_network_id: 'a5624d4e-044a-4ff0-b3e1-e2465353d4b4',
          weight: 0.6,
        },
      ],
      check_regions: ['WEU', 'ENAM'],
      description: 'Primary data center - Provider XYZ',
      enabled: false,
      latitude: 0,
      load_shedding: {
        default_percent: 0,
        default_policy: 'random',
        session_percent: 0,
        session_policy: 'hash',
      },
      longitude: 0,
      minimum_origins: 0,
      monitor: {},
      notification_email: 'someone@example.com,sometwo@example.com',
      notification_filter: {
        origin: { disable: true, healthy: true },
        pool: { disable: true, healthy: false },
      },
      origin_steering: { policy: 'random' },
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.loadBalancers.pools.list({
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

  test('list: required and optional params', async () => {
    const response = await client.loadBalancers.pools.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      monitor: {},
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.loadBalancers.pools.delete('17b5962d775c646f3f9725cbc7a53df4', {
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
    const response = await client.loadBalancers.pools.delete('17b5962d775c646f3f9725cbc7a53df4', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.loadBalancers.pools.edit('17b5962d775c646f3f9725cbc7a53df4', {
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

  test('edit: required and optional params', async () => {
    const response = await client.loadBalancers.pools.edit('17b5962d775c646f3f9725cbc7a53df4', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      check_regions: ['WEU', 'ENAM'],
      description: 'Primary data center - Provider XYZ',
      enabled: false,
      latitude: 0,
      load_shedding: {
        default_percent: 0,
        default_policy: 'random',
        session_percent: 0,
        session_policy: 'hash',
      },
      longitude: 0,
      minimum_origins: 0,
      monitor: {},
      name: 'primary-dc-1',
      notification_email: 'someone@example.com,sometwo@example.com',
      notification_filter: {
        origin: { disable: true, healthy: true },
        pool: { disable: true, healthy: false },
      },
      origin_steering: { policy: 'random' },
      origins: [
        {
          address: '0.0.0.0',
          enabled: true,
          header: { Host: ['example.com', 'example.com', 'example.com'] },
          name: 'app-server-1',
          virtual_network_id: 'a5624d4e-044a-4ff0-b3e1-e2465353d4b4',
          weight: 0.6,
        },
        {
          address: '0.0.0.0',
          enabled: true,
          header: { Host: ['example.com', 'example.com', 'example.com'] },
          name: 'app-server-1',
          virtual_network_id: 'a5624d4e-044a-4ff0-b3e1-e2465353d4b4',
          weight: 0.6,
        },
        {
          address: '0.0.0.0',
          enabled: true,
          header: { Host: ['example.com', 'example.com', 'example.com'] },
          name: 'app-server-1',
          virtual_network_id: 'a5624d4e-044a-4ff0-b3e1-e2465353d4b4',
          weight: 0.6,
        },
      ],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.loadBalancers.pools.get('17b5962d775c646f3f9725cbc7a53df4', {
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
    const response = await client.loadBalancers.pools.get('17b5962d775c646f3f9725cbc7a53df4', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
