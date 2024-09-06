// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tokens', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.user.tokens.create({
      name: 'readonly token',
      policies: [
        { effect: 'allow', permission_groups: [{}, {}], resources: {} },
        { effect: 'allow', permission_groups: [{}, {}], resources: {} },
        { effect: 'allow', permission_groups: [{}, {}], resources: {} },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('create: required and optional params', async () => {
    const response = await client.user.tokens.create({
      name: 'readonly token',
      policies: [
        {
          effect: 'allow',
          permission_groups: [
            { meta: { key: 'key', value: 'value' } },
            { meta: { key: 'key', value: 'value' } },
          ],
          resources: { resource: 'resource', scope: 'scope' },
        },
        {
          effect: 'allow',
          permission_groups: [
            { meta: { key: 'key', value: 'value' } },
            { meta: { key: 'key', value: 'value' } },
          ],
          resources: { resource: 'resource', scope: 'scope' },
        },
        {
          effect: 'allow',
          permission_groups: [
            { meta: { key: 'key', value: 'value' } },
            { meta: { key: 'key', value: 'value' } },
          ],
          resources: { resource: 'resource', scope: 'scope' },
        },
      ],
      condition: {
        'request.ip': {
          in: ['123.123.123.0/24', '2606:4700::/32'],
          not_in: ['123.123.123.100/24', '2606:4700:4700::/48'],
        },
      },
      expires_on: '2020-01-01T00:00:00Z',
      not_before: '2018-07-01T05:20:00Z',
    });
  });

  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.user.tokens.update('ed17574386854bf78a67040be0a770b0', {
      name: 'readonly token',
      policies: [
        { effect: 'allow', permission_groups: [{}, {}], resources: {} },
        { effect: 'allow', permission_groups: [{}, {}], resources: {} },
        { effect: 'allow', permission_groups: [{}, {}], resources: {} },
      ],
      status: 'active',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('update: required and optional params', async () => {
    const response = await client.user.tokens.update('ed17574386854bf78a67040be0a770b0', {
      name: 'readonly token',
      policies: [
        {
          effect: 'allow',
          permission_groups: [
            { meta: { key: 'key', value: 'value' } },
            { meta: { key: 'key', value: 'value' } },
          ],
          resources: { resource: 'resource', scope: 'scope' },
        },
        {
          effect: 'allow',
          permission_groups: [
            { meta: { key: 'key', value: 'value' } },
            { meta: { key: 'key', value: 'value' } },
          ],
          resources: { resource: 'resource', scope: 'scope' },
        },
        {
          effect: 'allow',
          permission_groups: [
            { meta: { key: 'key', value: 'value' } },
            { meta: { key: 'key', value: 'value' } },
          ],
          resources: { resource: 'resource', scope: 'scope' },
        },
      ],
      status: 'active',
      condition: {
        'request.ip': {
          in: ['123.123.123.0/24', '2606:4700::/32'],
          not_in: ['123.123.123.100/24', '2606:4700:4700::/48'],
        },
      },
      expires_on: '2020-01-01T00:00:00Z',
      not_before: '2018-07-01T05:20:00Z',
    });
  });

  test('list', async () => {
    const responsePromise = client.user.tokens.list();
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
    await expect(client.user.tokens.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.user.tokens.list(
        { direction: 'asc', page: 1, per_page: 5 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.user.tokens.delete('ed17574386854bf78a67040be0a770b0');
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
    await expect(
      client.user.tokens.delete('ed17574386854bf78a67040be0a770b0', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.user.tokens.get('ed17574386854bf78a67040be0a770b0');
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
    await expect(
      client.user.tokens.get('ed17574386854bf78a67040be0a770b0', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('verify', async () => {
    const responsePromise = client.user.tokens.verify();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('verify: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.user.tokens.verify({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });
});
