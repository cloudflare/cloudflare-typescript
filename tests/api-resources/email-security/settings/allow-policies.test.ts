// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource allowPolicies', () => {
  test('create: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.allowPolicies.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      is_acceptable_sender: false,
      is_exempt_recipient: false,
      is_regex: false,
      is_trusted_sender: true,
      pattern: 'test@example.com',
      pattern_type: 'EMAIL',
      verify_sender: true,
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
    const response = await client.emailSecurity.settings.allowPolicies.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      is_acceptable_sender: false,
      is_exempt_recipient: false,
      is_regex: false,
      is_trusted_sender: true,
      pattern: 'test@example.com',
      pattern_type: 'EMAIL',
      verify_sender: true,
      comments: 'Trust all messages send from test@example.com',
      is_recipient: false,
      is_sender: true,
      is_spoof: false,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.allowPolicies.list({
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
    const response = await client.emailSecurity.settings.allowPolicies.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'asc',
      is_acceptable_sender: true,
      is_exempt_recipient: true,
      is_recipient: true,
      is_sender: true,
      is_spoof: true,
      is_trusted_sender: true,
      order: 'pattern',
      page: 1,
      pattern: 'pattern',
      pattern_type: 'EMAIL',
      per_page: 1,
      search: 'search',
      verify_sender: true,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.allowPolicies.delete(2401, {
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
    const response = await client.emailSecurity.settings.allowPolicies.delete(2401, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.allowPolicies.edit(2401, {
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
    const response = await client.emailSecurity.settings.allowPolicies.edit(2401, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      comments: 'comments',
      is_acceptable_sender: true,
      is_exempt_recipient: true,
      is_regex: true,
      is_trusted_sender: true,
      pattern: 'x',
      pattern_type: 'EMAIL',
      verify_sender: true,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.allowPolicies.get(2401, {
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
    const response = await client.emailSecurity.settings.allowPolicies.get(2401, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
