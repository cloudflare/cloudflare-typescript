// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource prefixBindings', () => {
  test('create: only required params', async () => {
    const responsePromise = client.dls.regionalServices.prefixBindings.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      cidr: '10.0.1.0/24',
      prefix_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      region_key: 'eu',
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
    const response = await client.dls.regionalServices.prefixBindings.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      cidr: '10.0.1.0/24',
      prefix_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      region_key: 'eu',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.dls.regionalServices.prefixBindings.list({
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
    const response = await client.dls.regionalServices.prefixBindings.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      cursor: 'cursor',
      per_page: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.dls.regionalServices.prefixBindings.delete(
      'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
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
    const response = await client.dls.regionalServices.prefixBindings.delete(
      'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('edit: only required params', async () => {
    const responsePromise = client.dls.regionalServices.prefixBindings.edit(
      'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', region_key: 'eu' },
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
    const response = await client.dls.regionalServices.prefixBindings.edit(
      'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', region_key: 'eu' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.dls.regionalServices.prefixBindings.get(
      'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
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
    const response = await client.dls.regionalServices.prefixBindings.get(
      'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
