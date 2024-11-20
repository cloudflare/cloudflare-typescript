// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource move', () => {
  test('create: only required params', async () => {
    const responsePromise = client.emailSecurity.investigate.move.create('4Njp3P0STMz2c02Q', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      destination: 'Inbox',
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
    const response = await client.emailSecurity.investigate.move.create('4Njp3P0STMz2c02Q', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      destination: 'Inbox',
    });
  });

  test('bulk: only required params', async () => {
    const responsePromise = client.emailSecurity.investigate.move.bulk({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      destination: 'Inbox',
      postfix_ids: ['4Njp3P0STMz2c02Q'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulk: required and optional params', async () => {
    const response = await client.emailSecurity.investigate.move.bulk({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      destination: 'Inbox',
      postfix_ids: ['4Njp3P0STMz2c02Q'],
    });
  });
});
