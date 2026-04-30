// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource stores', () => {
  // SKIP: prism error for 422 Unprocessable Entity
  test.skip('create: only required params', async () => {
    const responsePromise = client.secretsStore.stores.create({
      account_id: '985e105f4ecef8ad9ca31a8372d0c353',
      name: 'service_x_keys',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // SKIP: prism error for 422 Unprocessable Entity
  test.skip('create: required and optional params', async () => {
    const response = await client.secretsStore.stores.create({
      account_id: '985e105f4ecef8ad9ca31a8372d0c353',
      name: 'service_x_keys',
    });
  });

  // SKIP: prism error for 422 Unprocessable Entity
  test.skip('list: only required params', async () => {
    const responsePromise = client.secretsStore.stores.list({
      account_id: '985e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // SKIP: prism error for 422 Unprocessable Entity
  test.skip('list: required and optional params', async () => {
    const response = await client.secretsStore.stores.list({
      account_id: '985e105f4ecef8ad9ca31a8372d0c353',
      direction: 'asc',
      order: 'name',
      page: 2,
      per_page: 20,
    });
  });

  // SKIP: prism error for 422 Unprocessable Entity
  test.skip('delete: only required params', async () => {
    const responsePromise = client.secretsStore.stores.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '985e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // SKIP: prism error for 422 Unprocessable Entity
  test.skip('delete: required and optional params', async () => {
    const response = await client.secretsStore.stores.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '985e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
