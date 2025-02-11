// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource detections', () => {
  test('create: only required params', async () => {
    const responsePromise = client.leakedCredentialChecks.detections.create({
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

  test('create: required and optional params', async () => {
    const response = await client.leakedCredentialChecks.detections.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      id: '18a14bafaa8eb1df04ce683ec18c765e',
      password: 'lookup_json_string(http.request.body.raw, "secret")',
      username: 'lookup_json_string(http.request.body.raw, "user")',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.leakedCredentialChecks.detections.update(
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

  test('update: required and optional params', async () => {
    const response = await client.leakedCredentialChecks.detections.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
        id: '18a14bafaa8eb1df04ce683ec18c765e',
        password: 'lookup_json_string(http.request.body.raw, "secret")',
        username: 'lookup_json_string(http.request.body.raw, "user")',
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.leakedCredentialChecks.detections.list({
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
    const response = await client.leakedCredentialChecks.detections.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.leakedCredentialChecks.detections.delete(
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
    const response = await client.leakedCredentialChecks.detections.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
