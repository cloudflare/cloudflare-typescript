// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIGateway } from 'cloudflare/resources/api-gateway/api-gateway';
import { BaseUserSchemas } from 'cloudflare/resources/api-gateway/user-schemas/user-schemas';

import Cloudflare, { toFile } from 'cloudflare';
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
  resources: [BaseUserSchemas],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [APIGateway],
});

const runTests = (client: PartialCloudflare<{ apiGateway: { userSchemas: BaseUserSchemas } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.apiGateway.userSchemas.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      kind: 'openapi_v3',
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
    const response = await client.apiGateway.userSchemas.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      kind: 'openapi_v3',
      name: 'petstore schema',
      validation_enabled: 'true',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.apiGateway.userSchemas.list({
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
    const response = await client.apiGateway.userSchemas.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      omit_source: true,
      page: 1,
      per_page: 5,
      validation_enabled: true,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.apiGateway.userSchemas.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
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
    const response = await client.apiGateway.userSchemas.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.apiGateway.userSchemas.edit('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
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
    const response = await client.apiGateway.userSchemas.edit('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      validation_enabled: true,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.apiGateway.userSchemas.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
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
    const response = await client.apiGateway.userSchemas.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      omit_source: true,
    });
  });
};
describe('resource userSchemas', () => runTests(client));
describe('resource userSchemas (tree shakable, base)', () => runTests(partialClient));
describe('resource userSchemas (tree shakable, subresource)', () => runTests(parentPartialClient));
