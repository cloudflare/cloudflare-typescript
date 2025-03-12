// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource categories', () => {
  test('create: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.categories.create({
      account_id: 0,
      killChain: 0,
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
    const response = await client.cloudforceOne.threatEvents.categories.create({
      account_id: 0,
      killChain: 0,
      name: 'name',
      mitreAttack: ['T1234'],
      shortname: 'shortname',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.categories.list({ account_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.categories.list({ account_id: 0 });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.categories.delete('category_id', {
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

  test('delete: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.categories.delete('category_id', {
      account_id: 0,
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.categories.edit('category_id', {
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

  test('edit: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.categories.edit('category_id', {
      account_id: 0,
      killChain: 0,
      mitreAttack: ['T1234'],
      name: 'name',
      shortname: 'shortname',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.categories.get('category_id', {
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

  test('get: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.categories.get('category_id', { account_id: 0 });
  });
});
