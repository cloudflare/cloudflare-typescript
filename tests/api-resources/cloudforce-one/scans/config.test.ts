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
    const responsePromise = client.cloudforceOne.scans.config.create({
      account_id: 'account_id',
      ips: ['1.1.1.1', '2606:4700:4700::1111'],
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
    const response = await client.cloudforceOne.scans.config.create({
      account_id: 'account_id',
      ips: ['1.1.1.1', '2606:4700:4700::1111'],
      frequency: 7,
      ports: ['default'],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.scans.config.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.cloudforceOne.scans.config.list({ account_id: 'account_id' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.cloudforceOne.scans.config.delete('config_id', {
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
    const response = await client.cloudforceOne.scans.config.delete('config_id', {
      account_id: 'account_id',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.cloudforceOne.scans.config.edit('config_id', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.cloudforceOne.scans.config.edit('config_id', {
      account_id: 'account_id',
      frequency: 7,
      ips: ['1.1.1.1', '2606:4700:4700::1111'],
      ports: ['default'],
    });
  });
});
