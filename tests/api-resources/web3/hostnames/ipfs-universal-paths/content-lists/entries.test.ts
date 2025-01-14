// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource entries', () => {
  test('create: only required params', async () => {
    const responsePromise = client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.create(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
        content: 'QmPZ9gcCEpqKTo6aq61g2nXGUhM4iCL3ewB6LDXZCtioEB',
        type: 'cid',
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

  test('create: required and optional params', async () => {
    const response = await client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.create(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
        content: 'QmPZ9gcCEpqKTo6aq61g2nXGUhM4iCL3ewB6LDXZCtioEB',
        type: 'cid',
        description: 'this is my content list entry',
      },
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
        content: 'QmPZ9gcCEpqKTo6aq61g2nXGUhM4iCL3ewB6LDXZCtioEB',
        type: 'cid',
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
    const response = await client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
        content: 'QmPZ9gcCEpqKTo6aq61g2nXGUhM4iCL3ewB6LDXZCtioEB',
        type: 'cid',
        description: 'this is my content list entry',
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.list(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.list(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
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
    const response = await client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
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
    const response = await client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
