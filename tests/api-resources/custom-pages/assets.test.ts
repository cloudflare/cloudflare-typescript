// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource assets', () => {
  // test missing required zone_id argument
  test.skip('create: only required params', async () => {
    const responsePromise = client.customPages.assets.create({
      description: 'Custom 500 error page',
      name: 'my_custom_error_page',
      url: 'https://example.com/error.html',
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // test missing required zone_id argument
  test.skip('create: required and optional params', async () => {
    const response = await client.customPages.assets.create({
      description: 'Custom 500 error page',
      name: 'my_custom_error_page',
      url: 'https://example.com/error.html',
      account_id: 'account_id',
    });
  });

  // test missing required zone_id argument
  test.skip('update: only required params', async () => {
    const responsePromise = client.customPages.assets.update('my_custom_error_page', {
      description: 'Custom 500 error page',
      url: 'https://example.com/error.html',
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // test missing required zone_id argument
  test.skip('update: required and optional params', async () => {
    const response = await client.customPages.assets.update('my_custom_error_page', {
      description: 'Custom 500 error page',
      url: 'https://example.com/error.html',
      account_id: 'account_id',
    });
  });

  // test missing required zone_id argument
  test.skip('list', async () => {
    const responsePromise = client.customPages.assets.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // test missing required zone_id argument
  test.skip('delete', async () => {
    const responsePromise = client.customPages.assets.delete('my_custom_error_page', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // test missing required zone_id argument
  test.skip('get', async () => {
    const responsePromise = client.customPages.assets.get('my_custom_error_page', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
