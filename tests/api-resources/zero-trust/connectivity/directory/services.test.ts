// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource services', () => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.connectivity.directory.services.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      host: {
        hostname: 'api.example.com',
        resolver_network: { tunnel_id: '0191dce4-9ab4-7fce-b660-8e5dec5172da' },
      },
      name: 'web-server',
      type: 'http',
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
    const response = await client.zeroTrust.connectivity.directory.services.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      host: {
        hostname: 'api.example.com',
        resolver_network: { tunnel_id: '0191dce4-9ab4-7fce-b660-8e5dec5172da', resolver_ips: ['string'] },
      },
      name: 'web-server',
      type: 'http',
      http_port: 8080,
      https_port: 8443,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.connectivity.directory.services.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'account_id',
        host: { ipv4: '10.0.0.1', network: { tunnel_id: '0191dce4-9ab4-7fce-b660-8e5dec5172da' } },
        name: 'web-app',
        type: 'http',
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.zeroTrust.connectivity.directory.services.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'account_id',
        host: { ipv4: '10.0.0.1', network: { tunnel_id: '0191dce4-9ab4-7fce-b660-8e5dec5172da' } },
        name: 'web-app',
        type: 'http',
        http_port: 8080,
        https_port: 8443,
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.connectivity.directory.services.list({
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
    const response = await client.zeroTrust.connectivity.directory.services.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 1,
      per_page: 1,
      type: 'http',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.connectivity.directory.services.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
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
    const response = await client.zeroTrust.connectivity.directory.services.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.connectivity.directory.services.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
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
    const response = await client.zeroTrust.connectivity.directory.services.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
  });
});
