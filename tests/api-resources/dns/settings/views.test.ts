// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource views', () => {
  // generated params are incorrect
  test.skip('create: only required params', async () => {
    const responsePromise = client.dns.settings.views.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'my view',
      zones: ['372e67954025e0ba6aaa6d586b9e0b59'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // generated params are incorrect
  test.skip('create: required and optional params', async () => {
    const response = await client.dns.settings.views.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'my view',
      zones: ['372e67954025e0ba6aaa6d586b9e0b59'],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.dns.settings.views.list({
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
    const response = await client.dns.settings.views.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'asc',
      match: 'any',
      name: { contains: 'view', endswith: 'ew', exact: 'my view', startswith: 'my' },
      order: 'name',
      page: 1,
      per_page: 5,
      zone_id: 'ae29bea30e2e427ba9cd8d78b628177b',
      zone_name: 'www.example.com',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.dns.settings.views.delete('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await client.dns.settings.views.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.dns.settings.views.edit('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await client.dns.settings.views.edit('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'my view',
      zones: ['372e67954025e0ba6aaa6d586b9e0b59'],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.dns.settings.views.get('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await client.dns.settings.views.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
