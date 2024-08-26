// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource message', () => {
  test('create', async () => {
    const responsePromise = client.cloudforceOne.requests.message.create('023e105f4ecef8ad9ca31a8372d0c353', 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.cloudforceOne.requests.message.update('023e105f4ecef8ad9ca31a8372d0c353', 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415', 0, {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.cloudforceOne.requests.message.delete('023e105f4ecef8ad9ca31a8372d0c353', 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415', 0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.cloudforceOne.requests.message.delete('023e105f4ecef8ad9ca31a8372d0c353', 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415', 0, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('get: only required params', async () => {
    const responsePromise = client.cloudforceOne.requests.message.get('023e105f4ecef8ad9ca31a8372d0c353', 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { page: 0, per_page: 10 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.cloudforceOne.requests.message.get('023e105f4ecef8ad9ca31a8372d0c353', 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { page: 0, per_page: 10, after: '2022-01-01T00:00:00Z', before: '2024-01-01T00:00:00Z', sort_by: 'created', sort_order: 'asc' });
  });
});
