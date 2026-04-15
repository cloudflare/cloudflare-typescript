// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.dex.rules.create({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      match: 'match',
      name: 'name',
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
    const response = await client.zeroTrust.dex.rules.create({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      match: 'match',
      name: 'name',
      description: 'description',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.dex.rules.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
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
    const response = await client.zeroTrust.dex.rules.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
      description: 'description',
      match: 'match',
      name: 'name',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.dex.rules.list({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      page: 1,
      per_page: 1,
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
    const response = await client.zeroTrust.dex.rules.list({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      page: 1,
      per_page: 1,
      name: 'name',
      sort_by: 'name',
      sort_order: 'ASC',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.dex.rules.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
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
    const response = await client.zeroTrust.dex.rules.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.dex.rules.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
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
    const response = await client.zeroTrust.dex.rules.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
    });
  });
});
