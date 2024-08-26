// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource memberships', () => {
  test('update: only required params', async () => {
    const responsePromise = client.memberships.update('4536bcfad5faccb111b47003c79917fa', { status: 'accepted' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.memberships.update('4536bcfad5faccb111b47003c79917fa', { status: 'accepted' });
  });

  test('list', async () => {
    const responsePromise = client.memberships.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.memberships.list({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.memberships.list({ account: { name: 'Demo Account' }, direction: 'asc', name: 'Demo Account', order: 'id', page: 1, per_page: 5, status: 'accepted' }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.memberships.delete('4536bcfad5faccb111b47003c79917fa');
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
    await expect(client.memberships.delete('4536bcfad5faccb111b47003c79917fa', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.memberships.get('4536bcfad5faccb111b47003c79917fa');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.memberships.get('4536bcfad5faccb111b47003c79917fa', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });
});
