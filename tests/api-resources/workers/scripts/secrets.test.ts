// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource secrets', () => {
  test('update: only required params', async () => {
    const responsePromise = client.workers.scripts.secrets.update('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'myBinding',
      text: 'My secret.',
      type: 'secret_text',
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
    const response = await client.workers.scripts.secrets.update('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'myBinding',
      text: 'My secret.',
      type: 'secret_text',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.workers.scripts.secrets.list('this-is_my_script-01', {
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
    const response = await client.workers.scripts.secrets.list('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.workers.scripts.secrets.delete('this-is_my_script-01', 'mySecret', {
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
    const response = await client.workers.scripts.secrets.delete('this-is_my_script-01', 'mySecret', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      url_encoded: true,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.workers.scripts.secrets.get('this-is_my_script-01', 'mySecret', {
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
    const response = await client.workers.scripts.secrets.get('this-is_my_script-01', 'mySecret', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      url_encoded: true,
    });
  });
});
