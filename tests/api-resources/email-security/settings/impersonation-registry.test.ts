// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource impersonationRegistry', () => {
  test('create: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.impersonationRegistry.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      email: 'john.doe@example.com',
      is_email_regex: false,
      name: 'John Doe',
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
    const response = await client.emailSecurity.settings.impersonationRegistry.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      email: 'john.doe@example.com',
      is_email_regex: false,
      name: 'John Doe',
      comments: 'comments',
      directory_id: 0,
      directory_node_id: 0,
      external_directory_node_id: 'external_directory_node_id',
      provenance: 'A1S_INTERNAL',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.impersonationRegistry.list({
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
    const response = await client.emailSecurity.settings.impersonationRegistry.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'asc',
      order: 'name',
      page: 1,
      per_page: 20,
      provenance: 'A1S_INTERNAL',
      search: 'search',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.impersonationRegistry.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.emailSecurity.settings.impersonationRegistry.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('edit: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.impersonationRegistry.edit(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.emailSecurity.settings.impersonationRegistry.edit(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        comments: 'comments',
        directory_id: 0,
        directory_node_id: 0,
        email: 'john.doe@example.com',
        external_directory_node_id: 'external_directory_node_id',
        is_email_regex: false,
        name: 'John Doe',
        provenance: 'A1S_INTERNAL',
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.impersonationRegistry.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.emailSecurity.settings.impersonationRegistry.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
