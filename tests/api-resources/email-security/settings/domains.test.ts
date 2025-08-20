// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource domains', () => {
  test('list: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.domains.list({
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
    const response = await client.emailSecurity.settings.domains.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      active_delivery_mode: 'DIRECT',
      allowed_delivery_mode: 'DIRECT',
      direction: 'asc',
      domain: ['string'],
      order: 'domain',
      page: 1,
      per_page: 1,
      search: 'search',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.domains.delete(2400, {
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
    const response = await client.emailSecurity.settings.domains.delete(2400, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('bulkDelete: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.domains.bulkDelete({
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

  test('bulkDelete: required and optional params', async () => {
    const response = await client.emailSecurity.settings.domains.bulkDelete({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.domains.edit(2400, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      ip_restrictions: ['192.0.2.0/24', '2001:db8::/32'],
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
    const response = await client.emailSecurity.settings.domains.edit(2400, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      ip_restrictions: ['192.0.2.0/24', '2001:db8::/32'],
      allowed_delivery_modes: ['DIRECT'],
      domain: 'domain',
      drop_dispositions: ['MALICIOUS'],
      folder: 'AllItems',
      integration_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      lookback_hops: 1,
      regions: ['GLOBAL'],
      require_tls_inbound: true,
      require_tls_outbound: true,
      transport: 'transport',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.domains.get(2400, {
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
    const response = await client.emailSecurity.settings.domains.get(2400, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
