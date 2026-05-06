// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource config', () => {
  test('create: only required params', async () => {
    const responsePromise = client.aiGateway.billing.topup.config.create({
      account_id: 'account_id',
      amount: 5000,
      threshold: 500,
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
    const response = await client.aiGateway.billing.topup.config.create({
      account_id: 'account_id',
      amount: 5000,
      threshold: 500,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.aiGateway.billing.topup.config.delete({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.aiGateway.billing.topup.config.delete({ account_id: 'account_id' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.aiGateway.billing.topup.config.get({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.aiGateway.billing.topup.config.get({ account_id: 'account_id' });
  });
});
