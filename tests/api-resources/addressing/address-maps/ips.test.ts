// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ips', () => {
  test('update: only required params', async () => {
    const responsePromise = client.addressing.addressMaps.ips.update('192.0.2.1', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
      address_map_id: '055817b111884e0227e1be16a0be6ee0',
      body: {},
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
    const response = await client.addressing.addressMaps.ips.update('192.0.2.1', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
      address_map_id: '055817b111884e0227e1be16a0be6ee0',
      body: {},
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.addressing.addressMaps.ips.delete('192.0.2.1', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
      address_map_id: '055817b111884e0227e1be16a0be6ee0',
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
    const response = await client.addressing.addressMaps.ips.delete('192.0.2.1', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
      address_map_id: '055817b111884e0227e1be16a0be6ee0',
    });
  });
});
