// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource resourceGroups', () => {
  test('create: only required params', async () => {
    const responsePromise = client.iam.resourceGroups.create({ account_id: 'eb78d65290b24279ba6f44721b3ea3c4', scope: { key: 'com.cloudflare.api.account.eb78d65290b24279ba6f44721b3ea3c4', objects: [{ key: 'com.cloudflare.api.account.zone.23f8d65290b24279ba6f44721b3eaad5' }, { key: 'com.cloudflare.api.account.zone.23f8d65290b24279ba6f44721b3eaad5' }, { key: 'com.cloudflare.api.account.zone.23f8d65290b24279ba6f44721b3eaad5' }] } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.iam.resourceGroups.create({ account_id: 'eb78d65290b24279ba6f44721b3ea3c4', scope: { key: 'com.cloudflare.api.account.eb78d65290b24279ba6f44721b3ea3c4', objects: [{ key: 'com.cloudflare.api.account.zone.23f8d65290b24279ba6f44721b3eaad5' }, { key: 'com.cloudflare.api.account.zone.23f8d65290b24279ba6f44721b3eaad5' }, { key: 'com.cloudflare.api.account.zone.23f8d65290b24279ba6f44721b3eaad5' }] }, meta: { editable: 'false' } });
  });

  test('update: only required params', async () => {
    const responsePromise = client.iam.resourceGroups.update('6d7f2f5f5b1d4a0e9081fdc98d432fd1', { account_id: 'eb78d65290b24279ba6f44721b3ea3c4', scope: { key: 'com.cloudflare.api.account.eb78d65290b24279ba6f44721b3ea3c4', objects: [{ key: 'com.cloudflare.api.account.zone.23f8d65290b24279ba6f44721b3eaad5' }, { key: 'com.cloudflare.api.account.zone.23f8d65290b24279ba6f44721b3eaad5' }, { key: 'com.cloudflare.api.account.zone.23f8d65290b24279ba6f44721b3eaad5' }] } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.iam.resourceGroups.update('6d7f2f5f5b1d4a0e9081fdc98d432fd1', { account_id: 'eb78d65290b24279ba6f44721b3ea3c4', scope: { key: 'com.cloudflare.api.account.eb78d65290b24279ba6f44721b3ea3c4', objects: [{ key: 'com.cloudflare.api.account.zone.23f8d65290b24279ba6f44721b3eaad5' }, { key: 'com.cloudflare.api.account.zone.23f8d65290b24279ba6f44721b3eaad5' }, { key: 'com.cloudflare.api.account.zone.23f8d65290b24279ba6f44721b3eaad5' }] }, meta: { editable: 'false' } });
  });

  test('list: only required params', async () => {
    const responsePromise = client.iam.resourceGroups.list({ account_id: 'eb78d65290b24279ba6f44721b3ea3c4' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.iam.resourceGroups.list({ account_id: 'eb78d65290b24279ba6f44721b3ea3c4', id: '6d7f2f5f5b1d4a0e9081fdc98d432fd1', name: 'NameOfTheResourceGroup', page: 1, per_page: 5 });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.iam.resourceGroups.delete('6d7f2f5f5b1d4a0e9081fdc98d432fd1', { account_id: 'eb78d65290b24279ba6f44721b3ea3c4' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.iam.resourceGroups.delete('6d7f2f5f5b1d4a0e9081fdc98d432fd1', { account_id: 'eb78d65290b24279ba6f44721b3ea3c4' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.iam.resourceGroups.get('6d7f2f5f5b1d4a0e9081fdc98d432fd1', { account_id: 'eb78d65290b24279ba6f44721b3ea3c4' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.iam.resourceGroups.get('6d7f2f5f5b1d4a0e9081fdc98d432fd1', { account_id: 'eb78d65290b24279ba6f44721b3ea3c4' });
  });
});
