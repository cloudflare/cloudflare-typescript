// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource operations', () => {
  test('list: only required params', async () => {
    const responsePromise = client.apiGateway.discovery.operations.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.apiGateway.discovery.operations.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353', diff: true, direction: 'asc', endpoint: '/api/v1', host: ['api.cloudflare.com'], method: ['GET'], order: 'host', origin: 'ML', page: 1, per_page: 5, state: 'review' });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.apiGateway.discovery.operations.edit('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.apiGateway.discovery.operations.edit('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353', state: 'review' });
  });
});
