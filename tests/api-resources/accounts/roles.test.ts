// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource roles', () => {
  test('list: only required params', async () => {
    const responsePromise = client.accounts.roles.list({ account_id: 'eb78d65290b24279ba6f44721b3ea3c4' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.accounts.roles.list({ account_id: 'eb78d65290b24279ba6f44721b3ea3c4' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.accounts.roles.get('3536bcfad5faccb999b47003c79917fb', {
      account_id: 'eb78d65290b24279ba6f44721b3ea3c4',
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
    const response = await client.accounts.roles.get('3536bcfad5faccb999b47003c79917fb', {
      account_id: 'eb78d65290b24279ba6f44721b3ea3c4',
    });
  });
});
