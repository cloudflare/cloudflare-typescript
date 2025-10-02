// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource instances', () => {
  test('create: only required params', async () => {
    const responsePromise = client.workflows.instances.create('x', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.workflows.instances.create('x', {
      account_id: 'account_id',
      instance_id: 'instance_id',
      instance_retention: {},
      params: {},
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.workflows.instances.list('x', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.workflows.instances.list('x', {
      account_id: 'account_id',
      cursor: 'cursor',
      date_end: '2019-12-27T18:11:19.117Z',
      date_start: '2019-12-27T18:11:19.117Z',
      direction: 'asc',
      page: 1,
      per_page: 1,
      status: 'queued',
    });
  });

  test('bulk: only required params', async () => {
    const responsePromise = client.workflows.instances.bulk('x', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulk: required and optional params', async () => {
    const response = await client.workflows.instances.bulk('x', {
      account_id: 'account_id',
      body: [{ instance_id: 'instance_id', instance_retention: {}, params: {} }],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.workflows.instances.get('x', 'x', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.workflows.instances.get('x', 'x', { account_id: 'account_id' });
  });
});
