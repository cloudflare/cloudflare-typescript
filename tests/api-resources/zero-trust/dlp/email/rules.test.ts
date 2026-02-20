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
    const responsePromise = client.zeroTrust.dlp.email.rules.create({
      account_id: 'account_id',
      action: { action: 'Block' },
      conditions: [
        {
          operator: 'InList',
          selector: 'Recipients',
          value: ['string'],
        },
      ],
      enabled: true,
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
    const response = await client.zeroTrust.dlp.email.rules.create({
      account_id: 'account_id',
      action: { action: 'Block', message: 'message' },
      conditions: [
        {
          operator: 'InList',
          selector: 'Recipients',
          value: ['string'],
        },
      ],
      enabled: true,
      name: 'name',
      description: 'description',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.email.rules.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
      action: { action: 'Block' },
      conditions: [
        {
          operator: 'InList',
          selector: 'Recipients',
          value: ['string'],
        },
      ],
      enabled: true,
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

  test('update: required and optional params', async () => {
    const response = await client.zeroTrust.dlp.email.rules.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
      action: { action: 'Block', message: 'message' },
      conditions: [
        {
          operator: 'InList',
          selector: 'Recipients',
          value: ['string'],
        },
      ],
      enabled: true,
      name: 'name',
      description: 'description',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.email.rules.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.dlp.email.rules.list({ account_id: 'account_id' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.email.rules.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
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
    const response = await client.zeroTrust.dlp.email.rules.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
    });
  });

  test('bulkEdit: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.email.rules.bulkEdit({
      account_id: 'account_id',
      new_priorities: { foo: 0 },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkEdit: required and optional params', async () => {
    const response = await client.zeroTrust.dlp.email.rules.bulkEdit({
      account_id: 'account_id',
      new_priorities: { foo: 0 },
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.email.rules.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
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
    const response = await client.zeroTrust.dlp.email.rules.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
    });
  });
});
