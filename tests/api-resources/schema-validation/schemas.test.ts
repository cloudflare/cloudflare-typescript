// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource schemas', () => {
  test('create: only required params', async () => {
    const responsePromise = client.schemaValidation.schemas.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      kind: 'openapi_v3',
      name: 'petstore schema',
      source: '<schema file contents>',
      validation_enabled: true,
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
    const response = await client.schemaValidation.schemas.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      kind: 'openapi_v3',
      name: 'petstore schema',
      source: '<schema file contents>',
      validation_enabled: true,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.schemaValidation.schemas.list({
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
    const response = await client.schemaValidation.schemas.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      omit_source: true,
      page: 1,
      per_page: 5,
      validation_enabled: true,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.schemaValidation.schemas.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
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

  test('delete: required and optional params', async () => {
    const response = await client.schemaValidation.schemas.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.schemaValidation.schemas.edit('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
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

  test('edit: required and optional params', async () => {
    const response = await client.schemaValidation.schemas.edit('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      validation_enabled: true,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.schemaValidation.schemas.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
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

  test('get: required and optional params', async () => {
    const response = await client.schemaValidation.schemas.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      omit_source: true,
    });
  });
});
