// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource organizations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.organizations.create({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.organizations.create({
      name: 'name',
      parent: { id: 'a7b9c3d2e8f4g1h5i6j0k9l2m3n7o4p8' },
      profile: {
        business_address: 'business_address',
        business_email: 'business_email',
        business_name: 'business_name',
        business_phone: 'business_phone',
        external_metadata: 'external_metadata',
      },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.organizations.update('a7b9c3d2e8f4g1h5i6j0k9l2m3n7o4p8', { name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.organizations.update('a7b9c3d2e8f4g1h5i6j0k9l2m3n7o4p8', {
      name: 'name',
      parent: { id: 'a7b9c3d2e8f4g1h5i6j0k9l2m3n7o4p8' },
      profile: {
        business_address: 'business_address',
        business_email: 'business_email',
        business_name: 'business_name',
        business_phone: 'business_phone',
        external_metadata: 'external_metadata',
      },
    });
  });

  test('list', async () => {
    const responsePromise = client.organizations.list();
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
    await expect(client.organizations.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organizations.list(
        {
          id: ['a7b9c3d2e8f4g1h5i6j0k9l2m3n7o4p8'],
          containing: {
            account: 'account',
            organization: 'organization',
            user: 'user',
          },
          name: {
            contains: 'contains',
            endsWith: 'endsWith',
            startsWith: 'startsWith',
          },
          page_size: 0,
          page_token: 'page_token',
          parent: { id: 'a7b9c3d2e8f4g1h5i6j0k9l2m3n7o4p8' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.organizations.delete('a7b9c3d2e8f4g1h5i6j0k9l2m3n7o4p8');
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
      client.organizations.delete('a7b9c3d2e8f4g1h5i6j0k9l2m3n7o4p8', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.organizations.get('a7b9c3d2e8f4g1h5i6j0k9l2m3n7o4p8');
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
      client.organizations.get('a7b9c3d2e8f4g1h5i6j0k9l2m3n7o4p8', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
