// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { TokenValidation } from 'cloudflare/resources/token-validation/token-validation';
import { BaseConfiguration } from 'cloudflare/resources/token-validation/configuration/configuration';

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
  resources: [BaseConfiguration],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [TokenValidation],
});

const runTests = (client: PartialCloudflare<{ tokenValidation: { configuration: BaseConfiguration } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.tokenValidation.configuration.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      credentials: {
        keys: [
          {
            alg: 'RS256',
            e: 'e',
            kid: 'kid',
            kty: 'RSA',
            n: 'n',
          },
        ],
      },
      description: 'Long description for Token Validation Configuration',
      title: 'Example Token Validation Configuration',
      token_sources: ['http.request.headers["x-auth"][0]', 'http.request.cookies["Authorization"][0]'],
      token_type: 'JWT',
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
    const response = await client.tokenValidation.configuration.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      credentials: {
        keys: [
          {
            alg: 'RS256',
            e: 'e',
            kid: 'kid',
            kty: 'RSA',
            n: 'n',
          },
        ],
      },
      description: 'Long description for Token Validation Configuration',
      title: 'Example Token Validation Configuration',
      token_sources: ['http.request.headers["x-auth"][0]', 'http.request.cookies["Authorization"][0]'],
      token_type: 'JWT',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.tokenValidation.configuration.list({
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
    const response = await client.tokenValidation.configuration.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 1,
      per_page: 5,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.tokenValidation.configuration.delete(
      '4a7ee8d3-dd63-4ceb-9d5f-c27831854ce7',
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
    const response = await client.tokenValidation.configuration.delete(
      '4a7ee8d3-dd63-4ceb-9d5f-c27831854ce7',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('edit: only required params', async () => {
    const responsePromise = client.tokenValidation.configuration.edit(
      '4a7ee8d3-dd63-4ceb-9d5f-c27831854ce7',
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

  test('edit: required and optional params', async () => {
    const response = await client.tokenValidation.configuration.edit('4a7ee8d3-dd63-4ceb-9d5f-c27831854ce7', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      description: 'Long description for Token Validation Configuration',
      title: 'Example Token Validation Configuration',
      token_sources: ['http.request.headers["x-auth"][0]', 'http.request.cookies["Authorization"][0]'],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.tokenValidation.configuration.get('4a7ee8d3-dd63-4ceb-9d5f-c27831854ce7', {
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
    const response = await client.tokenValidation.configuration.get('4a7ee8d3-dd63-4ceb-9d5f-c27831854ce7', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource configuration', () => runTests(client));
describe('resource configuration (tree shakable, base)', () => runTests(partialClient));
describe('resource configuration (tree shakable, subresource)', () => runTests(parentPartialClient));
