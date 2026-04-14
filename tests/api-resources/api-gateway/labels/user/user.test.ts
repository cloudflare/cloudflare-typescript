// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource user', () => {
  test('update: only required params', async () => {
    const responsePromise = client.apiGateway.labels.user.update('login', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.apiGateway.labels.user.update('login', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      description: 'All endpoints that deal with logins',
      metadata: { foo: 'bar' },
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.apiGateway.labels.user.delete('login', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.apiGateway.labels.user.delete('login', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('bulkCreate: only required params', async () => {
    const responsePromise = client.apiGateway.labels.user.bulkCreate({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [{ name: 'login' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkCreate: required and optional params', async () => {
    const response = await client.apiGateway.labels.user.bulkCreate({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [
        {
          name: 'login',
          description: 'All endpoints that deal with logins',
          metadata: { foo: 'bar' },
        },
      ],
    });
  });

  test('bulkDelete: only required params', async () => {
    const responsePromise = client.apiGateway.labels.user.bulkDelete({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkDelete: required and optional params', async () => {
    const response = await client.apiGateway.labels.user.bulkDelete({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.apiGateway.labels.user.edit('login', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.apiGateway.labels.user.edit('login', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      description: 'All endpoints that deal with logins',
      metadata: { foo: 'bar' },
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.apiGateway.labels.user.get('login', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.apiGateway.labels.user.get('login', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      with_mapped_resource_counts: true,
    });
  });
});
