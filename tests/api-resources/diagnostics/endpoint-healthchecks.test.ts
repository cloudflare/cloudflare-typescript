// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource endpointHealthchecks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.diagnostics.endpointHealthchecks.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      check_type: 'icmp',
      endpoint: '203.0.113.1',
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
    const response = await client.diagnostics.endpointHealthchecks.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      check_type: 'icmp',
      endpoint: '203.0.113.1',
      name: 'My Endpoint',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.diagnostics.endpointHealthchecks.update(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', check_type: 'icmp', endpoint: '203.0.113.1' },
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
    const response = await client.diagnostics.endpointHealthchecks.update(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        check_type: 'icmp',
        endpoint: '203.0.113.1',
        name: 'My Endpoint',
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.diagnostics.endpointHealthchecks.list({
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
    const response = await client.diagnostics.endpointHealthchecks.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.diagnostics.endpointHealthchecks.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
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
    const response = await client.diagnostics.endpointHealthchecks.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.diagnostics.endpointHealthchecks.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
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
    const response = await client.diagnostics.endpointHealthchecks.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
