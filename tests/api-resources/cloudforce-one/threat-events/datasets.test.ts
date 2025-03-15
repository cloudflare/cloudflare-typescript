// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource datasets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.datasets.create({
      account_id: 0,
      isPublic: true,
      name: 'x',
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
    const response = await client.cloudforceOne.threatEvents.datasets.create({
      account_id: 0,
      isPublic: true,
      name: 'x',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.datasets.list({ account_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.datasets.list({ account_id: 0 });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.datasets.edit('dataset_id', {
      account_id: 0,
      isPublic: true,
      name: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.datasets.edit('dataset_id', {
      account_id: 0,
      isPublic: true,
      name: 'x',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.datasets.get('dataset_id', { account_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.datasets.get('dataset_id', { account_id: 0 });
  });

  test('raw: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.datasets.raw('dataset_id', 'event_id', {
      account_id: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('raw: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.datasets.raw('dataset_id', 'event_id', {
      account_id: 0,
    });
  });
});
