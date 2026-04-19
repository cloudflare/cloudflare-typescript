// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accountTags', () => {
  test('update: only required params', async () => {
    const responsePromise = client.resourceTagging.accountTags.update({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      resource_id: '023e105f4ecef8ad9ca31a8372d0c353',
      resource_type: 'worker',
      worker_id: '3f72a691-44b3-4c11-8642-c18a88ddaa5e',
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
    const response = await client.resourceTagging.accountTags.update({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      resource_id: '023e105f4ecef8ad9ca31a8372d0c353',
      resource_type: 'worker',
      worker_id: '3f72a691-44b3-4c11-8642-c18a88ddaa5e',
      tags: { environment: 'production', team: 'engineering' },
      'If-Match': '"v1:RBNvo1WzZ4oRRq0W9-hkng"',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.resourceTagging.accountTags.delete({
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
    const response = await client.resourceTagging.accountTags.delete({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      'If-Match': '"v1:RBNvo1WzZ4oRRq0W9-hkng"',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.resourceTagging.accountTags.get({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      resource_id: '023e105f4ecef8ad9ca31a8372d0c353',
      resource_type: 'worker',
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
    const response = await client.resourceTagging.accountTags.get({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      resource_id: '023e105f4ecef8ad9ca31a8372d0c353',
      resource_type: 'worker',
      worker_id: '3f72a691-44b3-4c11-8642-c18a88ddaa5e',
    });
  });
});
