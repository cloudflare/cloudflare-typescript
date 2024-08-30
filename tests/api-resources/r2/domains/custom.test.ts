// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource custom', () => {
  test('create: only required params', async () => {
    const responsePromise = client.r2.domains.custom.create('example-bucket', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      domain: 'prefix.example-domain.com',
      zoneName: 'example-domain.com',
      zoneTag: '36ca64a6d92827b8a6b90be344bb1bfd',
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
    const response = await client.r2.domains.custom.create('example-bucket', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      domain: 'prefix.example-domain.com',
      zoneName: 'example-domain.com',
      zoneTag: '36ca64a6d92827b8a6b90be344bb1bfd',
      enabled: true,
      zoneId: 'zoneId',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.r2.domains.custom.update(
      'example-bucket',
      'example-domain/custom-domain.com',
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

  test('update: required and optional params', async () => {
    const response = await client.r2.domains.custom.update(
      'example-bucket',
      'example-domain/custom-domain.com',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', enabled: true },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.r2.domains.custom.list('example-bucket', {
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
    const response = await client.r2.domains.custom.list('example-bucket', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.r2.domains.custom.delete(
      'example-bucket',
      'example-domain/custom-domain.com',
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
    const response = await client.r2.domains.custom.delete(
      'example-bucket',
      'example-domain/custom-domain.com',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
