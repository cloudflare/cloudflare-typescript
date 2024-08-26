// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource configs', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.hyperdrive.configs.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example-hyperdrive',
      origin: { database: 'postgres', host: 'database.example.com', scheme: 'postgres', user: 'postgres' },
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
    const response = await client.hyperdrive.configs.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example-hyperdrive',
      origin: {
        database: 'postgres',
        host: 'database.example.com',
        scheme: 'postgres',
        user: 'postgres',
        access_client_id: '0123456789abcdef0123456789abcdef.access',
        port: 5432,
      },
      caching: { disabled: false, max_age: 60, stale_while_revalidate: 15 },
    });
  });

  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.hyperdrive.configs.update('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example-hyperdrive',
      origin: { database: 'postgres', host: 'database.example.com', scheme: 'postgres', user: 'postgres' },
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
    const response = await client.hyperdrive.configs.update('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example-hyperdrive',
      origin: {
        database: 'postgres',
        host: 'database.example.com',
        scheme: 'postgres',
        user: 'postgres',
        access_client_id: '0123456789abcdef0123456789abcdef.access',
        port: 5432,
      },
      caching: { disabled: false, max_age: 60, stale_while_revalidate: 15 },
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.hyperdrive.configs.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.hyperdrive.configs.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.hyperdrive.configs.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.hyperdrive.configs.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: investigate broken test
  test.skip('edit: only required params', async () => {
    const responsePromise = client.hyperdrive.configs.edit('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('edit: required and optional params', async () => {
    const response = await client.hyperdrive.configs.edit('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      caching: { disabled: false, max_age: 60, stale_while_revalidate: 15 },
      name: 'example-hyperdrive',
      origin: {
        database: 'postgres',
        host: 'database.example.com',
        scheme: 'postgres',
        user: 'postgres',
        access_client_id: '0123456789abcdef0123456789abcdef.access',
        port: 5432,
      },
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.hyperdrive.configs.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.hyperdrive.configs.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
