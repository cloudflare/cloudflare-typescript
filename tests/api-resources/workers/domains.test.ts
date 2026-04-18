// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource domains', () => {
  test('update: only required params', async () => {
    const responsePromise = client.workers.domains.update({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      hostname: 'app.example.com',
      service: 'my-worker',
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
    const response = await client.workers.domains.update({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      hostname: 'app.example.com',
      service: 'my-worker',
      environment: 'production',
      zone_id: '593c9c94de529bbbfaac7c53ced0447d',
      zone_name: 'example.com',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.workers.domains.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.workers.domains.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      environment: 'production',
      hostname: 'app.example.com',
      service: 'my-worker',
      zone_id: '593c9c94de529bbbfaac7c53ced0447d',
      zone_name: 'example.com',
    });
  });

  // TODO: investigate broken test
  test.skip('delete: only required params', async () => {
    const responsePromise = client.workers.domains.delete('dbe10b4bc17c295377eabd600e1787fd', {
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.workers.domains.delete('dbe10b4bc17c295377eabd600e1787fd', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.workers.domains.get('dbe10b4bc17c295377eabd600e1787fd', {
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
    const response = await client.workers.domains.get('dbe10b4bc17c295377eabd600e1787fd', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
