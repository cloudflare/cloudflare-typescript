// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Intel } from 'cloudflare/resources/intel/intel';
import { BaseSinkholes } from 'cloudflare/resources/intel/sinkholes/sinkholes';

import Cloudflare from 'cloudflare';
import { createClient, type PartialCloudflare } from 'cloudflare/tree-shakable';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseSinkholes],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Intel],
});

const runTests = (client: PartialCloudflare<{ intel: { sinkholes: BaseSinkholes } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.intel.sinkholes.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'name',
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
    const response = await client.intel.sinkholes.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'name',
      r2_bucket: 'r2_bucket',
      r2_id: 'r2_id',
      r2_secret: 'r2_secret',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.intel.sinkholes.update('93defa6e909e464e8c89a85859f36d3c', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'name',
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
    const response = await client.intel.sinkholes.update('93defa6e909e464e8c89a85859f36d3c', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'name',
      r2_bucket: 'r2_bucket',
      r2_id: 'r2_id',
      r2_secret: 'r2_secret',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.intel.sinkholes.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.intel.sinkholes.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.intel.sinkholes.delete('93defa6e909e464e8c89a85859f36d3c', {
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
    const response = await client.intel.sinkholes.delete('93defa6e909e464e8c89a85859f36d3c', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.intel.sinkholes.get('93defa6e909e464e8c89a85859f36d3c', {
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
    const response = await client.intel.sinkholes.get('93defa6e909e464e8c89a85859f36d3c', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource sinkholes', () => runTests(client));
describe('resource sinkholes (tree shakable, base)', () => runTests(partialClient));
describe('resource sinkholes (tree shakable, subresource)', () => runTests(parentPartialClient));
