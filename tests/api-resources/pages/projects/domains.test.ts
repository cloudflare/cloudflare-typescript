// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource domains', () => {
  test('create: only required params', async () => {
    const responsePromise = client.pages.projects.domains.create('this-is-my-project-01', {
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

  test('create: required and optional params', async () => {
    const response = await client.pages.projects.domains.create('this-is-my-project-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example.com',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.pages.projects.domains.list('this-is-my-project-01', {
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
    const response = await client.pages.projects.domains.list('this-is-my-project-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.pages.projects.domains.delete(
      'this-is-my-project-01',
      'this-is-my-domain-01.com',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.pages.projects.domains.delete(
      'this-is-my-project-01',
      'this-is-my-domain-01.com',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('edit: only required params', async () => {
    const responsePromise = client.pages.projects.domains.edit(
      'this-is-my-project-01',
      'this-is-my-domain-01.com',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', body: {} },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.pages.projects.domains.edit(
      'this-is-my-project-01',
      'this-is-my-domain-01.com',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', body: {} },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.pages.projects.domains.get(
      'this-is-my-project-01',
      'this-is-my-domain-01.com',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.pages.projects.domains.get(
      'this-is-my-project-01',
      'this-is-my-domain-01.com',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
