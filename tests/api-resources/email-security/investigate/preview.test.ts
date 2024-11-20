// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource preview', () => {
  test('create: only required params', async () => {
    const responsePromise = client.emailSecurity.investigate.preview.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: ['4Njp3P0STMz2c02Q'],
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
    const response = await client.emailSecurity.investigate.preview.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: ['4Njp3P0STMz2c02Q'],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.emailSecurity.investigate.preview.get('4Njp3P0STMz2c02Q', {
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
    const response = await client.emailSecurity.investigate.preview.get('4Njp3P0STMz2c02Q', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
