// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource groups', () => {
  test('create: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.access.groups.create({
      include: [
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
      ],
      name: 'Allow devs',
      account_id: 'string',
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
    const response = await cloudflare.zeroTrust.access.groups.create({
      include: [
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
      ],
      name: 'Allow devs',
      account_id: 'string',
      exclude: [
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
      ],
      is_default: true,
      require: [
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
      ],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.access.groups.update(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        include: [
          { email: { email: 'test@example.com' } },
          { email: { email: 'test@example.com' } },
          { email: { email: 'test@example.com' } },
        ],
        name: 'Allow devs',
        account_id: 'string',
      },
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
    const response = await cloudflare.zeroTrust.access.groups.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      include: [
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
      ],
      name: 'Allow devs',
      account_id: 'string',
      exclude: [
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
      ],
      is_default: true,
      require: [
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
      ],
    });
  });

  test('list', async () => {
    const responsePromise = cloudflare.zeroTrust.access.groups.list({ account_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = cloudflare.zeroTrust.access.groups.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: 'string' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get', async () => {
    const responsePromise = cloudflare.zeroTrust.access.groups.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
