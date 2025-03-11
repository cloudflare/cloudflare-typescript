// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dataset', () => {
  test('create: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.dataset.create(0, {
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
    const response = await client.cloudforceOne.threatEvents.dataset.create(0, { isPublic: true, name: 'x' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.dataset.update('datasetId', {
      accountId: 0,
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

  test('update: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.dataset.update('datasetId', {
      accountId: 0,
      isPublic: true,
      name: 'x',
    });
  });

  test('list', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.dataset.list(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.dataset.get('datasetId', { accountId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.dataset.get('datasetId', { accountId: 0 });
  });

  test('raw: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.dataset.raw('eventId', {
      accountId: 0,
      datasetId: 'datasetId',
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
    const response = await client.cloudforceOne.threatEvents.dataset.raw('eventId', {
      accountId: 0,
      datasetId: 'datasetId',
    });
  });
});
