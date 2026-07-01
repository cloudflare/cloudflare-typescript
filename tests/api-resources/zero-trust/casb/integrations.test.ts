// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource integrations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.integrations.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      application: 'GOOGLE_WORKSPACE',
      credentials: { admin_email: 'bar' },
      name: 'My Google Workspace',
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
    const response = await client.zeroTrust.casb.integrations.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      application: 'GOOGLE_WORKSPACE',
      credentials: { admin_email: 'bar' },
      name: 'My Google Workspace',
      auth_method: 'service_account',
      dlp_profiles: ['e91a2360-da51-4fdf-9711-bcdecd462614'],
      permissions: ['https://www.googleapis.com/auth/drive.readonly'],
      use_cases: ['casb', 'ces'],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.integrations.update('id', {
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

  test('update: required and optional params', async () => {
    const response = await client.zeroTrust.casb.integrations.update('id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      credentials: { access_token: 'bar', refresh_token: 'bar' },
      dlp_profiles: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      name: 'x',
      permissions: ['x'],
      use_cases: ['casb'],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.integrations.list({
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
    const response = await client.zeroTrust.casb.integrations.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      application: 'application',
      direction: 'asc',
      dlp_enabled: true,
      order: 'application',
      page: 0,
      page_size: 0,
      search: 'search',
      status: 'Healthy',
      use_cases: 'use_cases',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.integrations.delete('id', {
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
    const response = await client.zeroTrust.casb.integrations.delete('id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.integrations.get('id', {
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
    const response = await client.zeroTrust.casb.integrations.get('id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('pause: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.integrations.pause('id', {
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

  test('pause: required and optional params', async () => {
    const response = await client.zeroTrust.casb.integrations.pause('id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('resume: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.integrations.resume('id', {
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

  test('resume: required and optional params', async () => {
    const response = await client.zeroTrust.casb.integrations.resume('id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
