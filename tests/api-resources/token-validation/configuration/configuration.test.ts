// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource configuration', () => {
  test('create: only required params', async () => {
    const responsePromise = client.tokenValidation.configuration.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      credentials: {
        keys: [
          {
            alg: 'ES256',
            crv: 'P-256',
            kid: '38013f13-c266-4eec-a72a-92ec92779f21',
            kty: 'EC',
            x: 'KN53JRwN3wCjm2o39bvZUX2VdrsHzS8pxOAGjm8m7EQ',
            y: 'lnkkzIxaveggz-HFhcMWW15nxvOj0Z_uQsXbpK0GFcY',
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
            alg: 'ES256',
            crv: 'P-256',
            kid: '38013f13-c266-4eec-a72a-92ec92779f21',
            kty: 'EC',
            x: 'KN53JRwN3wCjm2o39bvZUX2VdrsHzS8pxOAGjm8m7EQ',
            y: 'lnkkzIxaveggz-HFhcMWW15nxvOj0Z_uQsXbpK0GFcY',
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
});
