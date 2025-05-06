// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource operations', () => {
  test('update: only required params', async () => {
    const responsePromise = client.schemaValidation.settings.operations.update(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353', mitigation_action: 'block' },
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
    const response = await client.schemaValidation.settings.operations.update(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353', mitigation_action: 'block' },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.schemaValidation.settings.operations.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.schemaValidation.settings.operations.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 1,
      per_page: 5,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.schemaValidation.settings.operations.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
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
    const response = await client.schemaValidation.settings.operations.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('bulkEdit: only required params', async () => {
    const responsePromise = client.schemaValidation.settings.operations.bulkEdit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: { '3818d821-5901-4147-a474-f5f5aec1d54e': {}, 'b17c8043-99a0-4202-b7d9-8f7cdbee02cd': {} },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkEdit: required and optional params', async () => {
    const response = await client.schemaValidation.settings.operations.bulkEdit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {
        '3818d821-5901-4147-a474-f5f5aec1d54e': { mitigation_action: 'log' },
        'b17c8043-99a0-4202-b7d9-8f7cdbee02cd': { mitigation_action: 'block' },
      },
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.schemaValidation.settings.operations.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
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
    const response = await client.schemaValidation.settings.operations.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
