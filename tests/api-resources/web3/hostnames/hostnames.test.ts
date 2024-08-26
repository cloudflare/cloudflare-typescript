// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource hostnames', () => {
  test('create: only required params', async () => {
    const responsePromise = client.web3.hostnames.create('023e105f4ecef8ad9ca31a8372d0c353', { target: 'ethereum' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.web3.hostnames.create('023e105f4ecef8ad9ca31a8372d0c353', { target: 'ethereum', description: 'This is my IPFS gateway.', dnslink: '/ipns/onboarding.ipfs.cloudflare.com' });
  });

  test('list', async () => {
    const responsePromise = client.web3.hostnames.list('023e105f4ecef8ad9ca31a8372d0c353');
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
    await expect(client.web3.hostnames.list('023e105f4ecef8ad9ca31a8372d0c353', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.web3.hostnames.delete('023e105f4ecef8ad9ca31a8372d0c353', '023e105f4ecef8ad9ca31a8372d0c353');
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
    await expect(client.web3.hostnames.delete('023e105f4ecef8ad9ca31a8372d0c353', '023e105f4ecef8ad9ca31a8372d0c353', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('edit', async () => {
    const responsePromise = client.web3.hostnames.edit('023e105f4ecef8ad9ca31a8372d0c353', '023e105f4ecef8ad9ca31a8372d0c353', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get', async () => {
    const responsePromise = client.web3.hostnames.get('023e105f4ecef8ad9ca31a8372d0c353', '023e105f4ecef8ad9ca31a8372d0c353');
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
    await expect(client.web3.hostnames.get('023e105f4ecef8ad9ca31a8372d0c353', '023e105f4ecef8ad9ca31a8372d0c353', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });
});
