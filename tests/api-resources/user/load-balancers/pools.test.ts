// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pools', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.user.loadBalancers.pools.create({
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

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.user.loadBalancers.pools.create({
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

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.user.loadBalancers.pools.update('17b5962d775c646f3f9725cbc7a53df4', {
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

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.user.loadBalancers.pools.update('17b5962d775c646f3f9725cbc7a53df4', {
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

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = cloudflare.user.loadBalancers.pools.list();
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
      cloudflare.user.loadBalancers.pools.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.user.loadBalancers.pools.list({ monitor: {} }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.user.loadBalancers.pools.delete('17b5962d775c646f3f9725cbc7a53df4');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('edit', async () => {
    const responsePromise = cloudflare.user.loadBalancers.pools.edit('17b5962d775c646f3f9725cbc7a53df4', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.user.loadBalancers.pools.get('17b5962d775c646f3f9725cbc7a53df4');
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
      cloudflare.user.loadBalancers.pools.get('17b5962d775c646f3f9725cbc7a53df4', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('health', async () => {
    const responsePromise = cloudflare.user.loadBalancers.pools.health('17b5962d775c646f3f9725cbc7a53df4');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('health: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.user.loadBalancers.pools.health('17b5962d775c646f3f9725cbc7a53df4', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('preview: only required params', async () => {
    const responsePromise = cloudflare.user.loadBalancers.pools.preview('17b5962d775c646f3f9725cbc7a53df4', {
      expected_codes: '2xx',
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
  test.skip('preview: required and optional params', async () => {
    const response = await cloudflare.user.loadBalancers.pools.preview('17b5962d775c646f3f9725cbc7a53df4', {
      expected_codes: '2xx',
      allow_insecure: true,
      consecutive_down: 0,
      consecutive_up: 0,
      description: 'Login page monitor',
      expected_body: 'alive',
      follow_redirects: true,
      header: { Host: ['example.com'], 'X-App-ID': ['abc123'] },
      interval: 0,
      method: 'GET',
      path: '/health',
      port: 0,
      probe_zone: 'example.com',
      retries: 0,
      timeout: 0,
      type: 'https',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('references', async () => {
    const responsePromise = cloudflare.user.loadBalancers.pools.references(
      '17b5962d775c646f3f9725cbc7a53df4',
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
  test.skip('references: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.user.loadBalancers.pools.references('17b5962d775c646f3f9725cbc7a53df4', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
